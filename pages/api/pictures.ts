import { NextApiHandler } from "next";
import { connection } from "../../server/database";

const handler: NextApiHandler = async (req, res) => {
  // posting and getting pictures
  if (req.method === "POST") {
    await postHandler(req, res);
  } else if (req.method === "GET") {
    await getHandler(req, res);
  } else {
    res.status(404).send(undefined);
  }
};

const postHandler: NextApiHandler = async (req, res) => {
  // TODO: do some validation
  
  await connection.connect();
  
  // get data from the body
  const { pictureUrl, author, description } = req.body;

  // check if it exsts already
  const query = `SELECT * FROM pictures WHERE picture_url = '${pictureUrl}';`;
  const result1 = await connection.query(query);
  
  if (result1.rowCount > 0) {
    return res.status(200).json(result1.rows[0]);
  }
  
  // make the update to the db
  await connection.query(`INSERT INTO pictures (author, description, picture_url) VALUES ('${author}', '${description}', '${pictureUrl}');`);
  
  // send back 201 if successful
  const result = await connection.query(`SELECT * FROM pictures WHERE PICTURE_URL = '${pictureUrl}';`);
  // clean the data
  // send back the data
  return res.status(201).json(result);
}

const getHandler: NextApiHandler = async (req, res) => {
  await connection.connect();

  const result = await connection.query(`SELECT * from recipes;`);
  console.log(result);
  // todo: implement this part
  await connection.clean();
  res.status(200).send(undefined);
}

export default handler;

import { NextApiHandler } from "next";
import { connection } from "../../server/database";
import { PicturesApiRequestSchema } from "../../server/validator";

const handler: NextApiHandler = async (req, res) => {
  // posting and getting pictures
  await connection.connect();
  if (req.method === "POST") {
    await postHandler(req, res);
  } else if (req.method === "GET") {
    await getHandler(req, res);
  } else {
    res.status(404).send(undefined);
  }
  await connection.clean();
};

const postHandler: NextApiHandler = async (req, res) => {
  // get data from the body
  const { value, error } = PicturesApiRequestSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.message);
  }
  const { pictureUrl, author, description } = value;

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
  return res.status(201).json(result.rows);
}

const getHandler: NextApiHandler = async (req, res) => {
  const result = await connection.query(`SELECT * from pictures;`);
  res.status(200).json({ pictures: result.rows });
}

export default handler;

import { NextApiHandler } from "next";
import { connection } from "../../utils/database";

const handler: NextApiHandler = async (req, res) => {
  await connection.connect();

  const result = await connection.query(`SELECT * from recipes;`);
  console.log(result);
  // todo: implement this part
  await connection.clean();
  res.status(200).send(undefined);
};

export default handler;

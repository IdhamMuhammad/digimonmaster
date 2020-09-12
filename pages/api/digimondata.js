// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import digimonData from "./../../data/digimonData";

export default (req, res) => {
  res.statusCode = 200;
  res.json(digimonData);
};

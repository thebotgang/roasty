const axios = require("axios");
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const roast = await axios.get("https://insult.mattbas.org/api/insult.json?plural=on");

  res.send({
    response_type: "in_channel",
    text: roast.data.insult
  });
});

export default handler;

const axios = require("axios");
import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const roastee = req.body.text;
  let response;

  if (roastee) {
    const roast = await axios.get(`https://insult.mattbas.org/api/insult.json?plural=on`);
    const insult = roast.data.insult.charAt(0).toLowerCase() + roast.data.insult.slice(1);
    response = `${roastee}, ${insult}`;
  } else {
    response = "Please specify the user you want to roast.";
  }

  res.send({
    response_type: "in_channel",
    text: response
  });
});

export default handler;

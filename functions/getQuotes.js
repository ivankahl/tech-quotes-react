const axios = require("axios");
const https = require("https");

exports.handler = async event => {
  const quotes = await axios.get(
    "https://quotes.stormconsultancy.co.uk/random.json",
    {
      method: "POST",
      httpsAgent: https.Agent({
        rejectUnauthorized: false
      })
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify(quotes)
  };
};

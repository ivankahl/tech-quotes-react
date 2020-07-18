const axios = require("axios");
const https = require("https");

exports.handler = async event => {
  const quotes = (await axios.request({
    url: "https://quotes.stormconsultancy.co.uk/random.json",
    method: "POST",
    httpsAgent: https.Agent({
      rejectUnauthorized: false
    })
  })).data;

  return {
    statusCode: 200,
    body: quotes
  };
};

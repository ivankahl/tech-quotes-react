const axios = require("axios");
const https = require("https");

exports.handler = async event => {
  const instance = axios.create({
    baseURL: "https://quotes.stormconsultancy.co.uk/",
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  const quotes = await instance.get("random.json", { method: "POST" });

  return {
    statusCode: 200,
    body: JSON.stringify(quotes)
  };
};

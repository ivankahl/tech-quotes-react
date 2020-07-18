import axios from "axios";

exports.handler = async event => {
  const quotes = (await axios.get(
    "https://quotes.stormconsultancy.co.uk/random.json"
  )).data;

  return {
    statusCode: 200,
    body: quotes
  };
};

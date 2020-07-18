const http = require("http");

exports.handler = (event, context, callback) => {
  http
    .get("http://quotes.stormconsultancy.co.uk/quotes.json", response => {
      let data = "";

      response.on("data", chunk => {
        data += chunk;
      });

      response.on("end", () => {
        callback(null, {
          statusCode: 200,
          body: data,
          headers: { "Content-Type": "application/json" }
        });
      });
    })
    .on("error", err => {
      callback(err);
    });
};

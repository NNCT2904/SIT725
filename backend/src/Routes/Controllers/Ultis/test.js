var request = require("request");
var expect = require("chai").expect;

describe("Ping server test", () => {
  var url = "http://localhost:3000/api/serverCheck";
  it("Should respond when pinging the server", (done) => {
    request(url, (response, body, error) => {
      expect(body.statusCode).to.equal(200);
      expect(body.body).to.equal('"Server Running!"');
      done();
    });
  });
});

describe("Adder test", () => {
  var url = "http://localhost:3000/api/adder";
  it("Should respond to 2 numbers", (done) => {
    var options = {
      uri: url,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num1: 3, num2: 5 }),
    };
    request(options, (response, body, error) => {
      expect(body.statusCode).to.equal(200);
      expect(body.body).to.equal('"3 + 5 = 8"');
      done();
    });
  });
});

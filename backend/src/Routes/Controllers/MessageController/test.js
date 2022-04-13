const { response } = require("express");
var request = require("request");
var expect = require("chai").expect;

describe("Message Controller test", () => {
  var url = "http://localhost:3000/api";

  var messageObject = {
    text: "",
    _id: "",
  };

  it("Should be able to send a message", (done) => {
    const options = {
      uri: url + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "test" }),
    };
    request(options, (response, body, error) => {
      messageObject = JSON.parse(body.body);
      expect(body.statusCode).to.equal(200);
      expect(messageObject.text).to.equal("test");
      done();
    });
  });

  it("Should be able to get all messages as an array", (done) => {
    const options = {
      uri: url + "/getAllMessages",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, (response, body, error) => {
      const messages = JSON.parse(body.body);
      expect(body.statusCode).to.equal(200);
      expect(Array.isArray(messages)).to.equal(true);
      done();
    });
  });

  it("Should be able to get a message by its id", (done) => {
    const options = {
      uri: url + "/getMessage",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: messageObject._id }),
    };
    request(options, (response, body, error) => {
      messageObject = JSON.parse(body.body);
      expect(body.statusCode).to.equal(200);
      expect(messageObject.text).to.equal("test");
      done();
    });
  });

  it("Should be able to delete a message by its id", (done) => {
    const options = {
      uri: url + "/deleteMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: messageObject._id }),
    };
    request(options, (response, body, error) => {
      result = JSON.parse(body.body);
      expect(body.statusCode).to.equal(200);
      expect(result.message).to.equal("Message deleted");
      done();
    });
  });
});

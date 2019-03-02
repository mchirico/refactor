/*
Before running these tests, run the following
at the command line:

   node app/server.js


 */

let chai = require('chai')
    , spies = require('chai-spies');
chai.use(spies);
chai.use(require('chai-string'));
let expect = chai.expect;

let request = require("request");


describe("Billing Test on Server", function() {

  describe("Billing", function() {

    let url = "http://localhost:3000/billing";

    it("returns expected response", function(done) {

      let expected = "BigCo Hamlet: $650.00 (55 seats) As " +
          "You Like It: $580.00 (35 seats) Othello: $500.00 " +
          "(40 seats) Amount owed is $1,730.00 You earned 47"

      request(url, function(error, response, body) {
        expect(body).to.containIgnoreSpaces(expected)
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });
});



describe("Color Code Converter API", function() {

  describe("RGB to Hex conversion", function() {

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
        done();
      });
    });

  });

  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });

});

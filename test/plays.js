let chai = require('chai');
chai.use(require('chai-string'));
let expect = chai.expect;

let billing = require("../app/billing");
let plays = require('../app/plays.json');
let invoices = require('../app/invoices.json');


describe("Testing Billing", function() {
    describe("Chapter 1 program", function() {
        it("calculates the bill", function() {

            let result =  billing.Statement(invoices[0], plays);

            console.log(result)

            expect(result).to.containIgnoreSpaces("Hamlet: $650.00 (55 seats)")
            expect(result).to.containIgnoreSpaces("As You Like It: $580.00 (35 seats)")
            expect(result).to.containIgnoreSpaces("Othello: $500.00 (40 seats)")
            expect(result).to.containIgnoreSpaces("owed is $1,730.00")
            expect(result).to.containIgnoreSpaces("earned 47 credits")
        });
    });
});
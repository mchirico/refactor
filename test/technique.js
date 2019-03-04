let chai = require('chai')
    , spies = require('chai-spies');
chai.use(spies);
chai.use(require('chai-string'));
let expect = chai.expect;

let technique = require("../technique/technique");
let names = require('../technique/names.json');
let moreNames = require('../technique/moreNames.json');


describe("Testing Techniques", function () {
    describe("Loop with pipe", function () {
        it("Testing one value", function () {


            let result = technique.loopWPipe(names);

            // console.log(result[0])

            expect(result[0]).to.have.lengthOf(3);

            expect(result[0]).to.have.deep.members([{programmer: 'javascript', years: 2},
                {programmer: 'Go', years: 6},
                {programmer: 'python', years: 10}]);

        });
    });

    describe("People Class", function () {
        it("Adding people", function () {

            let result = technique.squareOf(3);
             expect(result).to.equal(9);



        });
    });
});
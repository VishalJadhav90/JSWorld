describe("pow", function() {

    //before(() => alert("Testing started before all tests"));
    //after(() => alert("Testing alert after all tests finished"));

    //beforeEach(() => alert("before each it statement"));
    //afterEach(() => alert("after it statement"));

    it("2 raised to 3rd power should be 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to 3rd power should be 27", function() {
        assert.equal(pow(3, 3), 27)
    });

    describe("raises x to 2nd power", function() {
        function maketest(x) {
            let expected = x*x*x;
            it(`${x} raised to power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for(let i=0; i<5; i++) {
            maketest(i);
        }
    });

    describe("for negative pow result is nan", function() {
        it("should produce NaN", function() {
            assert.isNaN(pow(2, -1));
        });
    });
});



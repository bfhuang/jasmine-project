describe("math", function () {

    var add = require('../../lib/math/math');

    it("should return the sum of two operands", function () {
        var sum = add(1, 2);

        expect(sum).toEqual(3);
    })
})
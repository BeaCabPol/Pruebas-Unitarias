const sum = require('../utils/suma');

test("sumar 1 mas 2", () => {  
    expect(sum(1,2)).toBe(3);

})
 test("sumar -2 mas -3", () => {  
    expect(sum(-2,-3)).toBe(-5);

})
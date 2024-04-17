const isUpperCase = require('../utils/esmayuscula');
    test("comprobar AMOR", () => {  
  
        expect(isUpperCase("AMOR")).toBe(true);
})
test("comprobar MADRID", () => {  
  
    expect(isUpperCase("MADRID")).toBe(true);
})



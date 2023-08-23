const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test ('add 14 + 9 to equal 23', () => {
    expect(sum(14,9)).toBe(23);
})

test("One euro should be 1.2 dollars", function(){
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 dollar shoud be 106.58333333333334 yenes", () =>{
    expect(fromDollarToYen(1)).toBe(106.58333333333334); //1.2 dollar are 1 euro, we convert dollar to euro and then euro to yen = ((1/1.2) * 127.9)
})

test ("1 yen should be 0.006254886630179828 dolares", ()=>{
    expect(fromYenToPound(1)).toBe(0.006254886630179828) //127.9 yenes are 1 euro, we convert yenes to euro and then euro to pounds = ((1/127.9)*0.8)
})
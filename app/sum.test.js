import sum from "./sum.ts"
test('This is the function to check', () => {
    expect(sum(5, 2)).toBe(7);
  });

  test("This is to again chevk" , ()=>{
    expect(sum(10,20)).toBe(30)
  })
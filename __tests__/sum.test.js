// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

function sum(a,b){
  let c = a + b;
  return c;
}

test('adds 1 + 2 through sum() to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
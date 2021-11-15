// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Function 1: isPhoneNumber(phoneNumber)
// 1: True
test('000-000-0000 is valid', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});
// 2: True
test('123-456-7890 is valid', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});
// 3: False
test('ten-let-ters is invalid', () => {
    expect(functions.isPhoneNumber('ten-let-ters')).toBe(false);
});
// 4: False
test('11 is invalid', () => {
    expect(functions.isPhoneNumber('11')).toBe(false);
});

// Function 2: isEmail(email)
// 1: True
test('bruh@gmail.com is valid', () => {
    expect(functions.isEmail('bruh@gmail.com')).toBe(true);
});
// 2: True
test('1352@notmail.net is valid', () => {
    expect(functions.isEmail('1352@notmail.net')).toBe(true);
});
// 3: False
test('gmail@bruh is invalid', () => {
    expect(functions.isEmail('gmail@bruh')).toBe(false);
});
// 4: False
test('bruh@@gmail.io is invalid', () => {
    expect(functions.isEmail('bruh@@gmail.io')).toBe(false);
});

// Function 3: isStrongPassword(password)
// 1: True
test('a123 is valid', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});
// 2: True
test('BBB_2112 is valid', () => {
    expect(functions.isStrongPassword('BBB_2112')).toBe(true);
});
// 3: False
test('123a is invalid', () => {
    expect(functions.isStrongPassword('123a')).toBe(false);
});
// 4: False
test('as2233@ is invalid', () => {
    expect(functions.isStrongPassword('as2233@')).toBe(false);
});

// Function 4: isDate(date)
// 1: True
test('11/1/2020 is valid', () => {
    expect(functions.isDate('11/1/2020')).toBe(true);
});
// 2: True
test('1/2/2040 is valid', () => {
    expect(functions.isDate('1/2/2040')).toBe(true);
});
// 3: False
test('a/1/2020 is invalid', () => {
    expect(functions.isDate('a/1/2020')).toBe(false);
});
// 4: False
test('11/1/220 is invalid', () => {
    expect(functions.isDate('11/1/220')).toBe(false);
});

// Function 5: isHexColor(color)
// 1: True
test('AAA', () => {
    expect(functions.isHexColor('AAA')).toBe(true);
});
// 2: True
test('123AAA', () => {
    expect(functions.isHexColor('123AAA')).toBe(true);
});
// 3: False
test('ZZZ', () => {
    expect(functions.isHexColor('ZZZ')).toBe(false);
});
// 4: False
test('A123A23', () => {
    expect(functions.isHexColor('A123A23')).toBe(false);
});
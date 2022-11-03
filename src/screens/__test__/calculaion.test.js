const sum = require('./calculation');

test('adds 100 + 200 to equal 300', () => {
    expect(sum(100, 200)).toBe(300);
});
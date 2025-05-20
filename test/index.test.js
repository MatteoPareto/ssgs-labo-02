const { reverseString,
    isPalindrome,
    truncateString,
    countCharacters, } = require('../src/stringUtils.js');

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
}
);
test('check if a string is a palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
}
);
test('truncate a string', () => {
    expect(truncateString('hello world', 5)).toBe('hello...');
    expect(truncateString('hello', 10)).toBe('hello');
    expect(truncateString('', 5)).toBe('');
}
);
test('count characters in a string', () => {
    expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(countCharacters('aabbcc')).toEqual({ a: 2, b: 2, c: 2 });
    expect(countCharacters('')).toEqual({});
}
);


import { reverseString } from "../../utils/reverseString";

describe('test reverseString', () => {
    it('test simple string and empty string', () => {
        expect(reverseString('')).toBe('');
        expect(reverseString('abc')).toBe('cba');
    })
});
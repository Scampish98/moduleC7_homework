import { multiply } from "../index.js";

describe('test multiply', () => {
    it('1 * 0 equals 0', () => {
        expect(multiply(1, 0)).toBe(0);
    }),
    it('2 * 2 equals 4', () => {
        expect(multiply(2, 2)).toBe(4);
    })
});
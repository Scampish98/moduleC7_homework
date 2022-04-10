import { definePrime } from "../../utils/definePrime";

describe('test definePrime', () => {
    it('10 is complex number', () => {
        expect(definePrime(10)).toBeFalsy();
    }),
    it('7 is prime number', () => {
        expect(definePrime(7)).toBeTruthy();
    }),
    it('-1 is invalid number', () => {
        expect(() => {definePrime(-1)}).toThrow();
    })
});
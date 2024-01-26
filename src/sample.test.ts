import {describe, expect, it} from  'vitest';
import {mySum} from './sample';

describe('sum', () => {
    it('given a , b return a+b', () => {
        expect(mySum(1, 2)).toBe(3)
    })
})
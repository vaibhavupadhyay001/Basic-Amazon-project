import{formatCurrancy} from '../scripts/utils/money.js';

describe('test suit: Formatcurrency',()=>{
    it('converts cents into dollers',()=>{
        expect(formatCurrancy(2095)).toEqual('20.95');
    });

    it('works with 0',()=>{
        expect(formatCurrancy(0)).toEqual('0.00');
    });

    it('works with Nearest edges',()=>{
        expect(formatCurrancy(2000.4)).toEqual('20.00');
    });
});

import{cart,addToCart} from '../data/cart.js';

describe('test suit:ADD TO CART',()=>{
    it('Add an existing product to the cart',()=>{
    });
    
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.lenght).toEqual(1);

    });
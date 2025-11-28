import{rendorOrderSummary} from '../scripts/checkout/orderSummary.js';
import{rendorPaymentSummary} from '../scripts/checkout/Payment.js';
import { loadProductstFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
import '../data/backend_practice.js';



// Async await..

async function loadpage(){

    try{

        await loadProductstFetch();


    await new Promise((resolve)=>{

          loadCart(()=>{

            resolve();
          });
            });

    } 
    catch(error){
        console.log('Unexpected error. Please try agin later.');
    }
     

             rendorOrderSummary();
             rendorPaymentSummary();

    
}
loadpage();


// run all at a same time

/*
Promise.all([

    loadProductstFetch(),

new Promise((resolve)=>{

          loadCart(()=>{

            resolve();
          });
            }),
]).then((values)=>{
    console.log(values);

    rendorOrderSummary();
    rendorPaymentSummary();


});

*/

/*

new Promise((resolve)=>{

    loadProducts(()=>{
    
        resolve('value1');

    });

}).then((value)=>{

    console.log(value);

    return new Promise((resolve)=>{

          loadCart(()=>{

            resolve();
          });
            });
         }).then(()=>{
              rendorOrderSummary();
              rendorPaymentSummary();
         });
 */


/*
loadProducts(()=>{
    loadCart(()=>{
         rendorOrderSummary();
         rendorPaymentSummary();


    });

   
});*/


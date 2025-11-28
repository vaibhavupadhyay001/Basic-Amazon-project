//practice file//

function Cart(localStoragekey){
    const cart={
    cartItems:undefined,

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(localStoragekey));
        if (!this.cartItems) {   // check if it's null or invalid
  this.cartItems= [
    {
      productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:1,
      deliveryOptionid:'1'
    },
    {
      productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:2,
      deliveryOptionid:'2'
    }];
}
},
saveToStorage(){
  localStorage.setItem(localStoragekey,JSON.stringify(this.cartItems));
},

addToCart(productid){

  let match;

  this.cartItems.forEach((cartItem)=>{
    if(productid === cartItem.productid){
      match=cartItem;
    }
  });
  if(match){
    match.quantity+=1;

  }else{
    this.cartItems.push({
      productid:productid,
      quantity:1,
      deliveryOptionid:'1'
    });

  }
  this.saveToStorage();

},

removeFromCart(productId) {  
  const newCart =[];

  this.cartItems.forEach((cartItem)=> {
    if (cartItem.productid !== productId) {  
      newCart.push(cartItem);
    }
  })
  this.cartItems = newCart;
  this.saveToStorage();               
},

updateDeliveryOption(productid,deliveryOptionId){
  let match;
  this.cartItems.forEach((cartItem)=>{
    if(productid === cartItem.productid){
      match=cartItem;
    }
  });
  match.deliveryOptionid=deliveryOptionId;
  this.saveToStorage();


}

};

return cart;

}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();



console.log(cart);
console.log(businessCart)





 






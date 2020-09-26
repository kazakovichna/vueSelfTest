export default {

  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  },
  ADD_TO_CART: (state, product) => {
    if(state.cart.length) {
      let isExist = false;
        state.cart.map(function (item) {
          if(item.id === product.id){
            item.quantity++;
            isExist = true;
          }
        });
        if(!isExist){
          state.cart.push(product)
        }
    }else{
      state.cart.push(product);
    }
  },
  UPPER: (state, index) => {
    state.cart[index].quantity++;
  },
  UNDO: (state, index) => {
    if( state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  DELETE_FROM_CART: (state, index) => {
    console.log("mutation is works");
    state.cart.splice(index, 1);
  }
}



import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products :[],
        quantity:0,
        total:0,
        }
    ,
    
    reducers:{
        addToCart(state,action){
          if(state.products.length === 0){
              state.products.push(action.payload);
              state.quantity += 1;
              state.total += action.payload.prodotti_price;
              action.payload.prodotti_quantity += 1;
          }else{
              state.products.forEach(element => {
                  if(element._id === action.payload._id){
                      element.prodotti_quantity += 1;
                      state.quantity += 1;
                      state.total += element.prodotti_price;
                      console.log(element.prodotti_quantity);
                  }else{
                      state.products.push(action.payload);
                      state.quantity += 1;
                      state.total += action.payload.prodotti_price;
                      action.payload.prodotti_quantity += 1;
                  }
              });
          }
        },
        removeFromCart(state,action){
            let filtrato = state.products.filter((value)=> {return value._id != action.payload._id});
            // console.log(filtrato);
            state.products = filtrato;
            console.log(filtrato.prodotti_price)
            state.total -= action.payload.prodotti_price * action.payload.prodotti_quantity;
            console.log(state.products)
            state.quantity -= action.payload.prodotti_quantity;
        }
        
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
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
            state.products.push(action.payload);
            state.quantity = state.quantity + 1;
            // state.total = state.total + action.payload;
        },
        removeFromCart(state,action){
            let filtrato = state.products.filter((value)=> {return value._id != action.payload._id});
            // console.log(filtrato);
            state.products = filtrato;
            console.log(state.products)
        }
        
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
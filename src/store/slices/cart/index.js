import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name:'cart',

    initialState:{
        cartProducts:[]
    },
    reducers:{
      setCart: (state, action) =>{
        return {...state,
        cartProducts: [...state.cartProducts, action.payload],
        }
      }, 
      setDeleteCart: (state) =>{
        state.cartProducts = [];
      },
      setDeleteProduct: (state, action) =>{
        const {id} = action.payload
        state.cartProducts = state.cartProducts.filter((item)=>item.id !== action.payload)
      }

    }
}) 

export default cartSlice.reducer;

export const {setCart, setDeleteCart, setDeleteProduct} = cartSlice.actions


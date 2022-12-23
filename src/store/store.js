import {configureStore} from '@reduxjs/toolkit';
import products from './slices/products';
import singleProduct from './slices/singleProduct';
import cart from './slices/cart';
export const store = configureStore({
    reducer:{
        products,
        singleProduct,
        cart,
    }
})


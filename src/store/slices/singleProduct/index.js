import {createSlice} from '@reduxjs/toolkit'


export const singleProductSlice = createSlice({
    name: 'singleProduct',

    initialState: {
        item: []
    }, 

    reducers: {
        setSingleProduct: (state,action) =>{
            state.item = action.payload
        }
    }
})

export default singleProductSlice.reducer;

export const {setSingleProduct} = singleProductSlice.actions;
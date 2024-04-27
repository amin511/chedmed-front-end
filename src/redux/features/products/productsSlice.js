import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    users: [],
    errorMsg: "",
    products: data,
    productsSearch: [],
    categories: []
}

const getAllProducts = createAsyncThunk('products/getAllProducts', async (thunkApi) => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        return data
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
    }
})
const getAllCategories = createAsyncThunk('products/getAllCategories', async (thunkApi) => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products/categories");
        console.log(data);
        return data
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
    }
})

const productSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, { payload }) => {

                state.isLoading = false;
            })
            .addCase(getAllProducts.rejected, (state, { payload }) => {
                state.isLoading = false
                state.errorMsg = payload
                console.log(payload)
            })

        builder
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {

                state.isLoading = false;
            })
            .addCase(getAllCategories.rejected, (state, { payload }) => {
                state.isLoading = false
                state.errorMsg = payload
                console.log(payload)
            })
    }

})


export { getAllProducts, getAllCategories };
export default productSlice.reducer


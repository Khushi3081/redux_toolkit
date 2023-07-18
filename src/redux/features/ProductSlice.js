import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    ProductList: [],
    Product: {},
}
const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        getProducts(name) {
            return name
        },
        setProducts: (state, action) => {
            state.ProductList = action.payload
            return state
        },
    },
})

export const { getProducts, setProducts } = ProductSlice.actions
export default ProductSlice.reducer

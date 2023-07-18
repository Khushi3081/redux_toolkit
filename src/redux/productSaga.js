import axios from "axios"
import { takeLatest, put, fork, call } from "redux-saga/effects"
import { getProducts, setProducts } from "./features/ProductSlice"
const ProductItems = async (productName) => {
    const response = await axios.get(
        `https://dummyjson.com/products/search?q=${productName}`
    )
    console.log(response.data)
    return response.data
}
function* onLoadProductAsync({ payload }) {
    // console.log(
    //     "🚀 ~ file: productSaga.js:12 ~ function*onLoadProductAsync ~ payload:",
    //     payload
    // )
    try {
        const productName = payload
        const response = yield call(ProductItems, productName)
        if (response) {
            // console.log(
            //     "🚀 ~ file: productSaga.js:16 ~ function*onLoadProductAsync ~ response:",
            //     response
            // )
            yield put(setProducts({ ...response }))
        }
    } catch (error) {
        console.log(error.message)
    }
}
function* onLoadProduct() {
    yield takeLatest(getProducts.type, onLoadProductAsync)
    // console.log(
    //     "🚀 ~ file: productSaga.js:24 ~ function*onLoadProduct ~ type:",
    //     getProducts.type
    // )
}

export const ProductSaga = [fork(onLoadProduct)]

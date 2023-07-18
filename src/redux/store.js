import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import ProductReducer from "../redux/features/ProductSlice"
import rootSaga from "./rootSaga"

const saga = createSagaMiddleware() // creation of middleware

const store = configureStore({
    reducer: {
        Product: ProductReducer,
    },
    // middleware: [saga],
    middleware: (getDefault) => getDefault().concat(saga), // apply middleware
})
saga.run(rootSaga) //run the saga
export default store

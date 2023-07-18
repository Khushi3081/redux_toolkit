import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home"

function App() {
    return (
        <div className='App'>
            <h3>Redux toolkit with saga</h3>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                {/* <Route path='/view/:index' element={<Product/>}></Route> */}
            </Routes>
        </div>
    )
}

export default App

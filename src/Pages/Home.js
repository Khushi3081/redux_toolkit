import React, { useEffect, useState } from "react"
import "../assets/css/style.css"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/features/ProductSlice"
function Home() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts(search))
    }, [search])
    const product = useSelector((state) => state.Product)
    return (
        <div>
            <>
                <h2>Product search app</h2>
                <input
                    type='text'
                    placeholder='Search here...'
                    className='search'
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                ></input>
                <table classNameName='table'>
                    <thead classNameName='thead-dark'>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>price</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Add to cart</th>
                            <th scope='col'>Total Amount</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    {product?.ProductList?.products?.map((e) => {
                        return (
                            <tbody>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.brand}</td>
                                <td>{e.category}</td>
                                <td>{e.price}</td>
                                <td>
                                    <img src={e.images[1]} style={{height:"40px",width:"60px"}}></img>
                                </td>
                                <td>{e.rating}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        )
                    })}

                    <tbody>
                        
                    </tbody>
                </table>
            </>
        </div>
    )
}

export default Home

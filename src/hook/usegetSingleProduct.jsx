import React from 'react'
import { useEffect, useState } from 'react'
const usegetSingleProduct = (id) => {
    const [singleProduct, setsingleProduct] = useState(null)
    useEffect(() => {
        fetchSingleProduct()
    }, [])
    const fetchSingleProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonData = await data.json();
        setsingleProduct(jsonData)
    }
    return singleProduct;
}

export default usegetSingleProduct

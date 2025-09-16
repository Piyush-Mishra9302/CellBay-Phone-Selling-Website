import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const Pricing = () => {
    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        let res = await axios.get(
            `http://localhost:3000/products?category=${categoryName}`
        );
        setProducts(res.data);
    }

    useEffect(() => {
         console.log("Category from URL:", categoryName);
        getProducts();
    }, [categoryName])
  return (
    <div className='p-6'>
       <h2 className="text-2xl font-bold mb-4 capitalize">
  {categoryName ? categoryName.replace(/under/i, "Under ") : "All Products"}
</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
           ) )}
        </div>

    </div>
  )
}

export default Pricing
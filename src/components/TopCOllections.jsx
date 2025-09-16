import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const TopCOllections = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [products, setProducts] = useState([]);

     const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/products?price_gte=50000");
            setProducts(res.data);
        }catch(error){
            console.error("Error fetching products : ", error )
        }
       }
    useEffect(() => {
      fetchProducts();
    },[]);

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 4)
    }
  return (
    <section className='py-10 px-4 md:px-8'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Top Category</h2>

        {/* Grid for Cards */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* rendering cards */}
            {products.slice(0,visibleCount).map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>

        {/* see more button */}
        {visibleCount < products.length && (
            <div className='flex justify-center mt-8'>
                <button 
                onClick={handleSeeMore}
                className="px-6 py-2 border border-gray-700 text-gray-700 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    See more
                </button>
            </div>
        )}


    </section>
  )
}

export default TopCOllections
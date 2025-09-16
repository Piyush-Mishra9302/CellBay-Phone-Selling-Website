import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const api = "http://localhost:3000/products";
        let res  = await axios.get(api);
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    }, [])
    return(
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => 
            <ProductCard key={product.key} product={product} />
        )}
       </div>
    )
} 

export default AllProducts;
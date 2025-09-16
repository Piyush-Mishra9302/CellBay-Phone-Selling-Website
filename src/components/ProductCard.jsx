import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice";


const ProductCard = ({product}) => {

    const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-xl  py-8 flex flex-col items-center hover:shadow-lg transition">
        {/* image */}
        <img
        src={product.images}
        alt={product.name}
        className="w-32 h-22 object-contain mb-4"
        />

        {/* details */}

        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <h3 className="text-sm text-gray-400 capitalize">{product.category}</h3>
        <h3 className="text-base font-bold mt-2">{product.price}</h3>

        {/* button */}

        <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition">
            Add to cart
        </button>
    </div>
  )
}

export default ProductCard
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded">
              <img src={item.images} alt={item.name} className="h-16 w-16 object-cover rounded" />
              <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>

              {/* Quantity buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Checkout Section */}
          <div className="flex justify-between items-center border-t pt-4">
            <p className="text-lg font-bold">Total: ₹{totalPrice}</p>
            <div className="space-x-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button 
                onClick={() => navigate("/checkout")}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

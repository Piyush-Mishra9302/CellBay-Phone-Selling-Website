import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import axios from "axios";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // get items from Redux
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    const orderData = {
      customer: formData,
      items: cartItems,       // carry cart items
      total: totalPrice,      // carry total price
      date: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3000/orders", orderData);
      setLoading(false);
      setOrderConfirmed(true);
      dispatch(clearCart()); // clear cart after order
    } catch (error) {
      console.error("Error placing order:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  if (orderConfirmed) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
        <p>Thank you for shopping with us.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <div className="text-lg font-bold">
          Total: ₹{totalPrice}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

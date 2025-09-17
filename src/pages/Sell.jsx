import React, { useState } from "react";
import axios from "axios";

const SellPhone = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Cloudinary
    let cloudApi = "https://api.cloudinary.com/v1_1/dwx9qu6za/image/upload";
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Piyush");

    const response1 = await axios.post(cloudApi, formData);

    // Save to JSON server "sell" endpoint
    let api = "http://localhost:3000/sell";
    await axios.post(api, { ...input, image: response1.data.url });

    alert("Your phone has been submitted for selling!");

    // Reset form
    e.target.reset();
    setInput({});
    setImage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 my-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sell Your Phone
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Brand */}
          <div>
            <label className="block text-gray-700 mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-gray-700 mb-1">Model</label>
            <input
              type="text"
              name="model"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Expected Price */}
          <div>
            <label className="block text-gray-700 mb-1">Expected Price</label>
            <input
              type="number"
              name="expectedPrice"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Condition */}
          <div>
            <label className="block text-gray-700 mb-1">Condition</label>
            <textarea
              name="condition"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 mb-1">
              Upload Phone Image
            </label>
            <input
              type="file"
              name="file"
              onChange={handleImage}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellPhone;

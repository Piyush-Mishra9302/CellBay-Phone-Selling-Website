import React, { useState } from 'react'
import axios from 'axios';

const AddProduct = () => {
    const [input, setInput] = useState({});
    const [image, setImage] = useState("")
    
    const handleInput = (e) => { 
        let name = e.target.name;
        let value = e.target.value;
        
        setInput(values => ({...values, [name] : value}));
        console.log(input);
        
    }
    const handleImage = (e) => {
      const file = e.target.files[0];
      console.log(e.target.files[0]);
        setImage(file); 
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      let cloudApi = "https://api.cloudinary.com/v1_1/dwx9qu6za/image/upload";
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Piyush");
      const response1 = await axios.post(cloudApi, formData);

      let api = "http://localhost:3000/products";
      const response = await axios.post(api, {...input, images: response1.data.url})
      alert("Product is Added");

      e.target.reset(); //Reset form input
      setInput({});
      setImage("");
      
    }
  return (
   <>
    <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Add new Product</h2>
    <form className='w-[500px] space-y-4' onSubmit={handleSubmit}>
         {/*Product Name*/ }
         <div>
            <lable className ='block text-gray-700 mb-1'>Product Name</lable> 
            <input
            type='text'
            name='name'
            onChange={handleInput}
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
         </div>
         {/*Product Brand*/ }
        <div>
        <label className="block text-gray-700 mb-1">Product Brand</label>
        <select
          name="brand"
          onChange={handleInput}
          className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select Brand</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Realme">Realme</option>
          <option value="Motorola">Motorola</option>
          <option value="Vivo">Vivo</option>
        </select>
      </div>
      {/*Category*/}
      <div>
        <lable className = 'block text-gray-700 mb-1'>Category</lable>
        <select 
            name = 'category'
            onChange={handleInput}
            className='w-full px-3 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-500-blue'
            >
                <option>Select Cayegory</option>
                <option value='under10000'>Under 10k</option>
                <option value='under20000'>Under 20k</option>
                <option value='under30000'>Under 30k</option>
                <option value='under50000'>Under 50k</option>
                <option value='under100000'>Under 1L</option>
                <option value='under150000'>Under 1.5L</option>
            </select>
      </div>
       <div>
            <lable className ='block text-gray-700 mb-1'>Price</lable> 
            <input
            type='text'
            name='price'
            onChange={handleInput}
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
         </div>
       <div>
            <lable className ='block text-gray-700 mb-1'>Price</lable> 
            <input
            type='file'
            name='file'
            onChange={handleImage}
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
         </div>
         {/* Submit Button */}
          <button 
          type='submit'
          className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Submit
        </button>

    </form>
       

   </>
  )
}

export default AddProduct
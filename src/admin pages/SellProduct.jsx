import { useEffect, useState } from "react";
import axios from "axios";
import SellPhoneCard from "./SellPhoneCard";

const SellPhonesAdmin = () => {
  const [phones, setPhones] = useState([]);

  const getPhones = async () => {
    let res = await axios.get("http://localhost:3000/sell");
    setPhones(res.data);
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Phones Submitted for Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <SellPhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default SellPhonesAdmin;

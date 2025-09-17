const SellPhoneCard = ({ phone }) => {
  return (
    <div className="bg-white shadow-md rounded-xl py-8 flex flex-col items-center hover:shadow-lg transition">
      {/* image */}
      <img
        src={phone.image}
        alt={`${phone.brand} ${phone.model}`}
        className="w-32 h-22 object-contain mb-4"
      />

      {/* details */}
      <h3 className="text-sm text-gray-500">{phone.brand}</h3>
      <h3 className="text-lg font-semibold text-gray-800">{phone.model}</h3>
      <h3 className="text-base font-bold mt-2">₹{phone.expectedPrice}</h3>
      <p className="text-sm text-gray-500 mt-2 italic">{phone.condition}</p>

      {/* Static Accept button */}
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Accept
      </button>
    </div>
  );
};

export default SellPhoneCard;



const AboutUs = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50 text-gray-800">
      {/* Section 1: Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About CellBay</h2>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold">CellBay</span>, we make buying and selling smartphones simple, 
          safe, and reliable. From brand new models to pre-owned phones, 
          we connect users with the best deals under one trusted platform.
        </p>
      </div>

      {/* Section 2: Multi Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Our Mission</h3>
          <p className="text-gray-600">
            To provide affordable and trustworthy mobile phone deals while enabling 
            customers to sell their devices at the best value.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Why Choose Us</h3>
          <p className="text-gray-600">
            We ensure transparency in pricing, hassle-free transactions, 
            and genuine smartphones from top brands like Apple, Samsung, OnePlus, and more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Our Vision</h3>
          <p className="text-gray-600">
            To become India’s most trusted marketplace for smartphones by combining 
            technology with customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

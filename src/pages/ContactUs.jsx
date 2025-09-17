

const ContactUs = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Got questions? We’d love to hear from you. Reach out to us and our team 
          will get back to you as soon as possible.
        </p>
      </div>

      {/* Multi Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📍 Our Office</h3>
            <p className="text-gray-600">CellBay Pvt. Ltd., Bhopal, Madhya Pradesh, India</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📞 Phone</h3>
            <p className="text-gray-600">+91 9302006332</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📧 Email</h3>
            <p className="text-gray-600">support@cellbay.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

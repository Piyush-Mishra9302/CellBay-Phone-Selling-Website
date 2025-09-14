// import logo from "../images/logo.png";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TopMenu = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [activeTab, setActiveTab] = useState("admin"); //admin | user | register
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     //Handle Login
//     const handleLogin = async(e) => {
//         e.preventDefault();
//         if(activeTab === "admin") {
//             try {
//                 let api = `http://localhost:3000/admin/?adminid=${email}`;
//                 const response = await axios.get(api);
//             }
//         }
//     }
//     return (
//     <header className="w-full shadow-md bg-white">
//       <div className="flex items-center justify-between px-3 py-1">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={logo}
//             alt="CellBay Logo"
//             className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Main Menu */}
//         <div className="hidden md:flex">
//           <Navbar expand="md" className="bg-transparent">
//             <Container className="!px-0">
//               <Nav className="space-x-6 font-medium text-gray-700">
//                 <Nav.Link
//                   href="#home"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   Home
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#features"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   Features
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#pricing"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   Pricing
//                 </Nav.Link>
               
//                 <Nav.Link
//                   href="#sell"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   Sell
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#contactus"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                 Contact us
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#aboutus"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                 Aboutus
//                 </Nav.Link>
//               </Nav>
//             </Container>
//           </Navbar>
//         </div>

//         {/* Right Menu */}
//         <div className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer transition-colors">
//           Admin/User Login
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopMenu;
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("admin"); // admin | user | register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // 🔹 Admin/User Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "admin") {
        const res = await axios.get("http://localhost:3000/admin");
        const admin = res.data.find(
          (a) => a.adminid === email && a.password === password
        );
        if (admin) {
          alert("✅ Admin login successful");
          setShowModal(false);
          navigate("/admin"); // redirect to admin dashboard
        } else {
          alert("❌ Invalid admin credentials");
        }
      } else if (activeTab === "user") {
        const res = await axios.get("http://localhost:3000/users");
        const user = res.data.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          alert("✅ User login successful");
          setShowModal(false);
          navigate("/"); // redirect to Home
        } else {
          alert("❌ Invalid user credentials");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Something went wrong. Try again.");
    }
  };

  // 🔹 User Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = { id: Date.now(), name, email, password };
      await axios.post("http://localhost:3000/users", newUser);
      alert("✅ Registration successful! Please login.");
      setActiveTab("user");
    } catch (error) {
      console.error("Registration error:", error);
      alert("⚠️ Could not register. Try again.");
    }
  };

  return (
    <header className="w-full shadow-md bg-white">
      <div className="flex items-center justify-between px-3 py-1">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="CellBay Logo"
            className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex">
          <Navbar expand="md" className="bg-transparent">
            <Container className="!px-0">
              <Nav className="space-x-6 font-medium text-gray-700">
                <Nav.Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Nav.Link>
                <Nav.Link href="#features" className="hover:text-blue-600 transition-colors">
                  Features
                </Nav.Link>
                <Nav.Link href="#pricing" className="hover:text-blue-600 transition-colors">
                  Pricing
                </Nav.Link>
                <Nav.Link href="#sell" className="hover:text-blue-600 transition-colors">
                  Sell
                </Nav.Link>
                <Nav.Link href="#contactus" className="hover:text-blue-600 transition-colors">
                  Contact us
                </Nav.Link>
                <Nav.Link href="#aboutus" className="hover:text-blue-600 transition-colors">
                  About us
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        {/* Right Menu */}
        <div
          className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer transition-colors"
          onClick={() => setShowModal(true)}
        >
          Admin/User Login
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-4 py-2">
              <h2 className="text-lg font-semibold">
                {activeTab === "register"
                  ? "User Registration"
                  : activeTab === "admin"
                  ? "Admin Login"
                  : "User Login"}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            {/* Tab Buttons */}
            {activeTab !== "register" && (
              <div className="flex justify-around border-b px-4 py-2">
                <button
                  className={`px-4 py-1 rounded ${
                    activeTab === "admin"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("admin")}
                >
                  Admin
                </button>
                <button
                  className={`px-4 py-1 rounded ${
                    activeTab === "user"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("user")}
                >
                  User
                </button>
              </div>
            )}

            {/* Body */}
            <div className="p-4">
              {activeTab === "register" ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                  >
                    Register
                  </button>
                  <p className="text-sm text-center mt-2">
                    Already have an account?{" "}
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setActiveTab("user")}
                    >
                      Login
                    </span>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    {activeTab === "admin" ? "Login as Admin" : "Login as User"}
                  </button>
                  {activeTab === "user" && (
                    <p className="text-sm text-center mt-2">
                      New here?{" "}
                      <span
                        className="text-green-600 cursor-pointer"
                        onClick={() => setActiveTab("register")}
                      >
                        Register
                      </span>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopMenu;

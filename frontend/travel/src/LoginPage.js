// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import backgroundImage from "./assets/travel_login.jpg";

// const LoginPage = () => {
//   const location = useLocation();
//   const [username, setUsername] = useState("");
//   const queryParams = new URLSearchParams(location.search);
//   const mode = queryParams.get("mode") || "login";
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     setIsLogin(mode === "login");
//   }, [mode]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         const response = await axios.post(
//           "http://localhost:2000/api/users/login",
//           {
//             email,
//             password,
//           }
//         );
//         console.log("Login successful:", response.data);
//       } else {
//         const response = await axios.post(
//           "http://localhost:2000/api/users/register",
//           {
//             username,
//             email,
//             password,
//           }
//         );
//         console.log("Registration successful:", response.data);
//       }
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div
//       className="flex h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="flex w-full bg-black bg-opacity-40">
//         <div className="w-1/2 flex items-center justify-center">
//           <h1 className="font-dancing text-white md:text-6xl text-center p-10">
//             "Travel not to find yourself, but to remember who you've been all
//             along...."
//           </h1>
//         </div>

//         <div className="w-1/2 flex items-center justify-center">
//           <div className="bg-white bg-opacity-30 p-12 rounded-lg shadow-lg w-full max-w-md">
//             <h1 className="text-4xl font-bold mb-8 text-center text-black-800">
//               {isLogin ? "Login" : "Sign Up"}
//             </h1>
//             <form onSubmit={handleSubmit}>
//               {!isLogin && (
//                 <div className="mb-6">
//                   <label className="block text-lg font-medium text-black-700">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required={!isLogin}
//                   />
//                 </div>
//               )}
//               <div className="mb-6">
//                 <label className="block text-lg font-medium text-black-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-lg font-medium text-black-700">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <button className="w-full bg-blue-500 text-white text-xl py-3 rounded-md hover:bg-blue-600 transition duration-200">
//                 {isLogin ? "Login" : "Sign Up"}
//               </button>
//               <p className="mt-4 text-center text-xl text-black-600">
//                 {isLogin
//                   ? "Don't have an account? "
//                   : "Already have an account? "}
//                 <button
//                   type="button"
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="text-blue-800 hover:underline text-xl"
//                 >
//                   {isLogin ? "Sign Up" : "Login"}
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "./assets/travel_login.jpg";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const [username, setUsername] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode") || "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(mode === "login");
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // After form submission, directly navigate to /input without API calls
    navigate("/input");
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex w-full bg-black bg-opacity-40">
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="font-dancing text-white md:text-6xl text-center p-10">
            "Travel not to find yourself, but to remember who you've been all
            along...."
          </h1>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white bg-opacity-30 p-12 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-4xl font-bold mb-8 text-center text-black-800">
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-lg font-medium text-black-700">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={!isLogin}
                  />
                </div>
              )}
              <div className="mb-6">
                <label className="block text-lg font-medium text-black-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium text-black-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button className="w-full bg-blue-500 text-white text-xl py-3 rounded-md hover:bg-blue-600 transition duration-200">
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <p className="mt-4 text-center text-xl text-black-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-800 hover:underline text-xl"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

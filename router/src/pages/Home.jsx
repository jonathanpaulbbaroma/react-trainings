import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  return (
    <div className="mt-5 text-center">
      <h1 className="font-bold text-3xl" >Home</h1>

      <p>Welcome to our store! Explore our products and find what you need.</p>
      <div className="mt-5">
        <input
          className="border border-gray-300 rounded px-2 py-1 mr-2" 
          type="text"
          placeholder="Enter your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/dashboard/profile", { state: { name: user } })}>
        Go to Profile
      </button>
      </div>
      
    </div>
  );
}
export default Home;

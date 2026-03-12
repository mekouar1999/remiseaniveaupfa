
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup";
import Profil from "./components/profil/Profil";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;

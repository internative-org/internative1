import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import NavBar from "./Components/NavBar";
import Home2 from "./Components/Home2";
import { Footer } from "./Components/Footer";
import { Faq } from "./Components/Faq";
import { Referral } from "./Components/Referral";
import { Routes, Route } from "react-router-dom";
import { Pap } from "./Components/Pap";
import Coures from "./Components/Coures";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Testimonial } from "./Components/Testimonial";
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login/> */}
      {/* <SignUp/> */}
      <div>
        <UserAuthContextProvider>
          <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
      <Home />

      <Coures />
      <Referral />
      <Pap />
      <Testimonial/>
      <Footer />
      
    </div>
  );
}

export default App;

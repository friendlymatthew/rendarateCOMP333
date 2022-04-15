import "tailwindcss/tailwind.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route exact path="/Home" element={<Home />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Recent from "./components/Extra/Recent/Recent";
import Featured from "./components/Extra/Featured/Featured";
import Register from "./components/Extra/Register/Register";
import SignIn from "./components/Extra/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

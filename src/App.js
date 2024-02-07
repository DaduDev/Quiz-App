import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Recent from "./components/Extra/Recent/Recent";
import Create from "./components/Extra/Create/Create";
import Featured from "./components/Extra/Featured/Featured";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/create" element={<Create />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

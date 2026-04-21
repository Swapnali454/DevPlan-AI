import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DevPlan from "./pages/DevPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<DevPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
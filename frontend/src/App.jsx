import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Callback from "./pages/callback.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/callback" element={<Callback />}/>
    </Routes>
  );
}

export default App;

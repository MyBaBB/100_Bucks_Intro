// eslint-disable-next-line no-unused-vars

import Zenith from "./components/Zenith";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Zenith />} />
      <Route path="/Zenith" element={<Zenith />} />
      <Route path="/*" element={<Zenith />} />
    </Routes>
  );
}

export default App;

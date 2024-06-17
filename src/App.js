import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Principal from "./Components/Principal";
import Bebidas from "./Components/Bebidas";
import Postres from "./Components/Postres";
import Entradas from "./Components/Entrada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Postres" element={<Postres />} />
        <Route path="/Entradas" element={<Entradas />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorScreen from "./pages/CalculatorScreen";
import WelcomeScreen from "./pages/WelcomeScreen";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/calculator" element={<CalculatorScreen />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

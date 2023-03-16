import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-app";

function App() {
  return <div className="app">
<BrowserRouter>
  <Routes>
    <Route path="/chat" element={<chat />} />
  </Routes>
</BrowserRouter>

  </div>;
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
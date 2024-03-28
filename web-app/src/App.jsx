import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./components/Navbar";
import "./App.css";
import Admin from "./pages/admin";
import Certificates from "./pages/certificates";
import MainMenu from "./components/sidebar/MainMenu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

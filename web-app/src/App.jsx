import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

//below all dummy pages, please update the contain accordingly
import Homepage from "./pages/homepage"; //Smart Certify WebApp home page
import ComHome from "./pages/ComHome"; //  company home page
import GovHome from "./pages/GovHome"; // government home page
import GovAdmin from "./pages/GovAdmin";
import SchHome from "./pages/SchHome"; //school home page
import PerHome from "./pages/PerHome"; // person home page
import ComProfile from "./pages/ComProfile"; //company profile page
import ComFinalCandidate from "./pages/ComFinalCandidate"; //company final candidate page
import ComAdmin from "./pages/ComAdmin"; //company admin page, this contains <Profile fields="company"/> written by Siheng

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} index />
          <Route path="Company" element={<ComHome />}>
            <Route path="Profile" element={<ComProfile />} />
            <Route path="Admin" element={<ComAdmin />} />
            <Route path="Finalcandidate" element={<ComFinalCandidate />} />
          </Route>
          <Route path="Government" element={<GovHome />}>
            <Route path="Admin" element={<GovAdmin />} />
          </Route>
          <Route path="School" element={<SchHome />} />
          <Route path="Person" element={<PerHome />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

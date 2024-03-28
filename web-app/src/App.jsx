import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

//below all dummy pages, please update the contain accordingly
import Homepage from "./pages/homepage"; //Smart Certify WebApp home page
import GovHome from "./pages/government/GovHome"; // government home page
import GovAdmin from "./pages/government/GovAdmin";
import GovRegisterSchool from "./pages/government/GovRegisterSchool";
import GovRegisterCompany from "./pages/government/GovRegisterCompany";
import GovRegisterPerson from "./pages/government/GovRegisterPerson";
import GovVerifyCompany from "./pages/government/GovVerifyCompany";
import GovVerifyPerson from "./pages/government/GovVerifyPerson";
import ComHome from "./pages/company/ComHome"; //  company home page
import ComProfile from "./pages/company/ComProfile"; //company profile page
import ComFinalCandidate from "./pages/company/ComFinalCandidate"; //company final candidate page
import ComAdmin from "./pages/company/ComAdmin"; //company admin page, this contains <Profile fields="company"/> written by Siheng
import SchHome from "./pages/school/SchHome"; //school home page
import SchProfile from "./pages/school/SchProfile";
import SchStudents from "./pages/school/SchStudents";
import SchAdmin from "./pages/school/SchAdmin";
import PerHome from "./pages/person/PerHome"; // person home page\
import PerProfile from "./pages/person/PerProfile"; // person profile page
import PerViewCertificates from "./pages/person/PerViewCertificates"; // person view certificates page
import PerCollectCertificate from "./pages/person/PerCollectCertificate";
import PerViewers from "./pages/person/PerViewers";

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
            <Route path="RegisterSchool" element={<GovRegisterSchool />} />
            <Route path="RegisterCompany" element={<GovRegisterCompany />} />
            <Route path="RegisterPerson" element={<GovRegisterPerson />} />
            <Route path="VerifyCompany" element={<GovVerifyCompany />} />
            <Route path="VerifyPerson" element={<GovVerifyPerson />} />
          </Route>
          <Route path="School" element={<SchHome />}>
            <Route path="Profile" element={<SchProfile />} />
            <Route path="Admin" element={<SchAdmin />} />
            <Route path="Students" element={<SchStudents />} />
          </Route>
          <Route path="Person" element={<PerHome />}>
            <Route path="Profile" element={<PerProfile />} />
            <Route path="ViewCertificates" element={<PerViewCertificates />} />
            <Route path="CollectCertificate" element={<PerCollectCertificate />} />
            <Route path="Viewers" element={<PerViewers />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

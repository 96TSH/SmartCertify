import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import './App.css'
import MainMenu from "./components/sidebar/MainMenu";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  
  return (
    <div>
      <MainMenu/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
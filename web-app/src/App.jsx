import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


//below all dummy pages, please update the contain accordingly
import Homepage from "./pages/Homepage"; //Smart Certify WebApp home page
import ComHome from "./pages/ComHome"; //  company home page
import GovHome from "./pages/GovHome"; // government home page 
import SchHome from "./pages/SchHome"; //school home page
import PerHome from "./pages/PerHome"; // person home page
import ComProfile from "./pages/ComProfile"; //company profile page
import ComFinalCandidate from "./pages/ComFinalCandidate"; //company final candidate page
import ComAdmin from "./pages/ComAdmin"; //company admin page, this contains <Profile fields="company"/> written by Siheng

//add the rest of the children for Government, Person and School
const router = createBrowserRouter([
  {path:'/', element:<Homepage/>,},
  {path:'/Government',
   element:<GovHome/>,
  //add children here
  },

  {path:'/School', 
   element:<SchHome/>,
  //add children here
  },

  {path:'/Person', 
   element:<PerHome/>,
  //add children here
  },
  
  {path:'/Company',
   element:<ComHome/>,
   children:[
    {path:'/Company/Profile', element:<ComProfile/>},
    {path:'/Company/Admin', element:<ComAdmin/>},
    {path:'/Company/Finalcandidate', element:<ComFinalCandidate/>},
   ]},
]);


function App() {

  return <RouterProvider router={router}/>

}

export default App
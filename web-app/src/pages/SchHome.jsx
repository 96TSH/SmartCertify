import { Typography } from "@mui/material"
import MainMenu from "../components/sidebar/MainMenu"
import { Outlet } from "react-router-dom"

export default function SchHome(){

      return(

        <MainMenu Entity={"School"}>
        <h2>Smart Certify x School </h2>
        <Outlet/>
        </MainMenu>
        )
}
import { Typography } from "@mui/material"
import MainMenu from "../components/sidebar/MainMenu"
import { Outlet } from "react-router-dom"

export default function GovHome(){

      return(

        <MainMenu Entity={"Government"}>
        <h2>Smart Certify x Government </h2>
        <Outlet/>
        </MainMenu>
        )
}
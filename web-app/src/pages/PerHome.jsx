import { Typography } from "@mui/material"
import MainMenu from "../components/sidebar/MainMenu"
import { Outlet } from "react-router-dom"

export default function PerHome(){

      return(

        <MainMenu Entity={"Person"}>
        <h2>Smart Certify x Humanbeing </h2>
        <Outlet/>
        </MainMenu>
        )
}
import { Typography } from "@mui/material"
import MainMenu from "../components/sidebar/MainMenu"
import { Outlet } from "react-router-dom"


export default function ComHome(){

    return(
    <MainMenu Entity={"Company"}>
    <h2>Smart Certify x Company </h2>
    <Outlet/>
    </MainMenu>
    )
}
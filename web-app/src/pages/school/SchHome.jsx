import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Login from "../../components/Login";
import { useState } from "react";
import { Button } from "@mui/material";

export default function SchHome() {
  const location = useLocation();
  // const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <MainMenu Entity={"School"}>
      <h2>Smart Certify x School </h2>
      <Outlet />
      {location.pathname === "/School" && (
        <>
          {/* <Button
            variant="outlined"
            sx={{
              backgroundColor: "darkslategray",
              color: "white",
              marginRight: "10px",
            }}
            onClick={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            Register
          </Button> */}
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "darkslategray",
              color: "white",
            }}
            onClick={() => {
              setLogin(true);
              // setRegister(false);
            }}
          >
            Login
          </Button>
          {/* {register && (
            <Profile fields="school" title="Register School" action="create" />
          )} */}
          {login && <Login type="school" />}
        </>
      )}
    </MainMenu>
  );
}

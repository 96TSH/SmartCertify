import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";
import { useState } from "react";
import { Button } from "@mui/material";

export default function PerHome() {
  const location = useLocation();
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <MainMenu Entity={"Person"}>
      <h2>Smart Certify x Person </h2>
      <Outlet />
      {location.pathname === "/Person" && (
        <>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "darkslategray",
              color: "white",
              marginRight: "10px",
            }}
            onClick={() => {
              console.log("Logged in as:", localStorage.getItem("govAddress"));
              setRegister(true);
              setLogin(false);
            }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "darkslategray",
              color: "white",
            }}
            onClick={() => {
              setLogin(true);
              setRegister(false);
            }}
          >
            Login
          </Button>
          {register && (
            <Profile fields="person" title="Register Person" action="create" />
          )}
          {login && (
            <Profile
              type="person"
              fields="verify"
              title="Login"
              action="login"
            />
          )}
        </>
      )}
    </MainMenu>
  );
}

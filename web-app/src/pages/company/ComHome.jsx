import { Button } from "@mui/material";
import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";
import { useState } from "react";

export default function ComHome() {
  const location = useLocation();
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <MainMenu Entity={"Company"}>
      <h2>Smart Certify x Company </h2>
      <Outlet />
      {location.pathname === "/Company" && (
        <>
          <Button
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
            <Profile
              fields="company"
              title="Register Company"
              action="create"
            />
          )}
          {login && (
            <Profile
              type="company"
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

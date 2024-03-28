import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";

export default function GovHome() {
  const location = useLocation();

  return (
    <MainMenu Entity={"Government"}>
      <h2>Smart Certify x Government </h2>
      <Outlet />
      {location.pathname === "/Government" && (
        <Profile fields="government" title="Register Govt" action="create" />
      )}
    </MainMenu>
  );
}

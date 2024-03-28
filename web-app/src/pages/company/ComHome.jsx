import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";

export default function ComHome() {
  const location = useLocation();

  return (
    <MainMenu Entity={"Company"}>
      <h2>Smart Certify x Company </h2>
      <Outlet />
      {location.pathname === "/Company" && (
        <Profile fields="company" title="Register Company" action="create" />
      )}
    </MainMenu>
  );
}

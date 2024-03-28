import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";

export default function SchHome() {
  const location = useLocation();

  return (
    <MainMenu Entity={"School"}>
      <h2>Smart Certify x School </h2>
      <Outlet />
      {location.pathname === "/School" && (
        <Profile fields="school" title="Register School" action="create" />
      )}
    </MainMenu>
  );
}

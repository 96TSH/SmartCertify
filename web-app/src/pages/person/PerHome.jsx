import MainMenu from "../../components/sidebar/MainMenu";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../../components/Profile";

export default function PerHome() {
  const location = useLocation();

  return (
    <MainMenu Entity={"Person"}>
      <h2>Smart Certify x Person </h2>
      <Outlet />
      {location.pathname === "/Person" && (
        <Profile fields="person" title="Register Person" action="create" />
      )}
    </MainMenu>
  );
}

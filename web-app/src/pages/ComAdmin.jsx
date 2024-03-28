import Profile from "../components/Profile";
import MainMenu from "../components/sidebar/MainMenu";


const Homepage = () => {

  // const company = ['ID', 'UEN No.', 'Name', 'Address', 'Company Description'];

  return (
    <>
      {/* <Profile fields={company}/> */}
      <Profile fields="company"/>
    </>
  );
};

export default Homepage;

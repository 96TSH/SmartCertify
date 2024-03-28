import Profile from "../components/Profile";

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

import Profile from "../components/Profile";


const Homepage = () => {

  // const company = ['ID', 'UEN No.', 'Name', 'Address', 'Company Description'];

  return (
    <div>
      <h2>
        <b>SMARTCERTIFY</b>
      </h2>
      {/* <Profile fields={company}/> */}
      <Profile fields="company"/>
    </div>
  );
};

export default Homepage;

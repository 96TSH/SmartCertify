import Profile from "../components/Profile";


const Homepage = () => {

  const company = ['ID', 'UEN No.', 'Name', 'Address', 'Company Description'];
  const school = ['ID', 'Name', 'Email', 'Address', 'School Description'];
  const person = ['ID', 'Name', 'Nationality', 'NRIC', 'Passport', 'Address'];
  return (
    <div>
      <h2>
        <b>SMARTCERTIFY</b>
      </h2>
      {/* <Profile fields={fields}/> */}
      <Profile fields="person"/>
    </div>
  );
};

export default Homepage;

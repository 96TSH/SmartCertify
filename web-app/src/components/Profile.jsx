import { useState, useEffect, useContext } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import AuthContext from "../stores/authContext";

function Profile({ type, fields, title, action }) {
  const { Government, web3, governmentAddress } = useContext(AuthContext);

  const styles = {
    title: {
      color: "black",
      fontFamily: "Century Gothic",
      padding: "30px",
    },
  };

  const fieldsByProfiles = {
    government: ["ID", "Name", "Email", "Address", "Government Description"],
    company: ["ID", "UEN", "Name", "Address", "Company Description"],
    school: ["ID", "Name", "Email", "Address", "School Description"],
    person: ["ID", "Name", "Nationality", "NRIC", "Passport", "Address"],
    register: ["Address"],
    verify: ["Address"],
  };

  const choosenProfile = fieldsByProfiles[fields] || [];

  const initialFormData = choosenProfile.reduce(
    (acc, field) => ({
      ...acc,
      [field]: { value: "", isValid: true, errorMessage: "" },
    }),
    {}
  );

  const [formData, setFormData] = useState(initialFormData);
  const [isEditable, setIsEditable] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Update");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get(`/api/formData/${fields}`);
  //       const response = {'ID': 999, 'UEN':"999", 'Name':"James", 'Address':"Kane road", 'Company':"swiss"};
  //       console.log(response);
  //       const profileFields = fieldsByProfiles[fields] || [];
  //       const initialFormData = profileFields.reduce((acc, field) => ({
  //         ...acc,
  //         [field]: {
  //           value: response.data[field] || '', // Populate with fetched data or default to empty string
  //           isValid: true,
  //           errorMessage: ''
  //         }
  //       }), {});
  //       setFormData(initialFormData);
  //     } catch (error) {
  //       console.error('Error fetching form data:', error);
  //       // Handle error or set fallback state
  //     }
  //   };
  //   fetchData();
  // }, []);

  const isValidInput = (value) => value.trim().length >= 2;

  const toggleEdit = () => {
    if (isEditable) {
      handleSubmit();
    } else {
      setIsEditable(true);
      setButtonLabel("Submit");
    }
  };

  const toggleCancel = () => {
    setIsEditable(false);
    setButtonLabel("Update");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], isValid: true },
    }));
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = isValidInput(value); // Ensure this is called correctly
    const errorMessage = isValid ? "" : "Input must be at least 2 characters";

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...prevFormData[name],
        value: value,
        isValid: isValid,
        errorMessage: errorMessage,
      },
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    let isFormValid = true;
    const updatedFormData = Object.keys(formData).reduce((acc, field) => {
      const isValid = isValidInput(formData[field].value);
      if (!isValid) isFormValid = false;
      acc[field] = {
        ...formData[field],
        isValid: isValid,
        errorMessage: isValid
          ? ""
          : `${field.charAt(0).toUpperCase() + field.slice(1)} must be filled.`,
      };
      return acc;
    }, {});

    setFormData(updatedFormData);

    if (isFormValid) {
      console.log("Form data:", formData);
      setIsEditable(false);
      setButtonLabel("Update");
      // Proceed with form submission or further processing
    } else {
      console.log("Validation failed");
      // Optionally, handle the case where some fields are invalid
    }
  };

  // original handle login by James
  // const handleLogin = (e) => {
  //   if (type === "government") {
  //     localStorage.setItem("govAddress", formData["Address"].value);
  //   } else if (type === "company") {
  //     localStorage.setItem("comAddress", formData["Address"].value);
  //   } else if (type === "school") {
  //     localStorage.setItem("schAddress", formData["Address"].value);
  //   } else if (type === "person") {
  //     localStorage.setItem("perAddress", formData["Address"].value);
  //   }
  // };

//handleLogin by Shiyong
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      if (type === "company") {
        localStorage.setItem("comAddress", formData["Address"].value);
        const isAddressValid = await Government.methods.isRegisterCompany(formData["Address"].value).call();
      } else if (type === "school") {
        localStorage.setItem("schAddress", formData["Address"].value);
        const isAddressValid = await Government.methods.isRegisterSchool(formData["Address"].value).call();
      } else if (type === "person") {
        localStorage.setItem("perAddress", formData["Address"].value);
        const isAddressValid = await Government.methods.isRegisterPerson(formData["Address"].value).call();
      }
      
      if (isAddressValid) {
        // Handle successful verification redirect user to dashboard
        // how to write this redirect?
        console.log("Address verified and login successfully!");
      } else {
        // Handle invalid address
        console.error("Invalid login address!");
      }
    }
    catch (error) {
      console.log(error);
    }
  }



  const handleRegister = async(e) => {
    // try {
    //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // Get the selected account from the metamask plugin.
		// 	console.log(accounts);

    //   if (title === "Register Company") {
    //     console.log(formData["Address"].value)
    //     Government.methods.registerCompany(accounts[0],formData["Address"].value).send(accounts[0]);
    //   }
    // } catch (error) {
      
    // }
    try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			console.log("Accounts:", accounts);
      console.log("Register:", formData["Address"].value);
      console.log("deployed address =>", governmentAddress);
      if (title === "Register Company"){
        await Government.methods.registerCompany(formData["Address"].value).send(
          {
            from: accounts[0],
            gas: 100000,
            gasPrice: web3.utils.toWei('50', 'gwei')
          }
          );
      } else if (title === "Register Person") {
        await Government.methods.registerPerson(formData["Address"].value).send(
          {
            from: accounts[0],
            gas: 100000,
            gasPrice: web3.utils.toWei('50', 'gwei')
          }
          );
      }
			
    }
    catch(error)
    {
      console.log(error)
    }
   
  }

  const handleVerify = async(e) => {
    try {      
      if (title === "Verify Company") {
        console.log(formData["Address"].value);
        const accounts = await window.ethereum.enable();
        console.log("Accounts:", accounts);
        console.log("Register:", formData["Address"].value);
        // await Government.methods.isRegisterCompany(formData["Address"].value).send({from: accounts[0]});
        console.log("deployed address =>", governmentAddress);
        const isRegistered = await Government.methods.isRegisterCompany(formData["Address"].value).call({from: accounts[0]});
        console.log("Is registered:", isRegistered);
      } else if (title === "Verify Person") {
        console.log(formData["Address"].value);
        const accounts = await window.ethereum.enable();
        console.log("Accounts:", accounts);
        console.log("Register:", formData["Address"].value);
        // await Government.methods.isRegisterCompany(formData["Address"].value).send({from: accounts[0]});
        console.log("deployed address =>", governmentAddress);
        const isRegistered = await Government.methods.isRegisterPerson(formData["Address"].value).call({from: accounts[0]});
        console.log("Is registered:", isRegistered);
      }
    } catch (error) {
      
    }
  }

  return (
    <Container maxWidth="sm">
      {title && (
        <Typography variant="h4" sx={styles.title}>
          {title}
        </Typography>
      )}
      {action === "update" && (
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={4}>
            {choosenProfile.map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                // variant="filled"
                variant={isEditable ? "outlined" : "filled"}
                name={field}
                disabled={!isEditable}
                value={formData[field].value}
                onChange={handleChange}
                error={!formData[field].isValid}
                helperText={formData[field].errorMessage}
              />
            ))}
            <Button onClick={toggleEdit} variant="contained" color="primary">
              {buttonLabel}
            </Button>

            {isEditable && (
              <Button
                onClick={toggleCancel}
                variant="contained"
                color="warning"
              >
                Cancel
              </Button>
            )}
          </Box>
        </form>
      )}
      {action === "create" && (
        <form onSubmit={handleRegister}>
          <Box display="flex" flexDirection="column" gap={4}>
            {choosenProfile.map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                name={field}
                value={formData[field].value}
                onChange={handleChange}
                error={!formData[field].isValid}
                helperText={formData[field].errorMessage}
              />
            ))}
            <Button onClick={handleRegister} variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </form>
      )}
      {action === "verify" && (
        <form onSubmit={handleVerify}>
          <Box display="flex" flexDirection="column" gap={4}>
            {choosenProfile.map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                name={field}
                value={formData[field].value}
                onChange={handleChange}
                error={!formData[field].isValid}
                helperText={formData[field].errorMessage}
              />
            ))}
            <Button onClick={handleVerify} variant="contained" color="primary">
              Verify
            </Button>
          </Box>
        </form>
      )}
      {action === "login" && (
        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={4}>
            {choosenProfile.map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                name={field}
                value={formData[field].value}
                onChange={handleChange}
                error={!formData[field].isValid}
                helperText={formData[field].errorMessage}
              />
            ))}
            <Button onClick={handleLogin} variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
}

export default Profile;

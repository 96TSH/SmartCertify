import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function Profile({ fields }) {


  const fieldsByProfiles = {
    company: ['ID', 'UEN No.', 'Name', 'Address', 'Company Description'],
    school: ['ID', 'Name', 'Email', 'Address', 'School Description'],
    person: ['ID', 'Name', 'Nationality', 'NRIC', 'Passport', 'Address']
  };

  const choosenProfile = fieldsByProfiles[fields] || [];

  // const initialFormData = choosenProfile.reduce((acc, field) => ({ ...acc, [field]: '' }), {});
  const initialFormData = choosenProfile.reduce((acc, field) => ({
    ...acc, 
    [field]: { value: '', isValid: true, errorMessage: '' }
  }), {});

  const [formData, setFormData] = React.useState(initialFormData);

  const isValidInput = value => value.trim().length >= 2;



  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = isValidInput(value); // Ensure this is called correctly
    const errorMessage = isValid ? '' : 'Input must be at least 2 characters';
  
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], value: value, isValid: isValid, errorMessage: errorMessage },
    }));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let isFormValid = true;
    const updatedFormData = Object.keys(formData).reduce((acc, field) => {
      const isValid = isValidInput(formData[field].value);
      if (!isValid) isFormValid = false;
      acc[field] = { ...formData[field], isValid: isValid, errorMessage: isValid ? '' : `${field.charAt(0).toUpperCase() + field.slice(1)} must be filled.` };
      return acc;
    }, {});
  
    setFormData(updatedFormData);
  
    if (isFormValid) {
      console.log("Form data:", formData);
      // Proceed with form submission or further processing
    } else {
      console.log("Validation failed");
      // Optionally, handle the case where some fields are invalid
    }
  };
  

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Profile;

import { useState, useContext, useNavigate } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AuthContext from "../stores/authContext";

// eslint-disable-next-line react/prop-types
function Login({ type }) {
  const {
    schoolAddress,
    setSchoolAddress,
    companyAddress,
    setCompanyAddress,
    personAddress,
    setPersonAddress,
  } = useContext(AuthContext);

  const styles = {
    title: {
      color: "black",
      fontFamily: "Century Gothic",
      padding: "30px",
    },
  };

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    if (type === "company") navigate("/Company/Profile");
    else if (type === "school") navigate("/School/Profile");
    else if (type === "person") navigate("/Person/Profile");
  };

  const handleLogin = (e) => {
    if (type === "company") {
      setCompanyAddress(e.target.element.contractAddress.value);
      console.log(companyAddress);
    } else if (type === "school") {
      setSchoolAddress(e.target.element.contractAddress.value);
      console.log(schoolAddress);
    } else if (type === "person") {
      setPersonAddress(e.target.element.contractAddress.value);
      console.log(personAddress);
    }
    handleOpen();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={styles.title}>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <Box display="flex" flexDirection="column" gap={4}>
          <TextField
            label="Contract Address"
            variant="filled"
            name="contractAddress"
            //   value={formData[key]}
            //   onChange={handleChange}
          />
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </form>
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>Submission Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>Successful!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Login;

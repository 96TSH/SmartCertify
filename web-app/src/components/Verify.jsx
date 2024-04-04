import { useState, useContext } from "react";
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
function Register({ title, action }) {
  const {
    web3,
    Government,
    School,
    Company,
    Person,
  } = useContext(AuthContext);

  const styles = {
    title: {
      color: "black",
      fontFamily: "Century Gothic",
      padding: "30px",
    },
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (title === "Verify Company") {
        await Government.methods.isRegisterCompany(formData["Address"].value).send(
            {
              from: accounts[0],
              gas: 100000,
              gasPrice: web3.utils.toWei("50", "gwei"),
            });
      } else if (title === "Verify School") {
        await Government.methods.isRegisterSchool(formData["Address"].value).send(
            {
              from: accounts[0],
              gas: 100000,
              gasPrice: web3.utils.toWei("50", "gwei"),
            });
      }
      handleOpen();
    } catch (error) {}
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      {action === "verify" && (
        <form onSubmit={handleVerify}>
          <Box display="flex" flexDirection="column" gap={4}>
            <TextField
              label="Address"
              variant="filled"
              name="Address"
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </form>
      )}
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

export default Register;
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

  const collectCertificate = async (address) => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      const response = await Person.methods
        .addCertificateContract(address)
        .send({
          from: accounts[0],
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCollect = (e) => {
    e.preventDefault();
    collectCertificate(e.target.elements.certificateAddress.value);
    handleOpen();
  };

  const handleRegister = async(e) => {
    e.preventDefault();
    try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (title === "Register Company"){
        await Government.methods.registerCompany(e.target.elements.address.value).send(
          {
            from: accounts[0],
            gas: 100000,
            gasPrice: web3.utils.toWei("50", "gwei"),
          });
      } else if (title === "Register School") {
        await Government.methods.registerSchool(e.target.elements.address.value).send(
          {
            from: accounts[0],
            gas: 100000,
            gasPrice: web3.utils.toWei('50', 'gwei')
          }
          );
      } else if (title === "Add Admin") {
        await Government.methods.addAdmin(e.target.elements.address.value).send({
          from: accounts[0],
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      }
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      {action === "collect" && (
        <form onSubmit={handleCollect}>
        <Box display="flex" flexDirection="column" gap={4}>
          <TextField
            label="Certificate Address"
            variant="filled"
            name="certificateAddress"
          />
          <Button type="submit" variant="contained" color="primary">
            Collect
          </Button>
        </Box>
      </form>
      )}
      {action === "register" && (
        <form onSubmit={handleRegister}>
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

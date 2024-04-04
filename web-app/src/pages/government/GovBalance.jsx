import { useState, useContext, useEffect } from "react";
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
import AuthContext from "../../stores/authContext";

const GovBalance = () => {
  const { Government, web3 } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleGetBalance = () => {
    getBalance();
    handleOpen();
  }

  const getBalance = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      const data = await Government.methods
        .getBalance()
        .call({
          from: accounts[0],
          gas: 1000000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      console.log(data);
      const balance = data.toString();
      const modifiedBalance = balance.substring(0, balance.length - 18) + " CTH";
      setBalance(modifiedBalance);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
            variant="outlined"
            sx={{
              backgroundColor: "darkslategray",
              color: "white",
            }}
            onClick={handleGetBalance}
          >
            Get Balance
      </Button>
      {/* <Typography variant="h6" sx={{ marginTop: 2 }}>
        Balance: {balance}
      </Typography> */}
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>Balance</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h4" sx={{ marginTop: 2 }}>
              {balance}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GovBalance;
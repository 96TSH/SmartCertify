import { useState, useContext } from "react";
import {
  Typography,
  Box,
  CssBaseline,
  TableContainer,
  TableBody,
  TableCell,
  tableCellClasses,
  Table,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import AuthContext from "../stores/authContext";

const TableTemplate = ({ headers, data, title, actions }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "darkslategray",
      fontSize: 16,
      color: theme.palette.common.white,
      fontFamily: "century gothic",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: theme.palette.common.black,
      fontFamily: "Century Gothic",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const styles = {
    paperContainer: {
      backgroundColor: "white",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    title: {
      color: "black",
      fontFamily: "Century Gothic",
      padding: "30px",
    },
  };

  const { Company, web3, companyAddress, School, schoolAddress } = useContext(AuthContext);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [verifiedStatus, setVerifiedStatus] = useState(false);

  const deleteItem = async (id) => {
    try {
      // const accounts = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // console.log(accounts);
      if (title === "Final Candidate") {
        await Company.methods.removeCandicator(id).send({
          from: companyAddress,
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async () => {
    return;
  };

  const createItem = async (item, address) => {
    try {
      // const accounts = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // console.log(accounts);
      if (title === "Final Candidate") {
        await Company.methods.addCandicator(item, address).send({
          from: companyAddress,
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      } else if (title === "Admission") {
        await School.methods.studentAdmission(item).send({
          from: schoolAddress,
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyItem = async (id) => {
    try {
      // const accounts = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // console.log(accounts);
      const response = await Company.methods
        .verifyStaffAllCertificate(id)
        .send({
          from: companyAddress,
          gas: 100000,
          gasPrice: web3.utils.toWei("50", "gwei"),
        });
      console.log(response);
      if (response && response.status) {
        setVerifiedStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const graduateItem = async () => {
    return;
  };

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  const handleCreateItem = (event) => {
    event.preventDefault();
    const item = {
      name: event.target.name.value,
      id: event.target.id.value,
      nationality: "",
      nric: "",
      add: "",
      passport: "",
    };
    console.log(item);
    createItem(item, event.target.address.value)
      // .then(() => fetchItem())
      .then(() => setCreateOpen(false));
  };

  const handleUpdateOpen = () => {
    setUpdateOpen(true);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();
    updateItem()
      // .then(() => fetchItem())
      .then(() => setUpdateOpen(false));
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteItem = (item) => {
    deleteItem(item.id)
      // .then(() => fetchItem())
      .then(() => setDeleteOpen(false));
  };

  const handleVerification = (item) => {
    verifyItem(item.id);
    // .then(() => fetchItem())
  };

  const handleGraduationOpen = () => {
    setAdmissionOpen(true);
  };

  const handleGraduationClose = () => {
    setAdmissionOpen(false);
  };

  const handleGraduationItem = (event) => {
    event.preventDefault();
    graduateItem()
      // .then(() => fetchItem())
      .then(() => setAdmissionOpen(false));
  };

  return (
    <Box
      sx={{
        // bgcolor: "lightgrey",
        height: "100%",
        width: "100%",
        padding: "2%",
      }}
    >
      <CssBaseline />
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      <Paper elevation={5} sx={styles.paperContainer}>
        <TableContainer sx={{ border: "1px solid lightslategray" }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* map table headers */}
                {headers &&
                  headers.map((header) => (
                    <StyledTableCell key={header} sx={{ textAlign: "center" }}>
                      <b>{header}</b>
                    </StyledTableCell>
                  ))}
                {actions.includes("update") && actions.includes("delete") ? (
                  <StyledTableCell sx={{ textAlign: "center" }}>
                    <b>Actions</b>
                  </StyledTableCell>
                ) : (
                  (actions.includes("update") ||
                    actions.includes("delete")) && (
                    <StyledTableCell sx={{ textAlign: "center" }}>
                      <b>Action</b>
                    </StyledTableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* map table data */}
              {data.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {index + 1}
                  </StyledTableCell>
                  {Object.values(item).map((value) => (
                    <StyledTableCell align="center" key={value}>
                      {value}
                    </StyledTableCell>
                  ))}
                  {/* button for verification */}
                  {actions.includes("verify") && (
                    <StyledTableCell align="center" width="20%">
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "darkslategray",
                          color: "white",
                        }}
                        onClick={() => handleVerification(item)}
                      >
                        Verify
                      </Button>
                      {verifiedStatus ? (
                        <IconButton>
                          <VerifiedIcon />
                        </IconButton>
                      ) : (
                        <IconButton>
                          <CancelIcon />
                        </IconButton>
                      )}
                    </StyledTableCell>
                  )}
                  {/* button for graduation */}
                  {actions.includes("graduate") && (
                    <StyledTableCell align="center" width="10%">
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "darkslategray",
                          color: "white",
                        }}
                        onClick={handleGraduationOpen}
                      >
                        View
                      </Button>
                      <Dialog
                        open={admissionOpen}
                        onClose={handleGraduationClose}
                        componentsProps={{
                          backdrop: {
                            style: {
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                            },
                          },
                        }}
                        PaperProps={{
                          component: "form",
                          onSubmit: (event) => {
                            event.preventDefault();
                            handleGraduationItem(event);
                          },
                        }}
                      >
                        <DialogTitle>Student</DialogTitle>
                        <DialogContent>
                          {Object.entries(item).map(([key, value]) => (
                            <TextField
                              key={key}
                              id={key}
                              defaultValue={value}
                              name={key}
                              label={key.toUpperCase()}
                              fullWidth
                              margin="normal"
                              color="primary"
                            />
                          ))}
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleGraduationClose}>
                            Cancel
                          </Button>
                          <Button type="submit">Graduate</Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  )}
                  {/* buttons for update and delete */}
                  {(actions.includes("update") ||
                    actions.includes("delete")) && (
                    <StyledTableCell align="center" width="10%">
                      {actions.includes("update") && (
                        <IconButton
                          aria-label="update"
                          onClick={handleUpdateOpen}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      {actions.includes("delete") && (
                        <IconButton
                          aria-label="delete"
                          onClick={handleDeleteOpen}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                      {/* update dialog */}
                      <Dialog
                        open={updateOpen}
                        onClose={handleUpdateClose}
                        componentsProps={{
                          backdrop: {
                            style: {
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                            },
                          },
                        }}
                        PaperProps={{
                          component: "form",
                          onSubmit: (event) => {
                            event.preventDefault();
                            handleUpdateItem(event);
                          },
                        }}
                      >
                        <DialogTitle>Update Item</DialogTitle>
                        <DialogContent>
                          {Object.entries(item).map(([key, value]) => (
                            <TextField
                              key={key}
                              id={key}
                              defaultValue={value}
                              name={key}
                              label={key.toUpperCase()}
                              fullWidth
                              margin="normal"
                              color="primary"
                            />
                          ))}
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleUpdateClose}>Cancel</Button>
                          <Button type="submit">Update</Button>
                        </DialogActions>
                      </Dialog>
                      {/* delete dialog */}
                      <Dialog
                        open={deleteOpen}
                        onClose={handleDeleteClose}
                        componentsProps={{
                          backdrop: {
                            style: {
                              backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust this value to lighten or darken the backdrop
                            },
                          },
                        }}
                      >
                        <DialogTitle>
                          Are you sure you want to delete the item?
                        </DialogTitle>
                        <DialogActions>
                          <Button onClick={handleDeleteClose}>No</Button>
                          <Button onClick={() => handleDeleteItem(item)}>
                            Yes
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* button for create */}
      {actions.includes("create") && (
        <Box sx={{ textAlign: "right", padding: "30px" }}>
          <Button
            variant="outlined"
            sx={{ backgroundColor: "darkslategray", color: "white" }}
            onClick={handleCreateOpen}
          >
            Add New
          </Button>
          {/* create dialog */}
          <Dialog
            open={createOpen}
            onClose={handleCreateClose}
            componentsProps={{
              backdrop: {
                style: {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              },
            }}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                handleCreateItem(event);
              },
            }}
          >
            <DialogTitle>Create Item</DialogTitle>
            <DialogContent>
              {Object.keys(data[0]).map((key) => (
                <TextField
                  key={key}
                  id={key}
                  name={key}
                  label={key.toUpperCase()}
                  fullWidth
                  margin="normal"
                  color="primary"
                />
              ))}
              <TextField
                key="address"
                id="address"
                name="address"
                label="ADDRESS"
                fullWidth
                margin="normal"
                color="primary"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCreateClose}>Cancel</Button>
              <Button type="submit">Create</Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </Box>
  );
};

TableTemplate.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.array,
};

TableTemplate.defaultProps = {
  actions: [],
};

export default TableTemplate;

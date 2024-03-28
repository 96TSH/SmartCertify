import { useState } from "react";
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
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

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

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);

  const deleteItem = async () => {
    return;
  };

  const updateItem = async () => {
    return;
  };

  const createItem = async () => {
    return;
  };

  const verifyItem = async () => {
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
    createItem()
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

  const handleDeleteItem = (event) => {
    event.preventDefault();
    deleteItem()
      // .then(() => fetchItem())
      .then(() => setDeleteOpen(false));
  };

  const handleVerification = () => {
    setVerifyOpen(true);
    verifyItem()
      // .then(() => fetchItem())
  };

  const handleVerificationClose = () => {
    setVerifyOpen(false);
  }

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
                    <StyledTableCell align="center" width="10%">
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "darkslategray",
                          color: "white",
                        }}
                        onClick={handleVerification}
                      >
                        Verify
                      </Button>
                      <Dialog
                        open={verifyOpen}
                        onClose={handleVerificationClose}
                        componentsProps={{
                          backdrop: {
                            style: {
                              backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust this value to lighten or darken the backdrop
                            },
                          },
                        }}
                      >
                        <DialogTitle>
                          Verification Successful!
                        </DialogTitle>
                        <DialogActions>
                          <Button onClick={handleVerificationClose}>Close</Button>
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
                          <Button onClick={handleDeleteItem}>Yes</Button>
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

export default TableTemplate;

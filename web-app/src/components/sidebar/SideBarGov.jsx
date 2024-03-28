import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; //admin icon
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'; //registration icon
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; //verify icon
import HomeIcon from '@mui/icons-material/Home'; //home icon
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'; //1
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';//2
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'; //3

export default function SideBarGov() {
  const [openA, setOpenA] = React.useState(false);

  const handleClickA = () => {
    setOpenA(!openA);
  };

  const [openB, setOpenB] = React.useState(false);

  const handleClickB = () => {
    setOpenB(!openB);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton component={Link} to="/Government" >
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/Government/Admin">
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>

      <ListItemButton onClick={handleClickA}>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Registration" />
        {openA ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openA} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/Government/Registerschool">
          <ListItemIcon>
            <LooksOneOutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Register School" />
          </ListItemButton >
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/Government/Registercompany">
          <ListItemIcon>
            <LooksTwoOutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Register Company" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/Government/Registerperson">
          <ListItemIcon>
            <Looks3OutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Register Person" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickB}>
        <ListItemIcon>
          <VerifiedUserIcon />
        </ListItemIcon>
        <ListItemText primary="Verification" />
        {openB ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openB} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/Government/Verifycompany">
          <ListItemIcon>
            <LooksOneOutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Verify Company" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/Government/Verifyperson">
          <ListItemIcon>
            <LooksTwoOutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Verify Person" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

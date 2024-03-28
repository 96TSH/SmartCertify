import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'; //home icon

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; //admin icon
import ContactPageIcon from '@mui/icons-material/ContactPage'; //profile icon
import SchoolIcon from '@mui/icons-material/School'; //student icon
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'; //1
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';//2
//import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'; //3

export default function SideBarSch() {
  const [openA, setOpenA] = React.useState(false);

  const handleClickA = () => {
    setOpenA(!openA);
  };


  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton component={Link} to="/School" >
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/School/Profile">
        <ListItemIcon>
          <ContactPageIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>

      <ListItemButton component={Link} to="/School/Admin">
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>

      <ListItemButton component={Link} to="/School/Students">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Student" />
      </ListItemButton>

    </List>
  );
}

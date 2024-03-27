import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; //admin icon
import ContactPageIcon from '@mui/icons-material/ContactPage'; //profile icon
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; //final candidate icon
import HomeIcon from '@mui/icons-material/Home'; //home icon

export default function SideBarCom() {

//I tried to add this 4 links to the 4 ListItemButton, but error occur
//component={Link} to="/company"
//component={Link} to="/company/profile"
//component={Link} to="/company/admin"
//component={Link} to="/company/finalcandidate"

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton >
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
          <ContactPageIcon/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
      <ListItemButton > 
        <ListItemIcon>
          <ThumbUpAltIcon />
        </ListItemIcon>
        <ListItemText primary="Final Candidate" />
      </ListItemButton>
    </List>
  );
}

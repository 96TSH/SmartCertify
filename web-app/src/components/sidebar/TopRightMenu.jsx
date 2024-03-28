import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'; //npm install material-ui-popup-state
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



// export default function TopRightMenu({onButtonSelected,menuItems}) {
//   const [selectedButton, setSelectedButton] = useState("select");

//   function handleMenuItemClick (buttonName){
//       setSelectedButton(buttonName);
//       onButtonSelected(buttonName);
  // };

  export default function TopRightMenu({ menuItems }) {
    // const [selectedButton, setSelectedButton] = useState("select");
    function handleMenuItemClick(item) {
      window.location.href = `/${item}`; 
      // setSelectedButton(item);
      
    }
    // const location = useLocation();
    // const pathname = location.pathname;
    
    // // If the pathname is empty, set page to "select", otherwise set it to the pathname
    // const page = pathname === '/' ? 'select' : pathname;

  // export default function TopRightMenu({menuItems}) {
  //   const navigate = useNavigate();
  
  //   function handleMenuItemClick(item){

  //       navigate(`/${item}`);
  //     };

    return (
      <PopupState>
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" style={{ width: '120px', height: '40px' }} {...bindTrigger(popupState)}>
              select
            </Button>
            <Menu {...bindMenu(popupState)}>
                {menuItems.map((item,index)=>(
                  <MenuItem key={index} onClick={()=>(popupState.close(), handleMenuItemClick(item))}>
                    {item}
                  </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'; //npm install material-ui-popup-state
import { useState } from 'react';


export default function TopRightMenu({onButtonSelected,menuItems}) {
  const [selectedButton, setSelectedButton] = useState("select");

  function handleMenuItemClick (buttonName){
      setSelectedButton(buttonName);
      onButtonSelected(buttonName);
  };
  return (
    <PopupState>
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" style={{ width: '120px', height: '40px' }} {...bindTrigger(popupState)}>
            {selectedButton}
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
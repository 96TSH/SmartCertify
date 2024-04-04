import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state"; //npm install material-ui-popup-state
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../stores/authContext";

export default function TopRightMenu({ menuItems }) {
  const { selectedButton, setSelectedButton } = useContext(AuthContext);

  // const [selectedButton, setSelectedButton] = useState('select');

  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    navigate(`/${item}`);
    setSelectedButton(item);
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <Button
            variant="contained"
            defaultValue="select"
            style={{ width: "120px", height: "40px" }}
            {...bindTrigger(popupState)}
          >
            {selectedButton === 'Person' ? 'Individual' :
           selectedButton === 'School' ? 'Institution' :
           selectedButton === 'Government' ? 'Government' :
           selectedButton === 'Company' ? 'Organisation' : 'Select'}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => (popupState.close(), handleMenuItemClick(item))}
              >
                {item === 'Person' ? 'Individual' :
               item === 'School' ? 'Institution' :
               item === 'Government' ? 'Government' :
               item === 'Company' ? 'Organisation' : 'Select'}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state"; //npm install material-ui-popup-state
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopRightMenu({ menuItems }) {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState("select");

  const handleMenuItemClick = (item) => {
    navigate(`/${item}`);
    setSelectedButton(item);
  }

  return (
    <PopupState>
      {(popupState) => (
        <>
          <Button
            variant="contained"
            defaultValue="select"
            style={{ width: "120px", height: "40px" }}
            {...bindTrigger(popupState)}
          >
            {selectedButton}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => (popupState.close(), handleMenuItemClick(item))}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}

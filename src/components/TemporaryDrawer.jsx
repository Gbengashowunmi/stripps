import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { Icon } from "@iconify/react";
import "./temporary.scss";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "fit-content",
      }}
      role="presentation"
      className="box">
      {/* <List>
        <span
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
        </span>
      </List>
      <Divider /> */}
      <List
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/medic-drive">Medic-Drive</NavLink>
          <NavLink to="/sponsorship">Sponsorship</NavLink>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Icon
        icon="gg:menu-left"
        width="25"
        height="25"
        className="nav_bar"
        onClick={toggleDrawer("left", !state.left)}
      />

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        className="drawer">
        {list("left")}
      </Drawer>
    </div>
  );
}

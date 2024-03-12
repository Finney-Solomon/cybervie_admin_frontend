import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { handleSideBar } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const sideBarOpenClose = useSelector((state) => state.sideBarOpenClose);

  const dispatch = useDispatch()
  return (
    <>
      <AppBar position="sticky" style={{ background: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton edge="start" color="#114084" size="large" onClick={(e) => dispatch(handleSideBar(!sideBarOpenClose))} aria-label="menu">
              <MenuIcon sx={{ color: "#114084", }} />
            </IconButton>
            <img
              alt="Logo"
              style={{ maxWidth: "150px", maxHeight: "50px" }}
              src={"/images/logo.gif"}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

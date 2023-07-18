import {
  AppBar,
  appBarClasses,
  Box,
  styled,
  Toolbar,
  toolbarClasses
} from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { HeaderNameContext } from "./Providers/HeaderName";

export const Layout = () => {
  const { headerName } = useContext(HeaderNameContext);

  const HeaderAppBar = styled(AppBar)(() => ({
    [`&.${appBarClasses.root}`]: {
      position: "static",
      backgroundColor: "LightBlue"
    }
  }));

  const HeaderToolbar = styled(Toolbar)(() => ({
    [`&.${toolbarClasses.root}`]: {
      minHeight: 48,
      paddingleft: 18,
      color: "white",
      fontWeight: "bold"
    }
  }));

  return (
    <>
      <HeaderAppBar position="static">
        <HeaderToolbar>{headerName}</HeaderToolbar>
        <Box
          className="main"
          sx={{
            height: "85vh",
            border: "1px solid LightGray",
            padding: "10px",
            backgroundColor: "white",
            color: "Black"
          }}
        >
          <Outlet />
        </Box>
      </HeaderAppBar>
    </>
  );
};

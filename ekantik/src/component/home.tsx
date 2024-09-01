// src/component/Home.tsx
import React from "react";
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/");
  };

  return (
    <Box display="flex" height="100vh">
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Welcome to the Home Page</h1>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ marginTop: "20px" }}
        >
          Logout
        </Button>
      </Box>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <List>
          <ListItemButton
            component="div"
            onClick={() => navigate("/add-karyakars")}
          >
            <ListItemText primary="Add Karyakars" />
          </ListItemButton>
          <ListItemButton
            component="div"
            onClick={() => navigate("/add-emcee-points")}
          >
            <ListItemText primary="Add Emcee Points" />
          </ListItemButton>
          <ListItemButton
            component="div"
            onClick={() => navigate("/add-prasang")}
          >
            <ListItemText primary="Add Prasang" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default Home;

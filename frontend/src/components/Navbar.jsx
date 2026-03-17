import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const token = auth.token;
  const role = auth.role;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>

        {/* LOGO */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          RentShield AI
        </Typography>

        {/* NOT LOGGED IN */}
        {!token && (
          <>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}

        {/* LOGGED IN */}
        {token && (
          <Box display="flex" alignItems="center" gap={1}>

            {!role && (
              <Button onClick={() => navigate("/select-role")} color="inherit">
                Select Role
              </Button>
            )}

            {role === "student" && (
              <>
                <Button onClick={() => navigate("/dashboard")} color="inherit">
                  Dashboard
                </Button>
                <Button color="inherit">Search PG</Button>
              </>
            )}

            {role === "landlord" && (
              <>
                <Button onClick={() => navigate("/dashboard")} color="inherit">
                  Dashboard
                </Button>
                <Button color="inherit">Add Property</Button>
              </>
            )}

            {/* 🔥 AVATAR */}
            <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
              <Avatar>
                {auth?.name ? auth.name[0].toUpperCase() : "U"}
              </Avatar>
            </IconButton>

            {/* 🔽 DROPDOWN MENU */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => navigate("/profile-setup")}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>

          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
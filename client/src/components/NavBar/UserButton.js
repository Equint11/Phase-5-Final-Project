import * as React from 'react';
import { useState } from "react";
import { Link, Box, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';


function UserButton({ user, setUser }) {


    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
              setUser(null);
            }
        });
    }
    const handleDeleteAcount = () =>{
        fetch(`/users/${user.id}`,{
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
              setUser(null);
            }
        });
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account Options">
                <IconButton
                    sx={{ p: 3 }}
                    onClick={handleOpenUserMenu}
                >
                     <Avatar alt="User Profile" ></Avatar> 
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                sx={{
                    mt: '50px',
                    ml: "20px"
                }}
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem key={"profile"}>
                    <Typography textAlign="center"><Link href="/profile" color="inherit" underline="none">My Profile</Link></Typography>
                </MenuItem>
                <MenuItem key={"My Account"}>
                    <Typography textAlign="center"><Link href="/myaccount" color="inherit" underline="none">My Account</Link></Typography>
                </MenuItem>

                <MenuItem key={"logout"}>
                    <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </MenuItem>
                <MenuItem key={"Delete Acount"}>
                    <Typography textAlign="center" color='red' onClick={handleDeleteAcount}  >DELETE ACCOUNT</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default UserButton;

import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Tooltip, IconButton, Toolbar, Typography, createTheme, ThemeProvider, Box, Paper } from '@mui/material';
// import SearchBar from "./SearchBar.js"
// import HomeButton from "./HomeButton.js"
// import ExploreButton from "./ExploreButton.js"
import NotificationsButton from "./NotificationsButton.js"
// import MessagesButton from "./MessagesButton.js"
import UserButton from "./UserButton.js"
import CssBaseline from '@mui/material/CssBaseline';
import CycloneIcon from '@mui/icons-material/Cyclone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MailIcon from '@mui/icons-material/Mail';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';


const paperStyle={
    boxShadow: '5px 1px 17px black',
    marginBottom:"10px",}

const theme = createTheme({
    palette: {
      mode:'dark',
      primary: {
        main: "#38b3dc",
        light: "#abdef0",
        dark: "#00a4d7",
       
      },
      secondary: {
        main: "#e6e9fa"
      },
      button: {
        '&:hover': {
          backgroundColor: '#fff',
          color: '#3c52b2',
      }
    }
  }});
  
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.3, 1.3, 1.5, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.10),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: 'auto',
    },
  }));
  


function NavBar({ user, setUser, setFriendships }) {



    return (
        <ThemeProvider  theme={theme} >
        <CssBaseline />
        
            <Box sx={{ flexGrow: 1, backgroundColor:'black'}}>
              <Paper  elvation={5} style={paperStyle}>

                <AppBar position="sticky" sx={{backgroundColor: "#000000", borderColor: 'white'}}>
                    {/* <Container maxWidth="xl"> */}
                    <Toolbar sx={{ flexGrow: 1, backgroundColor:'black'}}>
                    
                        <IconButton
                         href="/"
                         size="small"
                         edge="start"
                         color="inherit"
                         aria-label="open drawer"
                         sx={{ mr: 2 }}
                         >
                            <CycloneIcon fontSize="large"
                            sx={{ mr: 1, color: '#1976D2' }}
                            /> 
                        </IconButton>
                    
                        
                            
                        <Typography variant="h6" component="div" href="/"
                            sx={{
                              mr: 27,
                              fontWeight: 700,
                              letterSpacing: '.2rem',
                              textDecoration: 'none',
                              color: 'white'
                            }}
                            >
                            Social Space
                        </Typography>
                        <Search sx={{pl:'5px'}}>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search Social Space..."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}/>
                        <Link to="/profile" style={{ color: 'inherit' }}>

                        <Tooltip title="Market Place">
                            <IconButton sx={{ mr: '10', color: 'white' }} href="/">
                                <StorefrontIcon fontSize="large"
                                sx={{ mr: '1', color: 'white' }}
                                /> 
                            </IconButton>
                        </Tooltip>
                        </Link>
        
                        {/* <SearchBar currentUser={user} setFriendships={setFriendships} /> */}
                        
                        {/*  <Link to="/" style={{ color: 'inherit' }}>
                            <HomeButton />
                          </Link>*/}

                        {/* <Link to="/explore" style={{ color: 'inherit' }}> */}
                        {/* </Link> */}

                        {/* <Link to="/messaging" style={{ color: 'inherit' }}> */}
                            <MailIcon fontSize="large"/>
                        {/* </Link>  */}

                        <NotificationsButton sx={{backgroundColor: "#000000", fontSize:"large"}} /> 
                        <IconButton>

                        <Avatar
                         
                         >
                          <UserButton
                          src={user.profile_picture?`http://localhost:4000/${user.profile_picture}`:"https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"}
                          sx={{backgroundColor: "#000000"}}  user={user} setUser={setUser}
                          
                          />
          
                        </Avatar>
                        </IconButton>
            
                    </Toolbar>
                    {/* </Container> */}
                </AppBar>
              </Paper>
            </Box>
        </ThemeProvider>
  )
}

export default NavBar
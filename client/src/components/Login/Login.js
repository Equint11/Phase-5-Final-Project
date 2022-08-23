import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import React, { useState } from "react";
import CycloneIcon from '@mui/icons-material/Cyclone';
import { Typography, Divider, Box, Button, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
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
  }})

const paperStyle={
    padding:'90px 100px',
    boxShadow: '5px 7px 17px #1976D2',
    width:500, 
    margin:"20px auto",
    position: 'absolute',
    top:'45%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

function Login({ onLogin }) {
    
    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <ThemeProvider  theme={theme} >

        <CssBaseline />
        <Grid >
            <Paper elvation={5} style={paperStyle}>
                <Grid align = 'center'>
                    <CycloneIcon  fontSize="large"
                    sx={{ mr: 1, color: 'white' }}
                    />
            
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            textDecoration: 'none',
                            color: 'white',
                            mb:4
                        }}
                        >
                        SocialSpace
                    </Typography>
            
                    {showLogin ? (
                        <Box sx={{m:2}}>
                        <LoginForm onLogin={onLogin}  />
                        <Divider sx={{mt: 2, mb: 2}} />
                        <Typography variant="h7">
                            Don't have an account?
                            <Button  
                            variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2', '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}}
                            onClick={() => setShowLogin(false)}>
                                Sign Up Instead
                            </Button>
                        </Typography>
                    </Box>
                    ) : (
                        <Box sx={{m:2}}>
                        <SignUpForm onLogin={onLogin} />
                        <Divider sx={{mt: 2, mb: 2}}/>
                        <Typography variant="h7">
                            Already have an account?
                            <Button variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}} onClick={() => setShowLogin(true)} >
                                Log In Instead
                            </Button>
                        </Typography>
                    </Box>
                )}
                </Grid>
        </Paper>
    </Grid>
                </ThemeProvider>
    )
}

export default Login
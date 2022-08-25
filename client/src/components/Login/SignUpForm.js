import React, { useState } from "react";
import { Box, Button , TextField , Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {
  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        username,
        password,
        password_confirmation: passwordConfirmation,
        bio: "",
        profile_picture_url: ""
      }),
     })
     .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) =>{
          navigate('/myaccount')
           onLogin(user)});
      } else {
        r.json().then((err) => {
          setErrors(err.errors)
        }
          );
      }
    });
  }

  

    return (
        <Box>
            <TextField
                id="fullname"
                label="Full Name"
                placeholder="Pick your username..."
                value={fullname}
                fullWidth
                onChange={(e) => setFullname(e.target.value)}
                sx={{mb:2}}
            />
            <TextField
                id="username"
                label="Username"
                placeholder="Pick your username..."
                value={username}
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
                sx={{mb:2}}
            />
            <TextField
                id="password"
                label="Password"
                placeholder="Pick your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{mb:2}}
                fullWidth
                type="password"
            />
            <TextField
                id="password-confirmation"
                placeholder="Confirm password..."
                label="Password Confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                sx={{mb:2}}
                fullWidth
                type="password"
            />
        
            <Button  
            onClick={handleSubmit}
            variant="outlined" 
            edge="end"  
            sx={{p:1, mt:1, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
              backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
          }}}  >
                {isLoading ? "Loading..." : "Sign Up"}
            </Button>

            <Box>
                {errors.map((err) => (
                <Alert sx={{mt: 2, mb:1}} severity="error" key={err}>{err}</Alert>
                ))}
            </Box>
        </Box>
    );
}

export default SignUpForm;
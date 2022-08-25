import React, { useState } from "react";
import { Box, Button , TextField , Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin, setFriendships }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          navigate('/profile')
          onLogin(user)
        })}
      else {
        r.json().then((err) => {
          setErrors(err.errors)
      })}
     });
  }

  return (
    <Box>
      <TextField
        id="username"
        label="Username"
        placeholder="Enter username..."
        value={username}
        fullWidth
        onChange={(e) => setUsername(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        id="password"
        placeholder="Enter password..."
        label="Password"
        value={password}
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
        sx={{mb:2}}
        type="password"
      />
    
      <Button 
      variant="outlined" 
      edge="end"  
      sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
        backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
    }}}  
      onClick={handleSubmit} >
        {isLoading ? "Loading..." : "Log In"}
      </Button>
      
      <Box>
        {errors.map( (err) => (
          <Alert sx={{mt: 2, mb:1}} severity="error" key={err}>{err}</Alert>
        ))}
      </Box>
    </Box>
  );
}

export default LoginForm;
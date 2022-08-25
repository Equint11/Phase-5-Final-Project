import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment, Box, Typography} from "@mui/material"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from'@mui/material/IconButton';


const defaultValues = {
    profile_picture : "",
    bio: "",
}

function SetPB({user, setUser}) {
    const [profilePicture, setProfilePicture] = useState(null);
    // const [updateUser, setUpdateUser] = useState({
    //   bio: user.bio,
    //   full_name: user.full_name,
    //   profile_picture: user.profile_picture,
    //   username: user.username
    // });
    const [formData, setFormData] = useState(defaultValues);
    const navigate = useNavigate()
    const {bio } = formData
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setUpdateUser({
    //     ...updateUser,
    //     [name]: value,
    //   });
    // };
    function handleChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }
   
    // console.log(formValues)

    const handleSubmit = (e) => {
          e.preventDefault();
        const formData = new FormData()
        formData.append("profile_picture", profilePicture)
        formData.append("bio", bio)
        const configObj = {
          method: "PATCH",
          body:formData
        };
        fetch(`/users/${user.id}`, configObj)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
            navigate('/')
          } 
        )
        setFormData(setFormData);
      };
    
    return (
        <div>
        <Grid style={{ display: "inline-block", backgroundColor:'black',
    backgroundSize: "cover",
    backgroundAttachment: "fixed-right",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat",
    }}>
      <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
        <Grid style={{ width: "300px", height: "300px", margin: "auto", marginTop: "13%"}}>
          <form onSubmit={handleSubmit}>
            <Grid container 
            alignItems="center"
            justify="center"
            direction="column"
            margin="auto">
              <Typography
                style={{ marginTop: "-30%", marginBottom: "20%" }}
                sx={{ lineHeight:'30px', fontSize:'30px', color:'white'}}
              >
                 Set up your profile
                </Typography> 
              
             <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "10%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                      
                }}
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  placeholder='Tell us about yourself'
                  
                
                  onChange={handleChange}
                  
                />
                <Grid item margin="auto"  style={{ marginTop: "30%", marginBottom: "1%" }}>
                <IconButton aria-label="Upload Image"   variant="contained" component="label"> 
                <Typography sx={{ lineHeight:'30px', fontSize:'25px', color:'white'}}>
                    Profile Picture
                    </Typography>
              <AddPhotoAlternateIcon sx={{fontSize:'40px', ml:"10px"}}/>
              <input
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                  accept="image/*"
                  />
  
              </IconButton >
              </Grid>
              </Grid>
            <Grid item margin="auto" style={{ marginTop: "1%", marginBottom: "2.5%" }}>
              <Button type="submit"
                     variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'white',  backgroundColor: '#1976D2', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}}>
                Ok
              </Button>
            </Grid>
              <Button href='/'
                     variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}}>
                Skip
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
          
        </div>
  )
}

export default SetPB
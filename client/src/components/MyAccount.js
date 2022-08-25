// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import { Grid, TextField, Button, InputAdornment, Box} from "@mui/material"
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import IconButton from'@mui/material/IconButton';

// function MyAccount({user, setUser}) {
//     const [profile_picture, setProfile_Picture] = useState(null);
//     const [updateUser, setUpdateUser] = useState({
//       bio: user.bio,
//       full_name: user.full_name,
//       profile_picture: user.profile_picture,
//       username: user.username
//     });

//     const navigate = useNavigate()
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setUpdateUser({
//         ...updateUser,
//         [name]: value,
//       });
//     };
//     // console.log(formValues)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //   e.preventDefault();
//         // const formData = new FormData()
//         // formData.append("image", imageData)
//         // formData.append("caption", caption)
//         // formData.append('user_id', user.id)
//         const configObj = {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//           },
//           body: JSON.stringify({...updateUser})
//         };
//         fetch(`/users/${user.id}`, configObj)
//           .then((res) => res.json())
//           .then((data) => {
//             setUser(data)
//             navigate('/me')
//           } 
//         )
//         setUpdateUser(updateUser);
//       };
    
//     return (
//         <div>
//         <Grid style={{ display: "inline-block", backgroundColor:'black',
//     backgroundSize: "cover",
//     backgroundAttachment: "fixed-right",
//     width: "100%",
//     height: "100%",
//     position: "absolute", 
//     backgroundRepeat: "no-repeat",
//     }}>
//       <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
//         <Grid style={{ width: "300px", height: "300px", margin: "auto", marginTop: "13%"}}>
//           <form onSubmit={handleSubmit}>
//             <Grid container 
//             alignItems="center"
//             justify="center"
//             direction="column"
//             margin="auto">
//               <h3 style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>Edit Account</h3>
//               <Grid item margin="auto" marginTop="5%" marginBottom="2%">
//               <TextField
//                     InputLabelProps={{ shrink: true }}
//                     InputProps={{
                      
//                     }}
//                     id="full_name"
//                     name="full_name"
//                     label="Full Name"
//                     type="text"
//                     value={updateUser.full_name}
//                     onChange={handleChange}
                    
//                   />
//               </Grid>
//               <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
//                 <TextField
//                   InputLabelProps={{ shrink: true }}
//                   InputProps={{
                    
//                   }}
//                   id="username"
//                   name="username"
//                   label="Username"
//                   type="text"
//                   value={updateUser.username}
//                   onChange={handleChange}
                  
//                 />
//               </Grid>
//              <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
//                 <TextField
//                   InputLabelProps={{ shrink: true }}
//                   InputProps={{
                      
//                 }}
//                   id="bio"
//                   name="bio"
//                   label="Bio"
//                   type="text"
//                   value={updateUser.bio}
//                   onChange={handleChange}
                  
//                 />
//               </Grid>
//                 <Grid item margin="auto" marginBottom="2%">
//                 <IconButton aria-label="Upload Image"   variant="contained" component="label"> 
//                 <Box>
//                     Profile Picture
//                     </Box>
//               <AddPhotoAlternateIcon/>
//               <input
//                   onChange={(e) => setProfile_Picture(e.target.files[0])}
//                   type="file"
//                   id="image"
//                   hidden
//                   accept="image/*"
//                   />
  
//               </IconButton >
//               </Grid>
//             <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
//               <Button variant="outlined" 
//                             edge="end"  
//                             sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
//                                 backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
//                             }}}
//                 onSubmit={handleSubmit}>
//                 EDIT
//               </Button>
//             </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </Grid>
          
//         </div>
//   )
// }

// export default MyAccount
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment, Box} from "@mui/material"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from'@mui/material/IconButton';


const defaultValues = {
    profile_picture : "",
    bio: "",
}

function MyAccount({user, setUser}) {
    const [profilePicture, setProfilePicture] = useState(null);
    // const [updateUser, setUpdateUser] = useState({
    //   bio: user.bio,
    //   full_name: user.full_name,
    //   profile_picture: user.profile_picture,
    //   username: user.username
    // });
    const [formData, setFormData] = useState(defaultValues);
    const navigate = useNavigate()
    const {bio, full_name, profile_picture, username} = formData
  
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
        formData.append("fullname", full_name)
        formData.append("bio", bio)
        const configObj = {
          method: "PATCH",
          body:formData
        };
        fetch(`/users/${user.id}`, configObj)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
            navigate('/me')
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
              <h3 style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>Edit Account</h3>
              <Grid item margin="auto" marginTop="5%" marginBottom="2%">
              <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      
                    }}
                    id="full_name"
                    name="full_name"
                    label="Full Name"
                    type="text"
                    // value={updateUser.full_name}
                    onChange={handleChange}
                    
                  />
              </Grid>
              <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    
                  }}
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                //   value={updateUser.username}
                  onChange={handleChange}
                  
                />
              
              </Grid>
             <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                      
                }}
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                //   value={updateUser.bio}
                  onChange={handleChange}
                  
                />
              </Grid>
                <Grid item margin="auto" marginBottom="2%">
                <IconButton aria-label="Upload Image"   variant="contained" component="label"> 
                <Box>
                    Profile Picture
                    </Box>
              <AddPhotoAlternateIcon/>
              <input
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                  accept="image/*"
                  />
  
              </IconButton >
              </Grid>
            <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
              <Button type="submit"
                     variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2',  '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}}>
                EDIT
              </Button>
            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
          
        </div>
  )
}

export default MyAccount
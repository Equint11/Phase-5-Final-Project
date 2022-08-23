// import Box from '@mui/material/Box';
// import { Button, Modal, IconButton, TextField, Typography, styled, Avatar, Stack, InputAdornment } from '@mui/material';
// import { useState } from "react";




// const modalStyle ={
//     position: 'absolute',
//     top:'50%',
//     left: '50%',
//     width: 550,
//     transform: 'translate(-50%, -50%)',
//     bgcolor: '#EEEEEE',
//     border: '1px solid white',
//     borderRadius: '5px',
//     boxShadow: 24,
//     p: 5
        
// };
// const CustomModal = styled(Modal) ({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
// })

// const UserBox = styled(Box) ({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "20px"
// })
// function CreatePost({ onSubmit }) { 
//     const [text, setText] = useState("");
//     const [open, setOpen] = useState(false);

//     function handleChange(e) {
//         setText(e.target.value);
//     }

    

//     // User enters pop up window to choose song
    

//     // User exits pop up window 


    

//     // Once all information (caption and song) are chose, user submits and posts to the feed
//     function handleSubmit(e) {
//         e.preventDefault();
//         onSubmit(text)
//         setText("");
       
//     }

//     return (
//         <Box sx={{ 
//             m: 'auto',
//             // border: '2px solid #424242',
//             backgroundColor:'#BDBDBD',
//             borderRadius: '12px',
//             p:2,
//             mb: 2
//         }}>
            
//             <Typography textAlign='center'variant="h4" sx={{m:2}}>
//                  Create Post
//             </Typography>
            
//             <TextField
//                 id="caption"
//                 label="Whats On Your Mind?"
//                 placeholder="Insert Caption"
//                 multiline
//                 maxRows={4}
//                 value={text}
//                 onChange={handleChange}
//                 sx={{width: '30vw', m:2}}
//             />
            
          
// {/*          
//             <Modal
//                 open={open}
        
//             >
//                 <Box sx={modalStyle}>1
//                     <Typography 
//                     align="center"
//                     sx={{p:1}}
//                     variant="h5">
                        
//                     </Typography>
                    
//                    <Box textAlign='center'>
//                     <Button  
//                     variant="outlined" 
//                     edge="end"  
//                     sx={{p:1, mt:5, color:'white',  backgroundColor: '#01579B', borderColor: 'black' }} >
//                         Add Song
//                     </Button>
//                     </Box>  
//                 </Box>
//             </Modal> */}
//              <CustomModal
//         open={open}
//         onClose={e=>setOpen(false)}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box width={500} height={280} bgcolor="white" borderRadius={3} p={8}>
//             <Typography variant="h5" color="black" textAlign="center">
//             Create A New Post
//             </Typography>
//         <UserBox>
//             <Avatar 
//             sx={{ width: 60, height: 60 }}
//             />
//                 <Typography fontWeight={900} variant="span">
//                 </Typography>
//         </UserBox>
//             <Stack direction="row" mt={2} mb={3} gap={1}>
//                 <TextField
//                     InputLabelProps={{ shrink: true }}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
                       
//                         </InputAdornment>
//                       ),
//                     }}
//                 id="image"
//                 name="image"
//                 label="Add A Photo"
//                 type="text"
//                 // value={postValues.image}
//                 onChange={handleChange}
//                 required
//                 />
//             </Stack>
//             <TextField
//                 sx={{ width: "100%" }}
//                 name="description"
//                 id="description"
//                 multiline
//                 rows={3}
//                 placeholder="Add a description"
//                 variant="standard"
//                 // value={postValues.description}
//                 onChange={handleChange}
//                 required
//                 />
//             <Stack>
//                 <Button onClick={handleSubmit}color="success"  display="center">POST</Button>
//             </Stack>
//         </Box>
//       </CustomModal>
            

            
        
//         <Box textAlign='center'>
//                 <Button variant="outlined" 
//                             edge="end"  
//                             sx={{p:1, mt:5, color:'#1976D2',  backgroundColor: 'black', borderColor: 'white' }}  
//                 disabled={text.length === 0} onClick={handleSubmit}>
//                     Submit
//                 </Button>
//         </Box>

//         </Box>
//     )
// }


// export default CreatePost




import React from 'react';
import { useState } from "react";
import { Fab, Tooltip, Button, Modal, Box, Typography, styled, TextField, Avatar, Stack, InputAdornment, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';



//Material UI
const CustomModal = styled(Modal) ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    marginTop: "10px"
})

const defaultValues = {
    user_id: undefined,
    description: "",
    image: "",
    like: 0,
}
const paperStyle={
    padding:'110px 110px',
    boxShadow: '5px 7px 17px #1976D2',
    width:500, 
    margin:"20px auto",
    position: 'absolute',
    top:'45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}


export default function CreatePost({ currentUser, addPost }) {
    const [open, setOpen] = useState(false);
    const [postValues, setPostValues] = useState(defaultValues);
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");

    // const {  } = currentUser

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostValues({
            ...postValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({...postValues, user_id: currentUser.id}),
          };
          fetch("/meow_posts", configObj)
          .then(res => res.json())
          .then((newPost) => addPost(newPost))
        setPostValues(defaultValues);
        setOpen(false)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <Tooltip onClick={e=>setOpen(true)}title="Create Post" sx={{position:"fixed", bottom:20, left: { xs: "calc(50% - 25px)", md:30 } }}>
            <Fab color="#1976D2" aria-label="add">
                <Add/>
            </Fab>
        </Tooltip>
        <Button></Button>
      <CustomModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box bgcolor="#212121" > */}
            <Paper elvation={5} style={paperStyle}>

            <Typography variant="h6" color="#white" textAlign="center">
            Create A New Post
            </Typography>
        <UserBox>
            <Avatar 
            sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
                name
            </Typography >
        </UserBox>
            <TextField
                
                sx={{ width: "100%", color:'white' }}
                id="description"
                multiline
                rows={2}
                placeholder="Whats on your mind?"
                variant="standard"
                // value={postValues.description}
                onChange={handleChange}
                required
                />
            <Stack>
            <IconButton aria-label="Upload Image"   variant="contained" component="label"> 
            <AddPhotoAlternateIcon/>
            <input
                type="file"
                hidden
            />
            </IconButton>
                <Button onClick={handleSubmit}color="success"  display="center">POST</Button>
            </Stack>
                </Paper>
        {/* </Box> */}
      </CustomModal>
        </form>
        </>
    )
}
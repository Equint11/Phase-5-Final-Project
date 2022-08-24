import React from 'react';
import { useState } from "react";
import { Fab, Tooltip, Button, Modal, Box, Typography, styled, TextField, Avatar, Stack, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from'@mui/material/IconButton';



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
    imageCaption: "",
    image: "",
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

 function CreatePost({ user, addPost, onSubmit }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(defaultValues);
    // const [imageCaption, setImageCaption] = useState("");
    const [imageData, setImageData] = useState(null);

    const { caption, image } = formData
    console.log(user)

  

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }
   
    
        
    
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData()
        formData.append("image", imageData)
        formData.append("caption", caption)
        formData.append('user_id', user.id)

        fetch("/posts", {
            method:"POST",
            body:formData
        })
        .then(r => r.json())
        .then(r =>console.log('image added'))
    }

    console.log(imageData)
    console.log(caption)

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
                id="caption"
                label="Insert Caption"
                multiline
                rows={2}
                placeholder="Whats on your mind?"
                variant="standard"
                name="caption"
                // value={caption}
                onChange={handleChange}
               
                />
            <Stack>
          

            <IconButton aria-label="Upload Image"   variant="contained" component="label"> 
            <AddPhotoAlternateIcon/>
            <input
                onChange={(e) => setImageData(e.target.files[0])}
                type="file"
                id="image"
                hidden
                accept="image/*"
                />

            </IconButton>
                
        
                <Button   variant="outlined" 
                            edge="end"  
                            sx={{p:1, mt:5, color:'black',  backgroundColor: '#BDBDBD', borderColor: '#F44336s', boxShadow: '5px 7px 20px -10px #1976D2', '&:hover':{
                                backgroundColor:'#212121', color:'#1976D2', borderColor: '#1976D2'
                            }}}  
                //  disabled={caption.length === 0}
                 onClick={handleSubmit}>
             Post
                </Button>
            </Stack>
                </Paper>
        {/* </Box> */}
      </CustomModal>
        </form>
        </>
    )
}
export default CreatePost
import { useState, useEffect } from 'react';
import { Box, Typography, Stack, Grid, Paper, Fab} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { lineHeight } from '@mui/system';
// import UserPost from "./UserPost.js"
import "./ProfilePage.css";
import EditIcon from '@mui/icons-material/Edit';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';









// import { Stack } from '@mui/system';

const paperStyle={
    backgroundColor:'#424242',
    borderRadius: '1px',
    m:2,
    p:1,
    // boxShadow: '5px 7px 17px #1976D2',
    marginBottom:"20px",}
    



function ProfilePage() {
    const [editingMode , setEditingMode] = useState(false)
    const [openMessage, setOpenMessage] = useState(false);

    // const initialEditInfo = {
    //     profile_picture_url: user.profile_picture_url,
    //     bio: user.bio
    // }

    // const [editInfo, setEditInfo] = useState(initialEditInfo)

    // function handleChange(e) {
    //     setEditInfo({
    //         ...editInfo,
    //         [e.target.id]: e.target.value
    //     })
    // }

    function handleEdit() {
        setEditingMode(currentMode => !currentMode)
    }

    // function handleSave() {
    //     //patch request
    //     fetch(`/users/${user.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(editInfo)
    //     })
    //     .then(r => {
    //         if (r.ok) {
    //             r.json().then(updatedUser => {
    //                 fetch("/profile", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type":"application/json",
    //                     },
    //                     body: JSON.stringify({
    //                         user_id: updatedUser.id,
    //                         user_profile_picture: updatedUser.profile_picture_url
    //                     })
    //                 })
    //                 setEditingMode(false)
    //                 setEditInfo(initialEditInfo)
    //                 setOpenMessage(true);
    //             })
    //         }
    //     })
    // }
    
    function handleCloseMessage(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenMessage(false);
    }
    


    return(
        <Box>
            <Stack direction='row' spacing={2} justifyContent="space-between">
                <Box flex={1} p={2} width='100%' sx={{bgcolor:'black', borderRadius:'6px' }}>
                    <Typography sx={{p:'20px', lineHeight:'18px', fontSize:'17px', fontWeight:'bold', color:'#1976D2'}}>
                        name
                    </Typography>
                    
                    <CardMedia
                        sx={{
                            marginTop:'-10px'
                            
                        }}
                        
                        component="img"
                        width='100%'
                        height="20%"
                        image="/static/images/cards/paella.jpg"
                        alt="Profile pic"
                        />
                    <Timeline className='timeline' sx={{p:'0'}}>
                        <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{bgcolor:'#1976D2', p:'2px'}} />
                            <TimelineConnector  />
                        </TimelineSeparator>
                        <TimelineContent>Name</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{bgcolor:'#1976D2', p:'2px'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Birthday</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{bgcolor:'#1976D2', p:'2px'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Job</TimelineContent>
                        </TimelineItem>
                        
                    </Timeline>
                    <Box>
                        bio
                        <Box >

                    <Fab onClick={handleEdit} size="10px" color="black" aria-label="edit" >
                    {/* <IconButton 
                        size="small" 
                        aria-label="edit" 
                        sx={{border: "1px solid grey", borderRadius: 1}}
                        >
                        <EditIcon sx={{ fontSize: "8px" }} />
                        
                    </IconButton> */}
                   
                            <BorderColorIcon fontSize="small"
                            sx={{ mr: 1, padding:'200', color: '#1976D2' }}
                            /> 
      
                    </Fab>
                            </Box>
                    </Box>
                </Box>
                <Box flex={4} p={2}>
                <Grid item xs={5.5} justifyContent="center">
                <Paper sx={paperStyle} >
                     
                     <Box>
                      {/* {posts.filter( (post)=> {
                            return (post.user_id)
                        }).map( (post)=>{
                                return <UserPost key={post.id} post={post} />
                        })} */}
                    </Box>
                         <Card sx={{ }}>
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: '#1976D2' }} aria-label="recipe">
                                    R
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="erik"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="20%"
                                image="/static/images/cards/paella.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                            
                            </CardActions>
                            
                        
                        </Card>
                    {/* </Box> */}
                </Paper>
            </Grid>
                </Box>
                <Box flex={1} p={2}>
                    hi
                </Box>
            </Stack>
        </Box>

    );
}
    

    
export default ProfilePage;
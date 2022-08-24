import * as React from 'react';
import { useState , useEffect } from 'react';
import { Box, Grid, Paper, Typography, Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Link} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import CreatePost from "./CreatePost.js"
import Home from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import UserPost from "./UserPost.js"
import CycloneIcon from '@mui/icons-material/Cyclone';

// import { Stack } from '@mui/system';



const paperStyle={
   backgroundColor:'dark',
    // borderRadius: '1px',
    // m:2,
    // p:1,
    // boxShadow: '5px 7px 17px black',
    // marginBottom:"20px",
  }
    
const theme = createTheme({
    palette: {
      mode:'dark',
      primary: {
        main: "#38b3dc",
        light: "#abdef0",
        dark: "#212121",
       
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

function PostFeed({ user}) {
  const [posts, setPosts] = useState([]);
  useEffect( ()=> {
    fetch("/posts")
    .then(r => r.json())
    .then(posts => {
        console.log(posts)
        setPosts(posts)
    })
} , [])
  
    function onSubmit(caption) {
      console.log(caption)

      let formData = { 
           
         
         
          user_id: user.id,
          username: user.username,
          caption: caption,
          
      }


  //   fetch("/posts",{
  //     method: "POST",
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  // })
  // .then(r => r.json())
  // .then(newPost => { 
  //     setPosts(currentPosts => [newPost , ...currentPosts])
  // }
  // )
    }

  
    

    return (
        <ThemeProvider  theme={theme} >

        <CssBaseline />
        <Grid 
        style={{ display: "inline-block", backgroundColor:'black',
    backgroundSize: "cover",
    backgroundAttachment: "fixed-right",
    width: "100%",
    height: "100%",
    
    backgroundRepeat: "no-repeat",
    }}
    >

        <Grid
      
      theme={theme}
      container
      spacing={3}
      alignItems="stretch"
      sx={{color:"white"}}
      >
            <Grid item xs={3.25}>
            <Box       position={'fixed'}>
            {/* <Paper sx={paperStyle}> */}
            <Typography variant="h6"></Typography>
            <Divider sx={{mt:2, mb:10, mr:-20}}/>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/profile">
            {/* <Link href="/profile" color="inherit" underline="none"><PersonIcon /></Link> */}
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
            </Box>
      </Grid>
            <Grid item xs={5.5} justifyContent="center">
                <Paper sx={paperStyle} >
                         <Card sx={{ bgcolor:'black'}}>
                            <CardHeader
                                // // avatar={
                                  // // <Avatar sx={{ bgcolor: '#1976D2' }} aria-label="recipe">
                                  
                                  //   <CycloneIcon/>
                                  // {/* </Avatar>
                                // } */}
                                justifyContent="center"
                                title="News Feed"
                                subheader="Welcome to Social Space"
                                
                                />
                         
                      
                     
                            
                        
                        </Card>
                     <Box>
                      {posts.map( (post)=>{
                        return <UserPost key={post.id} post={post} />
                              })}
                    </Box>
                              <CreatePost user={user}/> 
                    
                                
                    {/* </Box> */}
                </Paper>
            </Grid>

            <Grid item xs={3.25}>
                 <Box       position={'fixed'}>             
                      <Divider sx={{mt:2, mb:2, ml:5, mr:-10}}/>                                 
                    <Typography variant="h4">
                      <IconButton sx={{size:"large"}}>                  
                        <GroupIcon
                          sx={{mr:2, ml:20, }} 
                          />
                          Friends
                      </IconButton>
                    </Typography>
                  </Box>
            </Grid>
        
        </Grid>
                          </Grid>
    </ThemeProvider>
    );
}


export default PostFeed;
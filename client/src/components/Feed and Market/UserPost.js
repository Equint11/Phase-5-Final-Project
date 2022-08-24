import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox';


const theme = createTheme({
    palette: {
      mode:'dark',
      primary: {
        main: "#38b3dc",
        light: "#abdef0",
        dark: "#BDBDBD",
       
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


function UserPost( { post } ) {
    
  
  return (
    <ThemeProvider  theme={theme} >


        <CssBaseline />
    <Card sx={{boxShadow: '1px 1px 5px black'}}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: '#1976D2' }} aria-label="recipe">
                {post.user.username}
            </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={`${post.user.fullname} (${post.user.username})`}
            subheader={post.created_at}
            />
        <CardMedia
            component="img"
            sx={{ m: 'auto', height: 500, width: 700 }} 
            image={`http://localhost:4000/${post.image}`}
            alt="image"
            />
        <CardContent>
          <Typography variant="body1" color="white">
                {post.caption}
             </Typography>
        </CardContent>
        <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
           <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'#1976D2'}} />} />
            {/* <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            /> */}
            </IconButton>
           <IconButton aria-label="share">
            <ShareIcon />
           </IconButton>
        
         </CardActions>
                            
                        
                       </Card>
            </ThemeProvider>
  );
}

export default UserPost;
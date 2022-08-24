import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';




function UserPost( { post } ) {
  
  return (
    <Card sx={{ }}>
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
            title={post.user.username}
            subheader={post.created_at}
        />
        <CardMedia
            component="img"
            height="20%"
            image={`http://localhost:4000/${post.image}`}
            alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="black">
                {post.caption}
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
  );
}

export default UserPost;
import * as React from 'react';
// import { useState , useEffect } from 'react';
import { Box, Grid, Paper, Typography, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';




const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4,
    
}
const theme = createTheme({
    palette: {
      mode:'dark',
      primary: {
        main: "#38b3dc",
        light: "#abdef0",
        dark: "#00a4d7",
       
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

function Market() {
  
    

    return (
        <ThemeProvider  theme={theme} >

        <CssBaseline />
        <Grid
            theme={theme}
            container
            spacing={3}
            alignItems="stretch"
            sx={{color:"white"}}
            >
            <Grid item xs={3.25} >
            </Grid>

            <Grid item xs={5.5} justifyContent="center">
                <Paper sx={paperStyle} >
                    {/* <CreatePost onSubmit={onSubmit}/> */}
                    <Box>
                        {/* {posts.filter( (post)=> {
                            return friendsIdsIncludingMe.includes(post.user_id)
                        }).map( (post)=>{
                            return <UserPost key={post.id} post={post} />
                        })} */}
                    </Box>
                </Paper>
            </Grid>
            
            <Grid item xs={3.25}>
                <Paper sx={paperStyle}>
                    <Typography variant="h4">Friends</Typography>
                    <Divider sx={{mt:2, mb:2}}/>
                    {/* <List>
                        {friendships.map(friend => {
                            return <ListItem sx={{justifyContent: 'space-between'}} key={friend.id}>
                            <Box sx={{display:'flex', alignItems: 'center'}}>
                            <Avatar></Avatar>
                            <Typography variant="h6" sx={{p:2}}> placeholder ="Search Social Space..." </Typography>
                            </Box> 
                            </ListItem>
                        })}
                    </List> */}
                </Paper>
            </Grid>
        
        </Grid>
    </ThemeProvider>
    );
}

export default Market
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {  Favorite, MoreVert, Share } from '@mui/icons-material';

const Feed = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
            setPosts(res.data);
        }).catch(err=>{
            console.log(err);
        })
    });
  return (
    <Box sx={{backgroundColor:"white"}} flex={4} p={2}>
        <Card sx={{ maxWidth: 900,boxShadow:15}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
  
    </Card>
    </Box>
  )
}

export default Feed
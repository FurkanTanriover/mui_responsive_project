import { Home, ModeNight, Person, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = (props:{mode:any,setMode:any}) => {
  return (
      console.log(props.mode),
    <Box sx={{display:{xs:"none",sm:"block"}}} flex={1} p={2}>
        <Box sx={{position:"fixed",width:"5%"}} mb={3} >
        <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                <ListItemText primary="homepage"/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
                <ListItemIcon>
                    <Store/>
                </ListItemIcon>
                <ListItemText primary="marketplace"/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <ListItemText primary="friends"/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
                <ListItemText primary="settings"/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
                <ListItemIcon>
                    <ModeNight/>
                </ListItemIcon>
                <Switch defaultChecked onChange={
                    e=>props.setMode(props.mode==="light"?"dark":"light")} />

            </ListItemButton>
        </ListItem>
      </List>
        </Box>
    </Box>
    
  )

}

export default Sidebar
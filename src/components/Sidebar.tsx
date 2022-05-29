import { Home, ModeNight, Person, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{backgroundColor:"white"}} flex={1} p={2}>
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
                <Switch defaultChecked />

            </ListItemButton>
        </ListItem>
      </List>
    </Box>
    
  )

}

export default Sidebar
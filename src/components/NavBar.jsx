import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import React from 'react'

export const NavBar = () => {
  return (
    <>
      <Paper sx={{ width: 320, maxWidth: '100%', minHeight: "100%" }} elevation={3}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              {/* <ContentCut fontSize="small" /> */}
            </ListItemIcon>
            <ListItemText>Home</ListItemText>  
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Lead Management</ListItemText>           
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              {/* <ContentPaste fontSize="small" /> */}
            </ListItemIcon>
            <ListItemText>Title</ListItemText>            
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText>Title</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  )
}

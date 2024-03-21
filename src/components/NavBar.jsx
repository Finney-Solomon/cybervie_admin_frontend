import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, ListItemIcon, MenuItem, MenuList, Paper, Typography } from '@mui/material';

export const NavBar = ({ userType }) => {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%', minHeight: '100%' }} elevation={3}>
      <MenuList>
        <MenuItem component={Link} to="/">
          <ListItemIcon>{/* Icon component */}</ListItemIcon>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <Divider />
        {userType === 'admin' && (
          <>
          
            <MenuItem component={Link} to="/lead-management">
              <ListItemIcon>{/* Icon component */}</ListItemIcon>
              <Typography variant="inherit">Lead Management</Typography>
            </MenuItem>
            <Divider />
          </>
        )}
        <MenuItem component={Link} to="/batch">
          <ListItemIcon>{/* Icon component */}</ListItemIcon>
          <Typography variant="inherit">Batch Management</Typography>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/title2">
          <ListItemIcon>{/* Icon component */}</ListItemIcon>
          <Typography variant="inherit">Title 2</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

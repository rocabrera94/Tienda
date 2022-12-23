


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import {Link as RouterLink} from 'react-router-dom'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 0 }}>
        TIENDA
      </Typography>
      <Divider />
      <List >
          <ListItem  disablePadding sx={{display:'flex', flexDirection:'column'}}>
            
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/' component={RouterLink} sx={{textDecoration:'none', color:'black'}} marginX={1}>
                INICIO 
              </Link>
            </ListItemButton>
            
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/mensclothing' sx={{textDecoration:'none', color:'black'}} component={RouterLink} marginX={1}>
                HOMBRE
              </Link>
            </ListItemButton>
            
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/jewelery' sx={{textDecoration:'none', color:'black'}} component={RouterLink} marginX={1}>
                JOYERIA
              </Link>
            </ListItemButton>
            
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/electronics' sx={{textDecoration:'none', color:'black'}} component={RouterLink} marginX={1}>
                ELECTRONICA
              </Link>
            </ListItemButton>
          
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to='/womensclothing' sx={{textDecoration:'none', color:'black'}} component={RouterLink} marginX={1}>
                MUJER
              </Link>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TIENDA 
          </Typography>
          <Box sx={{ display:{ xs: 'none', sm: 'block' } }}>
            
          
            <Link to='/' component={RouterLink} sx={{textDecoration:'none', color:'white'}} marginX={2}>
              INICIO 
            </Link>
          
          
            <Link to='/mensclothing' sx={{textDecoration:'none', color:'white'}} component={RouterLink} marginX={2}>
              HOMBRE
            </Link>
          
          
            <Link to='/jewelery' sx={{textDecoration:'none', color:'white'}} component={RouterLink} marginX={2}>
              JOYERIA
            </Link>
          
          
            <Link to='/electronics' sx={{textDecoration:'none', color:'white'}} component={RouterLink} marginX={2}>
              ELECTRONICA
            </Link>
          
          
            <Link to='/womensclothing' sx={{textDecoration:'none', color:'white'}} component={RouterLink} marginX={2}>
              MUJER
            </Link>
          
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

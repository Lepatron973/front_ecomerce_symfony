import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from '@mui/material';
import { checkToken } from '../../lib/Authenticator';


export default function Navbar() {
  const [status, setStatus] = React.useState(localStorage.getItem('user'))

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=> window.location = '/register'}>Inscription</MenuItem>
      <MenuItem onClick={()=> window.location = '/login'}>Connexion</MenuItem>
    </Menu>
  );
  const anonymousMenu = (
      <>
         <IconButton size="small" aria-label="show 4 new mails" color="inherit">
            <Link href="/register" color="inherit" 
            style={{textDecoration:'none'}}
            >
               Inscription
            </Link>
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link href="/login" color="inherit" >
                    Connexion
            </Link>
            </IconButton>
      </>
    )
  const connectedMenu =(
        <>
           <IconButton size="small" aria-label="show 4 new mails" color="inherit">
              <Link href="/profile" color="inherit" 
              style={{textDecoration:'none'}}
              >
                 Profile
              </Link>
              </IconButton>
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={()=>{
                  localStorage.setItem('user',null)
                }}
              >
                <Link href="/" color="inherit" >
                      Déconnexion
              </Link>
              </IconButton>
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Link href="/cart" color="inherit" >
                  <ShoppingCartIcon />
              </Link>
              </IconButton>
        </>
      )
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <SellIcon />
        </IconButton>
        <p>Catalogue</p>
      </MenuItem>
      <MenuItem
       sx={{
        display:(status != "null"  ? 'flex':'none'),
        flexDirection:'column',
        alignItems:'flex-start',
        padding:0}}>
      
      <MenuItem onClick={()=>window.location = '/profile'}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={()=>window.location = '/profile'}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ShoppingCartIcon />
        </IconButton>
        <p>Panier</p>
      </MenuItem>
      <MenuItem  onClick={()=>{
          localStorage.setItem('user',null)
      }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
        <p>Déconnexion</p>
      </MenuItem>
      </MenuItem>
      <MenuItem
      onClick={handleProfileMenuOpen}
      sx={{
        display:(status == "null"  ? 'flex':'none')
      }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          
            <LockOpenIcon />
          
        </IconButton>
        <p>Identification</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <Link href="/" color="inherit" 
          style={{textDecoration:'none'}}
          >
          <video muted autoPlay loop style={{paddingTop:"10px"}}>
            <source src='./imgs/tech.mp4' type="video/mp4" />
          </video>
        </Link>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link href="/products" color="inherit" 
                style={{textDecoration:'none'}}
                >
                    Catalogue
            </Link>
          </IconButton>
           {(status == "null"  ? anonymousMenu : connectedMenu)}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{display: {lg:'none'}}}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
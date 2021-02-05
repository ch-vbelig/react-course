import { AppBar, Button, Menu, MenuItem, ButtonBase, Toolbar, InputBase, IconButton, Avatar, Badge, Typography, Divider  } from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';

const InstButton = withStyles((theme) => ({
    root: {
        fontFamily: "ANGEL TEARS",
        fontStyle: "oblique",
        textTransform: 'none',
        fontSize: 24,
        
        '&:hover': {
            color: theme.palette.grey[600],
            backgroundColor: "#ffffff",
        },

    }
})) (Button);

const useStyles = makeStyles((theme) => ({
    appBar: {
        color: theme.palette.grey[900],
        backgroundColor: "#ffffff",
    },
    search: {
        color: "#dbdbdb",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        height: "32px",
        border: "solid 1px rgba(var(--b6a,219,219,219),1);",
        backgroundColor: fade(theme.palette.grey[50], 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.grey[50], 0.25),
        },
        marginLeft: 0, 
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        fontSize: "16px",
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1., .5, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
              color: theme.palette.grey[700],
            width: '20ch',
          },
        },
      },
      icons: {
          color: "#000000"
      },
      small: {
          width: theme.spacing(4),
          height: theme.spacing(4),
      },
      menu: {
          transform: `translateY(${theme.spacing(5)}px)`

      },
      menuItemIcon: {
          marginRight: theme.spacing(2),
      }
}));




const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

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
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menu}
    >
        <MenuItem onClick={handleMenuClose}> 
            <AccountCircleOutlinedIcon fontSize="small" className={classes.menuItemIcon} /> 
            <Typography>
                Профиль
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}> 
            <BookmarkBorderIcon fontSize="small" className={classes.menuItemIcon} /> 
            <Typography>
                Сохраненное
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}> 
            <SettingsIcon fontSize="small" className={classes.menuItemIcon} /> 
            <Typography>
                Настройки
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}> 
            <FlipCameraAndroidIcon fontSize="small" className={classes.menuItemIcon} /> 
            <Typography>
                Переключение между аккаунтами
            </Typography>
        </MenuItem>
        <Divider /> 
        <MenuItem onClick={handleMenuClose}> 
            <Typography>
                Выйти
            </Typography>
        </MenuItem>
        
      </Menu>
  );

    return(
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <ButtonBase centerRipple>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                </ButtonBase>

                <div style={{flexGrow: "1"}} />


                <div className={classes.search}>
                <div className={classes.searchIcon}>
              <SearchIcon fontSize="small"/>
            </div>
            
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div style={{flexGrow: "1"}} />
          
          <IconButton className={classes.icons}>
            <HomeIcon fontSize="large"/>
          </IconButton>
          <IconButton className={classes.icons}>
              <Badge badgeContent={1} color="secondary">
              <TelegramIcon fontSize="large"/>
              </Badge>  
          </IconButton>
          <IconButton className={classes.icons}>
            <ExploreIcon fontSize="large"/>
          </IconButton>
          <IconButton className={classes.icons}>
            <FavoriteBorderIcon fontSize="large"/>
          </IconButton>

        <IconButton onClick={handleProfileMenuOpen}>
            <Avatar className={classes.small} src="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg"/>
        </IconButton>

        {renderMenu}
        
          
                

            </Toolbar>
                
            
        </AppBar>
    );
}


export default Header;
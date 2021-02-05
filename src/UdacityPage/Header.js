import React from 'react';
import {makeStyles} from '@material-ui/core';
import { Button, AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { cyan } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
        backgroundColor: cyan[700],
        '&:hover': {
            backgroundColor: cyan[700],
            
          },
        color: "#ffffff",
        width: "300px",
    }
}))(Button);

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.grey[50],
    },
    menuIcon: {
        color: theme.palette.info.light,
        marginRight: theme.spacing(2),
    },
    courseTitle: {
        color: theme.palette.grey[700],
    }

}));

const Header = () => {
    const classes = useStyles();
    return(
       <AppBar position="static" className={classes.appBar}>
           <Toolbar>
               <IconButton className={classes.menuIcon}>
                    <MenuIcon />
               </IconButton>
               
               <Grid container direction="column">
                    <Typography variant="subtitle1" className={classes.courseTitle}>
                        Your Latest Activity
                    </Typography>
                    <Typography variant="subtitle2" className={classes.courseTitle}>
                        Lesson 1: Building Layouts: Part 1
                    </Typography>

               </Grid>

               <ColorButton variant="contained">
                   Resume Lesson 1
               </ColorButton>
               
                

           </Toolbar>
           
       </AppBar>
    );
}

export default Header;
import { Grid, CardMedia, Paper, makeStyles, Divider, Typography, Button, withStyles, Slider} from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { cyan } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    paper: {
        margin: theme.spacing(4),
        color: theme.palette.grey[700],
    },
    cover: {
        
        height: "100%",
    },
    titleGrid:{
        paddingLeft: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(6),
    },
    
    continueButton: {
        marginBottom: theme.spacing(1),
        color: cyan[800],
        borderColor: cyan[800],
    }
   
}));
    

const PrettoSlider = withStyles({
    root: {
        width: 100,
        color: '#52af77',
        height: 8,
    },
    thumb: {
      height: 0,
      width: 0,
      backgroundColor: '#fff',
      border: '0px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


const ContentPaper = () => {
    const classes = useStyles();
    return(
        <Paper elevation={3} className={classes.paper}>
            <Grid container>
                <Grid item xs={8}>
                    <div  className={classes.titleGrid}>
                    <Typography variant="overline" paragraph>
                        Lesson 1
                    </Typography>
                    <Typography variant="h6" paragraph>
                        Building Layouts: Part 1
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Learn how to place layouts on a page to create images, buttons, text on a phone screen
                    </Typography>
                    </div>

                    <div  className={classes.titleGrid}>
                    <Button variant="outlined" className={classes.continueButton}>
                         Continue <ArrowForwardIcon/>
                    </Button>   

                    <Divider />

                    <div style={{display: "flex"}}>
                        <div style={{flex: "1"}}>
                        <PrettoSlider aria-label="pretto slider" defaultValue={20} />
                        </div>
                    
                    
                    <Typography variant="subtitle1" paragraph>
                        45m left
                    </Typography>

                    </div>
                    </div>


                </Grid>

                <Grid item xs={4}>
                    <CardMedia
                        className={classes.cover}
                        image="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg"
                        title="Live from space album cover"
                    />
                </Grid>
                
            </Grid>
            
    
        </Paper>
    );
}

export default ContentPaper;
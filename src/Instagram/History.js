import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles( (theme)=> ({
    history: {
        marginRight: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    historyMaker: {
        marginTop: theme.spacing(0.4),
        color: theme.palette.grey[900],
    },
    avatarWrapper: {
        height: theme.spacing(7.85),
        width: theme.spacing(7.85),
        borderRadius: theme.spacing(4.1),
        background: "linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(255,152,50,1) 0%, rgba(255,0,108,1) 77%)"
        
    },
    avatarWhiteWrapper: {
        height: theme.spacing(7.15),
        width: theme.spacing(7.1),
        transform: `translate(${theme.spacing(0.25)}px, ${theme.spacing(0.25)}px)`,
        padding : "0px",
        borderStyle: "solid",
        borderWidth: "1px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: theme.spacing(3.6),
        

    },
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
    },


}));

const History = () => {
    const classes = useStyles();
    return(
        <div  className={classes.history}>
            <div className={classes.avatarWrapper}>
                <div className={classes.avatarWhiteWrapper}>
                    <Avatar className={classes.avatar} src="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg" />
                </div>

            </div>
            
            <Typography className={classes.historyMaker} variant="caption" align="center">ch_belig</Typography>
        </div>
    )
}

export default History;
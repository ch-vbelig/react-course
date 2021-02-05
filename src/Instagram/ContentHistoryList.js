import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import React from 'react';
import History from './History';

const useStyles = makeStyles( (theme)=> ({
    root: {
        color: "#dbdbdb",
        borderRadius: theme.shape.borderRadius,
        maxWidth: "616px",
        border: "solid 1px rgba(var(--b6a,219,219,219),1);",
        backgroundColor: fade(theme.palette.grey[50], 0.25),
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        display: "flex",
        overflow: "hidden",
        backgroundColor: theme.palette.grey[50],
    },
    paddingStead:{
        minWidth: theme.spacing(2),
        height: "auto",
    }


}));

const ContentHistoryList = () => {
    const classes = useStyles();
    return(
        <Grid container item direction="column" spacing={1}>
            <Grid item >
            <div className={classes.root}>
            <div className={classes.paddingStead} />

            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />
            <History />


            

        </div>

            </Grid>
        
        </Grid>
        
    )
}

export default ContentHistoryList;
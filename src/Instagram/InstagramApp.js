import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Content from './Content';
import ContentHistoryList from './ContentHistoryList';
import ContentRecomendation from './ContentRecomendation';
import Header from './Header';


const useStyles=makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
    },
    content: {
        paddingLeft: "120px",
    },
    item: {
        marginBottom: theme.spacing(3),
    }

}));

const InstagramApp = () =>{
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>

            <Grid xs={12} item className={classes.item}>
                <Header />
            </Grid>

            <Grid sm={1} md={2} className={classes.content}/>

            <Grid sm={10} md={5} container item direction="column" spacing={4} >
                <Grid item>
                    <ContentHistoryList />
                </Grid>
                
                <Grid item>
                    <Content />
                </Grid>
                
            </Grid>

            

            <Grid sm={0} md={4} item >
                <ContentRecomendation />
            </Grid>
            <Grid sm={1} md={1} />

            
        </Grid>
        
    );
}


export default InstagramApp;
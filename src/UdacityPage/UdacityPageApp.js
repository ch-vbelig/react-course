import { Grid } from '@material-ui/core';
import React from 'react';
import Content from './Content';
import Header from './Header';


const UdacityPageApp = () => {
    

    return (
    <Grid item container direction="column">
        <Grid container item >
            <Header />
        </Grid>

        <Grid item>
            <Content />
        </Grid>

    </Grid>);
}

export default UdacityPageApp;
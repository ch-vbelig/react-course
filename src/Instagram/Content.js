import { Grid } from '@material-ui/core';
import React from 'react';
import ContentHistoryList from './ContentHistoryList';
import ContentPhoto from './ContentPhoto';


const Content = () => {
    return(<Grid item container direction="column" spacing={8}>
        <Grid item>
            <ContentPhoto />            
        </Grid>

        <Grid item>
            <ContentPhoto />            
        </Grid>
    </Grid>)
}

export default Content;
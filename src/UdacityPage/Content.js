import { Grid } from '@material-ui/core';
import React from 'react';
import ContentPaper from './ContentPaper'


const Content = () => {
    return(
        <Grid container>
    
            <Grid sm={0} md={2}/>

            <Grid sm={12} md={8}>
                <ContentPaper />
                <ContentPaper />
            </Grid>

            <Grid sm={0} md={2}/>
            
        </Grid>
            
    );
}

export default Content;
import React from 'react';
import {Grid} from '@material-ui/core';
import Header from './Header';
import Content from './Content';

function CourseApp() {
  return (
    <Grid container item direction="column">
        <Grid item>
          <Header/>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
    </Grid>
  );
}

export default CourseApp;

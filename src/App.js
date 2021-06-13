import React from 'react';
import {Grid} from '@material-ui/core';
import CourseApp from './ReactCourse/CourseApp';
import UdacityPageApp from './UdacityPage/UdacityPageApp';
import InstagramApp from './Instagram/InstagramApp';
import RouterIndex from './RouterExample/RouterIndex';
import ReduxIndex from './ReduxCourse/ReduxIndex';
import LabIndex from './CGLabWork2/LabIndex';
import GymIndex from './UIRSCalendar/GymIndex';
import ReduxToolkitIndex from './ReduxToolkit/ReduxToolkitIndex';

function App() {
  return (
    <Grid container>

      <Grid item container>
        <GymIndex />
      </Grid>
{/*
      <Grid item container>
        <LabIndex />
      </Grid>

      <Grid item container>
        <ReduxToolkitIndex />
      </Grid>

      <Grid item container>
        <ReduxIndex />
      </Grid>
      
      <Grid item container>
        <RouterIndex />
      </Grid>
    
      <InstagramApp />
      <UdacityPageApp />
      <CourseApp />
      */}
      
    </Grid>
  );
}

export default App;

import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Morph from './Morph';
import Trajectory from './Trajectory';
import { increment, decrement, test } from './redux/CounterSlice';
import Masking from './Masking';


const LabApp = () => {
    const page1 = "morfing"
    const page2 = "trajectory"
    const page3 = "mask"

    const [page, setPage] = useState(page1)

    return(    
        <Grid container>
            <Grid item xs={12}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => {setPage(page1)}}>One</Button>
                    <Button onClick={() => {setPage(page2)}}>Two</Button>
                    <Button onClick={() => {setPage(page3)}}>Three</Button>
                </ButtonGroup>
            </Grid>

            <Grid xs={2} item /> 

            <Grid xs={8} item container>
                {page === page1 && <Morph />}
                {page === page2 && <Trajectory />}
                {page === page3 && <Masking />}
            
            </Grid>

            <Grid xs={2} item /> 
        </Grid>
    );
}


export default LabApp;
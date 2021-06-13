import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import Header from "./components/Header"
import MyCalendar from "./components/MyCalendar";




const useStyles = makeStyles((theme) => ({
    gridItemStat: {
        padding: 24
    },
    gridItemCalendar: {
        padding: 24
    },
}));

const MainPage = () => {
    const classes = useStyles()
    return(
        <Grid container direction="column" >
            <Grid item>
                <Header />
            </Grid>

            <Grid item container alignContent="center" className={classes.gridItemCalendar}>
                <Grid xs={2}/>
                <Grid item xs={8}>
                    <MyCalendar />
                </Grid>
                <Grid xs={2}/>
                {/*<Grid item container xs={0} sm={4} className={classes.gridItemStat}>
                    <Grid item xs={12}>
                        <RoomDeployment />
                    </Grid>
    </Grid>*/}
                

            </Grid>

        </Grid>
    )
}


export default MainPage
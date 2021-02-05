import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
    },

}));

const ContentRecomendation = () => {
    const classes = useStyles();

    return(
    <div>
         <Avatar className={classes.avatar} src="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg" />

    </div>);
}

export default ContentRecomendation;
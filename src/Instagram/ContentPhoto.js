import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#000000",
        width: "616px",
        backgroundColor: theme.palette.grey[50],
    },
    avatarWrapper: {
        height: theme.spacing(4.85),
        width: theme.spacing(4.85),
        borderRadius: theme.spacing(2.5),
        background: "linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(255,152,50,1) 0%, rgba(255,0,108,1) 77%)"
        
    },
    avatarWhiteWrapper: {
        color: "#ffffff",
        height: theme.spacing(4.15),
        width: theme.spacing(4.1),
        transform: `translate(${theme.spacing(0.25)}px, ${theme.spacing(0.25)}px)`,
        padding : "0px",
        borderStyle: "solid",
        borderWidth: "1px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: theme.spacing(2.6),
        

    },
    avatar: {
        height: theme.spacing(4.1),
        width: theme.spacing(4.1),
    },
    avatarMini: {
        height: theme.spacing(3),
        width: theme.spacing(3),
        marginRight: theme.spacing(1),
    },

    cardContent: {
        paddingTop: 0,
    }
}));

const ContentPhoto = () => {
    const classes = useStyles();
    
    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader
        avatar={
            <div className={classes.avatarWrapper}>
                <div className={classes.avatarWhiteWrapper}>
                    <Avatar className={classes.avatar} src="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg" />
                </div>
            </div>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="ch_belig"
      />
      <CardMedia
        style={{height: "480px"}}
        image="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg"
       
      />
      
      <CardActions>
      
            <FavoriteBorderIcon fontSize="large"/>
            <ModeCommentOutlinedIcon fontSize="large" />
            <TelegramIcon fontSize="large"/>

            <div style={{flex: "1"}} />

            <BookmarkBorderIcon fontSize="large" />
      </CardActions>

      <CardContent className={classes.cardContent}>
          <div style={{display: "flex"}}>

            <Avatar className={classes.avatarMini} src="https://w-dog.ru/wallpapers/0/5/437092908213535/android-3d-vizualizacii-makro-kamni-zemlya-ryukzak.jpg" />
            <Typography variant="body1">
             Нравится <b>ch_belig</b> и <b>еще 5 783 604</b>
            </Typography>

          </div>
        
      </CardContent>
    </Card>
    );
}

export default ContentPhoto;
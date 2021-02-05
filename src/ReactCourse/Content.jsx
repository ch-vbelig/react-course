import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard';
import coffeMakerList from "./constants";


const Content = () => {

    const getCoffeMakerCard = (coffeMakerObj) =>{
        const {title, subtitle, avatarSrc, imgSrc, description} = coffeMakerObj
        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard 
                    title={title} 
                    subtitle={subtitle}
                    avatarSrc={avatarSrc}
                    imgSrc={imgSrc}
                    description={description}/>
            </Grid>);
            
    }

    return(

        <Grid container spacing={2}>
            
            {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
                
            

        </Grid>
        
    );

};

export default Content;


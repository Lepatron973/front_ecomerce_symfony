import { Box, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    
    return (
        <Box className='section'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                padding: "10% 0"
            }}
         > 
         <Box
         sx={{
            backgroundColor:'white',
            borderRadius:'7px',
            padding:'20px'
         }}
         >
            <Typography variant='h4' sx={{
                 textAlign:'center',
                  margin:0,
                  marginBottom: "30px" 
                  }}>
                Qui sommes nous</Typography>
            <Typography className='container'
            variant='body1'
            >
                Bienvenue sur notre site de vente de produits informatiques ! 
                Notre société est située à Metz et a pour objectif de faciliter l'accès à l'informatique aux populations qui en ont le plus besoin, notamment dans des endroits reculés du monde.
                Nous proposons une large gamme de composants et de produits informatiques tels que des cartes graphiques, des ordinateurs, des moniteurs et bien d'autres encore, à des prix abordables.
               

            </Typography>
         </Box>
        </Box>
    );
};
 const styles = {
    title : {
        textAlign:'center'
    }

 }
export default AboutUs;
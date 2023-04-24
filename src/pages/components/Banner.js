import { Box, Button, Typography } from '@mui/material';
import Image from 'mui-image';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router';


const Banner = () => {
    const brandName = "Computer Shop";
    const navigate = useNavigate()
    return (
        <div>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column'
                }} 
            >
                <Image
                    src="./imgs/banner3.jpg"
                    height='90vh'
                />
                <Box
                sx={{
                    alignSelf:'center',
                    justifySelf:'center',
                    position:'absolute',
                    top:'45vh',
                    borderRadius:'7px',
                    backgroundColor:'white',
                    padding:3
                }}>
                    <Typography 
                    variant='h5'
                    >
                        Des produits simples et efficaces à prix réduits
                    </Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        padding:3
                    }}>
                    <Button
                     variant="contained"
                     size='large'
                     endIcon={<SendIcon />}
                    onClick={()=>{
                        navigate('/products')
                    }}
                     >
                    Découvrir
                    </Button>
                    </Box>
                    
                </Box>
            </Box>
        </div>
    );
};
const styles = {
    imageContainer:{
        position:'relative'
    },
    title: {
        color:'red',
        position:'absolute',
        top:'40%',
        left:'45%'
    }
}
export default Banner;
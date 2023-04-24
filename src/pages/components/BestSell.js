import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import { authRequest, publicRequest } from '../../lib/CallApi';


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];


export default function BestSell() {
  const [bestProduct, setbestProduct] = React.useState()
  const getProducts = async ()=>{
    let product = await publicRequest('products')
    setbestProduct(product);
  }
  const addToCart = async (productId)=>{
    let res = await authRequest('carts/'+productId)
    console.log(res)
  }
  React.useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
        
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, borderTop:"1px solid black" }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Nos meilleurs Ventes
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {bestProduct?.map((tier,index) => (
           
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.id}
              xs={12}
              sm={tier.name === 'Enterprise' ? 12 : 6}
              md={4}
              sx={
                {
                  'display':(index < 3 ? "block":"none")
                }
              }
            >
              <Card>
                <CardHeader
                  title={"Top"}
                  subheader={tier.name}
                  titleTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                <CardMedia
                    component="img"
                    image={tier.photo}
                    alt="random"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.price}€
                    </Typography>
                  </Box>
                  
                    
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"

                      >
                        {tier.description}
                      </Typography>
                    
                  
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={'contained'}
                    onClick={()=>{
                      addToCart(tier.id)
                    }}
                  >
                    {'ajouter au panier'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </React.Fragment>
  );
}
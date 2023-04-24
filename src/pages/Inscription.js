import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';

const theme = createTheme();

export default function Inscription() {
  
  const navigate = useNavigate();
  const [user, setUser] = React.useState({})
  const [alertMessage, setalertMessage] = React.useState({value:null,code:false,status:false})
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    Object.values(user).map(value=>{
      if(value == ""){
        return false
      }
    })
    fetch(process.env.REACT_APP_SERVER_URL+"/register",{
          method:"POST",
          body:JSON.stringify(user),
          
        })
        .then(res=>{
          
            let response = res.json()
            response.status = res.status;
            
            return response;
          
        })
        .then(res=>{
          console.log(res)
          if(res.message){
            setalertMessage({
              ...alertMessage,
              status:true,
              code:true,
              value: res.message
            })
            setUser({
              login:'',
              lastname:'',
              firstname:'',
              password:'',
              email:''
            })
          }else{
            setalertMessage({
              ...alertMessage,
              status:true,
              code:false,
              value: res.error
            })
          }
          
          setTimeout(()=>{
            setalertMessage({
              ...alertMessage,
              status:false,
              code:false,
              value: null
            })
          },5000)
          
        })
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Alert 
        severity={(alertMessage.code ? "success" : 'error')} 
        sx={{
          margin:"10px",
          display:(alertMessage.status ? 'flex' : 'none')
          }}>
            {alertMessage.value}
          </Alert>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="Nom"
                  onChange={(e)=>{
                    setUser({
                      ...user,
                      lastname: e.target.value
                    })
                  }}
                  value={user?.lastname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Prénom"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  autoFocus
                  onChange={(e)=>{
                    setUser({
                      ...user,
                      firstname: e.target.value
                    })
                  }}
                  value={user?.firstname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="pseudo"
                  name="login"
                  autoComplete="pseudo"
                  onChange={(e)=>{
                    setUser({
                      ...user,
                      login: e.target.value
                    })
                  }}
                  value={user?.login}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{
                    setUser({
                      ...user,
                      email: e.target.value
                    })
                  }}
                  value={user?.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mots de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{
                    setUser({
                      ...user,
                      password: e.target.value
                    })
                  }}
                  value={user?.password}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e)=>{
                handleSubmit(e)
              }}
            >
              inscription
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="" variant="body2" onClick={()=>{
                    navigate('/login')
                }}>
                  Vous avez déjà un compte? Connectez-vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

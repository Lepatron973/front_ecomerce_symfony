import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Tab,
  Tabs,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ListItemAvatar, 
  Avatar
} from "@mui/material";
import { authRequest } from "../lib/CallApi";

const styles = {
  root: {
    paddingTop: "32px",
    paddingBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: "16px",
    marginTop:"1em"
  },
  title: {
    fontWeight: 600,
    marginBottom: "24px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "16px",
  },
  label: {
    minWidth: "100px",
    fontWeight: 600,
  },
  value: {
    flex: 1,
  },
  tabs: {
    width: "100%",
    marginTop: "24px",
    marginBottom: "24px",
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  table: {
    minWidth: 650,
  }
};


  
 
function Profile() {

   
      const [user, setuser] = React.useState()
      const [orders, setorders] = React.useState([])
      const getUser = async()=>{
        let res = await authRequest('users',null,'GET');
        setuser(res)
      }
      const getOrders = async()=>{
        let res = await authRequest('orders',null,'GET');
        setorders(Object.values(res))
      }
      React.useEffect(() => {
       getUser();
       getOrders();
      }, [])


// Calcule le total des prix des produits

 const [value, setValue] = useState(0)
  return (
    <Container maxWidth={value ? "md":"sm"} sx={styles.root}>
      <Typography variant="h4" gutterBottom sx={styles.title}>
        Mon profile
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={styles.row}>
          <Typography variant="subtitle1" sx={styles.label}>
            Pseudo :
          </Typography>
          <Typography variant="subtitle1" sx={styles.value}>
            {user?.login}
          </Typography>
        </Box>
        <Box sx={styles.row}>
          <Typography variant="subtitle1" sx={styles.label}>
            Email :
          </Typography>
          <Typography variant="subtitle1" sx={styles.value}>
            {user?.email}
          </Typography>
        </Box>
        <Divider />
        <Tabs value={value} sx={styles.tabs}>
          <Tab label="Informations personnelles" onClick={()=>{
            setValue(0);
          }}/>
          <Tab label="Mes commandes" onClick={()=>{
            setValue(1);
          }}/>
        </Tabs>
        {value === 0 && (
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Informations personnelles
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nom : {user?.firstname}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Prénom : {user?.lastname}
            </Typography>
          </Box>
        )}
        {value === 1 && (
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Mes commandes
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={styles.table} aria-label="Commandes">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Prix total</TableCell>
                    <TableCell>Produits</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                  {orders.map((order,index)=>(
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {order.order.id}
                      </TableCell>
                      <TableCell>{order.order.creationDate.slice(0,10)}</TableCell>
                      <TableCell>{order.order.totalPrice}€</TableCell>
                      <TableCell>
                        <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell>Prix</TableCell>
                                
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {order.products.map((product,index2) => (
                                <TableRow key={index2}>
                                  <TableCell component="th" scope="row">
                                    {product.name}
                                  </TableCell>
                                 
                                  <TableCell>
                                    <ListItemAvatar sx={styles.listItemAvatar}>
                                      <Avatar alt={product.name} src={product.photo} />
                                    </ListItemAvatar>
                                  </TableCell>
                                  <TableCell>{product.price} €</TableCell>
                        
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Container>
  );
  
}

export default Profile;


import React from "react";
import { Container, Typography, Box, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from "@mui/material";
import { authRequest } from "../lib/CallApi";
import { useNavigate } from "react-router";

const styles = {
  root: {
    paddingTop: "32px",
    paddingBottom: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: "16px",
    marginTop: 5
  },
  title: {
    fontWeight: 600,
    marginBottom: "24px",
  },
  listItem: {
    width: "100%",
    marginBottom: "16px",
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  listItemAvatar: {
    minWidth: "80px",
  },
  listItemText: {
    flex: 1,
  },
  listItemPrice: {
    fontWeight: 600,
    minWidth: "80px",
    textAlign: "right",
  },
  total: {
    fontWeight: 600,
    marginTop: "24px",
    textAlign: "right",
  },
};

function Cart() {
  // Les produits dans le panier
  const navigate = useNavigate()
const [cart, setCart] = React.useState({cart:{}})
const getCart = async ()=>{
  let res = await authRequest('carts',null,'GET');
  setCart(res)
}
const order = async ()=>{
  let res = await authRequest("carts/validate");
  if(res){
    navigate(0)
  }
  return res;
}
React.useEffect(() => {
  getCart();
  
}, [])
// Calcule le total des prix des produits
let total = 0;

Object.values(cart.cart).map((product) =>{
  total += product.price * product.quantity;
})
  return (
    <Container maxWidth="sm" sx={styles.root}>
      <Typography variant="h4" gutterBottom sx={styles.title}>
        Mon Panier
      </Typography>
      <Box sx={{ width: "100%" }}>
        <List>
          {Object.values(cart.cart).map((product) => (
            <ListItem key={product.id} sx={styles.listItem}>
              <ListItemAvatar sx={styles.listItemAvatar}>
                <Avatar alt={product.name} src={product.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={product.description}
                sx={styles.listItemText}
              />
              <Typography variant="subtitle1" sx={styles.listItemPrice}>
                ${product.price * product.quantity}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h6" sx={styles.total}>
        Total: ${Math.round(total * 100) / 100}
      </Typography>
      <Button
        variant="contained"
        size='large'
        sx={{margin:2}}
      onClick={()=>{
        order();
      }}
        >
      Commander
      </Button>
    </Container>
  );
}

export default Cart;

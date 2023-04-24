import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { authRequest } from "../lib/CallApi";

const styles = {
  root: {
    marginTop: "2rem",
  },
  title: {
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "1rem",
  },
  submitButton: {
    marginTop: "2rem",
  },
};

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState(0.00);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Envoie du produit au backend ici...
    console.log({ name, description, photo, price });
    await authRequest('products',{ name, description, photo, price })
  };

  return (
    <Container maxWidth="sm" sx={styles.root}>
      <Typography variant="h4" gutterBottom sx={styles.title}>
        Ajouter un produit
      </Typography>
      <Box component="form" sx={styles.form} onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Nom"
          variant="outlined"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          sx={styles.input}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          sx={styles.input}
        />
        <TextField
          id="photo"
          label="Photo (URL)"
          variant="outlined"
          required
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
          sx={styles.input}
        />
        <TextField
          id="price"
          label="Prix"
          variant="outlined"
          required
          type="number"
          value={price}
          onChange={(event) => setPrice(parseFloat(event.target.value))}
          sx={styles.input}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={styles.submitButton}
        >
          Ajouter le produit
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;

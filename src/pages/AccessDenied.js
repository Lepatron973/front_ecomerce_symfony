import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  root: {
    marginTop: "2rem",
  },
  title: {
    marginBottom: "2rem",
  },
  message: {
    marginBottom: "2rem",
  },
  button: {
    marginLeft: "1rem",
  },
};

const AccessDenied = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/login");
  };

  return (
    <Container maxWidth="sm" sx={styles.root}>
      <Typography variant="h4" gutterBottom sx={styles.title}>
        Accès refusé
      </Typography>
      <Typography variant="body1" sx={styles.message}>
        Vous devez être connecté pour accéder à cette page.
      </Typography>
      <Button variant="contained" onClick={handleLogin} sx={styles.button}>
        Se connecter
      </Button>
    </Container>
  );
};

export default AccessDenied;

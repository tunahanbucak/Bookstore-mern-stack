import { Box, Button, Typography, Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Kitap başarıyla silindi.", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Bir hata oluştu.", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <Box>
      <BackButton />
      <Container maxWidth="sm" sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
            fontWeight: "bold",
            textAlign: "center",
            color: "#333333",
          }}>
          Kitap Silme
        </Typography>
        {loading && <Spinner />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            width: "100%",
            maxWidth: 600,
            padding: 4,
            backgroundColor: "#ffffff",
            boxShadow: 3,
            margin: "0 auto",
            overflow: "hidden",
          }}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 4,
              fontWeight: "600",
              color: "#333333",
              textAlign: "center",
              letterSpacing: 0.5,
              opacity: 0.8,
            }}>
            Bu kitabı silmek istediğinizden emin misiniz?
          </Typography>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{
              padding: "16px",
              fontWeight: "600",
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "#d32f2f",
              "&:hover": {
                backgroundColor: "#c62828",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              },
            }}
            onClick={handleDeleteBook}>
            Evet, Sil
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

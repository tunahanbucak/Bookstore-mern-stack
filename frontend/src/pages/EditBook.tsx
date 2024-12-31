import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

export default function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Bir hata oluştu. Lütfen konsolu kontrol edin");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Kitap başarıyla düzenlendi.", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Bir hata oluştu.", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <Box sx={{ background: "#F9FAFB", minHeight: "100vh", padding: "50px" }}>
      <BackButton />
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#333",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}>
        Kitap Bilgilerini Düzenle
      </Typography>
      {loading && <Spinner />}
      <Box
        sx={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          maxWidth: "500px",
          margin: "0 auto",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
              marginBottom: "8px",
              color: "#333",
            }}>
            Başlık
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#E0E0E0",
              },
              "& .MuiOutlinedInput-input": {
                padding: "12px",
                fontSize: "1rem",
              },
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
              marginBottom: "8px",
              color: "#333",
            }}>
            Yazar
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            sx={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#E0E0E0",
              },
              "& .MuiOutlinedInput-input": {
                padding: "12px",
                fontSize: "1rem",
              },
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
              marginBottom: "8px",
              color: "#333",
            }}>
            Yayınlanma Yılı
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            sx={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#E0E0E0",
              },
              "& .MuiOutlinedInput-input": {
                padding: "12px",
                fontSize: "1rem",
              },
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#4C51BF",
            fontSize: "1.125rem",
            fontWeight: "500",
            padding: "12px 24px",
            borderRadius: "10px",
            width: "100%",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#3E46A1",
            },
          }}
          onClick={handleEditBook}>
          Kaydet
        </Button>
      </Box>
    </Box>
  );
}

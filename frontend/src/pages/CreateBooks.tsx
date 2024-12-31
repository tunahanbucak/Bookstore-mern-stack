import { Box, TextField, Typography, Button, Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

export default function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Kitap başarıyla oluşturuldu.", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Bir hata oluştu.", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <Box>
      <BackButton />
      <Container maxWidth="sm" sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#2A2A2A",
            marginBottom: 4,
          }}>
          Kitap Oluştur
        </Typography>
        {loading && <Spinner />}
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: 3,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            padding: 4,
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{ fontSize: "1.125rem", fontWeight: 600, color: "#2A2A2A" }}>
              Başlık
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6200EE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F51B5",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#333333",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{ fontSize: "1.125rem", fontWeight: 600, color: "#2A2A2A" }}>
              Yazar
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6200EE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F51B5",
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{ fontSize: "1.125rem", fontWeight: 600, color: "#2A2A2A" }}>
              Yayınlanma Yılı
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#6200EE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F51B5",
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6200EE",
              color: "#FFFFFF",
              padding: "14px 24px",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "#3F51B5",
              },
            }}
            onClick={handleSaveBook}>
            Kaydet
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

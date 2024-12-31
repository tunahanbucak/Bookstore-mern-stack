import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: string;
  updatedAt: string;
}

export default function ShowBook() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get<Book>(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  };

  const details = book
    ? [
        { label: "Id", value: book._id },
        { label: "Başlık", value: book.title },
        { label: "Yazar", value: book.author },
        { label: "Yayınlanma Yılı", value: book.publishYear },
        { label: "Oluşturulma Tarihi", value: formatDate(book.createdAt) },
        { label: "Son Güncelleme Tarihi", value: formatDate(book.updatedAt) },
      ]
    : [];

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        minHeight: "100vh",
      }}>
      <BackButton />
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.8rem",
          fontWeight: "700",
          color: "#333",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}>
        Kitap Detayları
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        book && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "750px",
              margin: "auto",
              padding: "2.5rem",
              backgroundColor: "#ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              },
            }}>
            {details.map((detail, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: "25px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderRadius: "10px",
                  backgroundColor: "#f7fafc",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0f7fa",
                  },
                }}>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    fontWeight: "500",
                    color: "#607d8b",
                    textTransform: "uppercase",
                  }}>
                  {detail.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    color: "#333",
                    fontWeight: "600",
                  }}>
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>
        )
      )}
    </Box>
  );
}

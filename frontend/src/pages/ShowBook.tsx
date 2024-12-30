import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

export default function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  });
  return (
    <Box
      sx={{
        padding: "1rem",
      }}>
      <BackButton />
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem",
          my: "1rem",
        }}>
        Kitap Detay
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #38bdf8",
            borderRadius: "16px",
            width: "fit-content",
            padding: "16px",
          }}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                marginRight: "16px",
                color: "#6b7280",
              }}>
              Id
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

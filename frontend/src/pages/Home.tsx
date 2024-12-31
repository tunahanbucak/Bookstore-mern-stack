import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/BooksTable";
import BooksCard from "../components/BooksCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        padding: "1rem",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}>
        <Button
          variant={showType === "table" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setShowType("table")}
          sx={{ paddingX: 3, paddingY: 1, borderRadius: 2 }}>
          Tablo
        </Button>
        <Button
          variant={showType === "card" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setShowType("card")}
          sx={{ paddingX: 3, paddingY: 1, borderRadius: 2 }}>
          Kart
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 4,
        }}>
        <Typography
          variant="h1"
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            fontSize: "1.875rem",
          }}>
          Kitap Listesi
        </Typography>
        <Link to="/books/create">
          <MdOutlineAddBox
            style={{
              color: "#0284c7",
              fontSize: "2.25rem",
            }}
          />
        </Link>
      </Box>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </Box>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/BooksTable";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
          alignItems: "center",
          justifyContent: "space-between",
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
      {loading ? <Spinner /> : <BooksTable books={books} />}
    </Box>
  );
}

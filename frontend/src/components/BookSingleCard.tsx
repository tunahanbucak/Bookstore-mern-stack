import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { Box, Typography, IconButton, Modal } from "@mui/material";
import BookModal from "./BookModal";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface BookSingleCardProps {
  book: Book;
}

export default function BookSingleCard({ book }: BookSingleCardProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "16px",
        padding: "20px",
        margin: "15px",
        position: "relative",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.18)",
        },
      }}>
      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          right: "15px",
          backgroundColor: "#FF4081",
          borderRadius: "12px",
          padding: "5px 10px",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: "1rem",
        }}>
        {book.publishYear}
      </Typography>
      <Typography sx={{ my: 1, fontSize: "0.9rem", color: "#757575" }}>
        {book._id}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <PiBookOpenTextLight style={{ color: "#6200EA", fontSize: "1.6rem" }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", fontSize: "1.25rem" }}>
          {book.title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mt: 1 }}>
        <BiUserCircle style={{ color: "#6200EA", fontSize: "1.6rem" }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", fontSize: "1.15rem" }}>
          {book.author}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <IconButton
          sx={{
            color: "#6200EA",
            fontSize: "1.8rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#3700B3",
            },
          }}
          onClick={() => setShowModal(true)}>
          <BiShow />
        </IconButton>
        <Link to={`/books/details/${book._id}`}>
          <IconButton
            sx={{
              color: "#00C853",
              fontSize: "1.8rem",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#00B248",
              },
            }}>
            <BsInfoCircle />
          </IconButton>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <IconButton
            sx={{
              color: "#FF9100",
              fontSize: "1.8rem",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#FF6D00",
              },
            }}>
            <AiOutlineEdit />
          </IconButton>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <IconButton
            sx={{
              color: "#D32F2F",
              fontSize: "1.8rem",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#B71C1C",
              },
            }}>
            <MdOutlineDelete />
          </IconButton>
        </Link>
      </Box>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <BookModal book={book} onClose={() => setShowModal(false)} />
      </Modal>
    </Box>
  );
}

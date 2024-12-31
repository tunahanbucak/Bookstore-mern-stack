import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Box, Typography, IconButton, Modal } from "@mui/material";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface BookModalProps {
  book: Book;
  onClose: () => void;
}
export default function BookModel({ book, onClose }: BookModalProps) {
  return (
    <Modal
      open={true}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}>
      <Box
        sx={{
          width: "600px",
          maxWidth: "100%",
          height: "400px",
          backgroundColor: "white",
          borderRadius: 2,
          padding: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}>
        <IconButton
          sx={{
            position: "absolute",
            top: 1,
            right: 1,
            fontSize: "2rem",
            color: "error.main",
          }}
          onClick={onClose}>
          <AiOutlineClose />
        </IconButton>
        <Typography
          sx={{
            backgroundColor: "error.main",
            borderRadius: 1,
            padding: "4px 8px",
            color: "white",
            width: "fit-content",
          }}>
          {book.publishYear}
        </Typography>
        <Typography variant="body2" sx={{ my: 2, color: "text.secondary" }}>
          {book._id}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <PiBookOpenTextLight
            style={{ color: "#f44336", fontSize: "1.5rem" }}
          />
          <Typography variant="h6" sx={{ my: 1 }}>
            {book.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BiUserCircle style={{ color: "#f44336", fontSize: "1.5rem" }} />
          <Typography variant="h6" sx={{ my: 1 }}>
            {book.author}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4 }}>Anything You want to show</Typography>
        <Typography sx={{ my: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </Typography>
      </Box>
    </Modal>
  );
}

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Tooltip,
} from "@mui/material";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface BooksProps {
  books: Book[];
}

export default function BooksTable({ books }: BooksProps) {
  return (
    <Table
      sx={{
        width: "100%",
        borderSpacing: 0,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}>
      <TableHead
        sx={{
          background: "linear-gradient(135deg, #3498db, #2ecc71)",
          color: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
        <TableRow>
          {["No", "Başlık", "Yazar", "Yayınlanma Yılı", "İşlemler"].map(
            (header, idx) => (
              <TableCell
                key={idx}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "16px",
                  borderBottom: "2px solid #ddd",
                  color: "white",
                  letterSpacing: "1px",
                }}>
                {header}
              </TableCell>
            )
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map((book, index) => (
          <TableRow
            key={book._id}
            sx={{
              "&:hover": {
                backgroundColor: "#f4f7fc",
                transform: "scale(1.02)",
                transition: "all 0.3s ease-in-out",
              },
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
            }}>
            <TableCell
              sx={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                fontSize: "1rem",
                color: "#333",
                letterSpacing: "0.5px",
              }}>
              {index + 1}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                fontSize: "1rem",
                color: "#333",
                letterSpacing: "0.5px",
              }}>
              {book.title}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                fontSize: "1rem",
                color: "#333",
                display: { xs: "none", sm: "table-cell" },
                letterSpacing: "0.5px",
              }}>
              {book.author}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                fontSize: "1rem",
                color: "#333",
                display: { xs: "none", sm: "table-cell" },
                letterSpacing: "0.5px",
              }}>
              {book.publishYear}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                fontSize: "1rem",
                color: "#333",
                letterSpacing: "0.5px",
              }}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <Tooltip title="Detaylar">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle
                      style={{
                        fontSize: "1.8rem",
                        color: "#16a34a",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    />
                  </Link>
                </Tooltip>
                <Tooltip title="Düzenle">
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit
                      style={{
                        fontSize: "1.8rem",
                        color: "#f59e0b",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    />
                  </Link>
                </Tooltip>
                <Tooltip title="Sil">
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete
                      style={{
                        fontSize: "1.8rem",
                        color: "#dc2626",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

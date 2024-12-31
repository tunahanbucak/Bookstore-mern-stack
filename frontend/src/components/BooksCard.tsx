import { Grid } from "@mui/material";
import BookSingleCard from "./BookSingleCard";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

interface BooksCardProps {
  books: Book[];
}

export default function BooksCard({ books }: BooksCardProps) {
  return (
    <Grid container spacing={2}>
      {books.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
          <BookSingleCard book={item} />
        </Grid>
      ))}
    </Grid>
  );
}

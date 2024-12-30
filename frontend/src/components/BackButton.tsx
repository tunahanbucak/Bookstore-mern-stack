import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Box } from "@mui/material";

interface BackButtonProps {
  destination?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ destination = "/" }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Link
        to={destination}
        style={{
          backgroundColor: "skyblue",
          color: "white",
          padding: "4px 16px",
          borderRadius: "8px",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
        }}>
        <BsArrowLeft style={{ fontSize: "2rem" }} />
      </Link>
    </Box>
  );
};

export default BackButton;

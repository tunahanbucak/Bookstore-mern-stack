import { Box } from "@mui/material";

export default function Spinner() {
  return (
    <Box
      sx={{
        width: "4rem",
        height: "4rem",
        margin: "2rem",
        borderRadius: "50%",
        backgroundColor: "skyblue",
        animation: "pink 1s ease-in-out",
      }}>
      <Box></Box>
    </Box>
  );
}

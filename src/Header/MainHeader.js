import React from "react";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";

const MainHeader = () => {
  return (
    <>
      <Box>
        <ButtonAppBar />
      </Box>

      <Box>
        <Alert style={{ marginTop: "20px", marginBottom:"20px" }} severity="info">
          This Web Is Under Devlopment
        </Alert>
      </Box>
    </>
  );
};

export default MainHeader;

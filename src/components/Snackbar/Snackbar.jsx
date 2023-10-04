import React from "react";
import { Snackbar, Alert, Box } from "@mui/material";

function MySnackbar({ open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' elevation={6} variant='filled'>
          Transaction succesfully created!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MySnackbar;

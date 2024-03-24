import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Hello World
          </Typography>
        </Box>
        <Button variant="contained">submit</Button>
      </Stack>
    </Container>
  );
}

export default App;

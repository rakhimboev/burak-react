import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

const Statistics = () => {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">12</Box>
            <Box className="static-text">restaurants</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />
          <Stack className="static-box">
            <Box className="static-num">8</Box>
            <Box className="static-text">experience</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">50+</Box>
            <Box className="static-text">menu</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">10000+</Box>
            <Box className="static-text">Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Statistics;

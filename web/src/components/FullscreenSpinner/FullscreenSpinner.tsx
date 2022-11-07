import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const FullscreenSpinner: React.FC = () => (
  <Box
    height="100vh"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner color="#CC0000"/>
  </Box>
);

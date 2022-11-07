import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ReaturnButton } from "../../components";

export const CompanyPage: React.FC = () => {
  const { companyId } = useParams();

  return (
    <Stack
      direction="column"
      m={4}
      spacing={4}
    >
      <ReaturnButton/>
      <Box>
        Company id: {companyId}
      </Box>
    </Stack>
  );
};

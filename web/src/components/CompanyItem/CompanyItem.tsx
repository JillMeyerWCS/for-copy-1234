import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  companyId: string,
  title: string,
}

export const CompanyItem: React.FC<Props> = ({ companyId, title }) => (
  <Link to={`company/${companyId}`}>
    <Box mx={4} my={2}>
      {title}
    </Box>
  </Link>
);

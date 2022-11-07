import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { routes } from "../../../utils";

interface Props {
  to?: string
}

export const ReaturnButton: React.FC<Props> = ({ to }) => (
  <Link to={to ?? routes.HOME}>
    <Stack direction="row" align="center" color="blue.600">
      <IoArrowBackSharp/> <Text>Back</Text>
    </Stack>
  </Link>
);

import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "../../../common/Container";
import { Stories } from "./components";

const Customers = ({ themeMode = "dark" }) => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Stories themeMode={themeMode} />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}></Box>
    </Box>
  );
};

Customers.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Customers;

import './App.css';

// chakra imports
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "theme/themeAuth";
import Home from "pages/Home"

function App() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w='100%'>
      <Box w='100%'>
        <Box w='100%'>
          <Box w='100%'>
            <Home />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

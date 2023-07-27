import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import  ColorModeSwitcher from './ColorModeSwitcher';

export const server = "https://shrirameshwardhamtemple-3dk4.vercel.app";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </StrictMode>
);



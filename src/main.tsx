// React
import React from "react";
import ReactDOM from "react-dom/client";

// Context
import { DataContextProvider } from "@context/DataContext";

// App
import App from "./App";

// Mantine
import { MantineProvider } from "@mantine/core";

// Styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </MantineProvider>
  </React.StrictMode>
)

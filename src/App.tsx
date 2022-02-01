import React, { VFC } from "react";
import { DragResize } from "./DragResize";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme, TextField, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8f8f8f8",
    },
  },
});

export const App: VFC = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <DragResize />
        <TextField />
      </ThemeProvider>
    </GlobalProvider>
  );
};

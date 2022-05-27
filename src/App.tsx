import React, { VFC } from "react";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { Film } from "./components/organism/Film";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { CounterOrganism } from "./components/organism/CounterOrganism";
import { TextField } from "./components/atoms/TextField";
import { Contact } from "./components/organism/Contact";
import { DescBox } from "./components/organism/DescBox";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1849a5",
    },
  },
});

export const App: VFC = () => {
  console.log("------------------------App.tsx");

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route index element={<DescBox />} />
          <Route path="movies" element={<Film />} />
          <Route path="contact" element={<Contact />} />
          <Route path="comingSoon" element={<CounterOrganism />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

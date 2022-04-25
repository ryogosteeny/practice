import React, { VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { Header } from "./components/atoms/Header";
import { Search } from "./components/atoms/Search";
import { Movie } from "./components/atoms/Movie";

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
    <GlobalProvider>
      <div className={"app"}>
        <Header title={"映画の作品"} />
        <Search />
        <Movie title={"ここに映画のタイトルを挿入"} year={"2018"} />
        {/*<CounterOrganism />*/}
        {/*<DescBox />*/}
      </div>
    </GlobalProvider>
  );
};

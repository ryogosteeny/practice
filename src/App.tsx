import React, { VFC } from "react";
import { DragResize } from "./DragResize";
import { GlobalProvider } from "./GlobalProvider";

export const App: VFC = () => {
  return (
    <GlobalProvider>
      <DragResize />
    </GlobalProvider>
  );
};

import React, { useState, VFC } from "react";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme, ThemeProvider } from "@mui/material";
import { Todo } from "./components/organisms/Todo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1849a5",
    },
  },
});

export interface TodoList {
  id: number;
  todo: string;
  complete: boolean;
}

export const App: VFC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoStateItems, setTodoStateItems] = useState<TodoList[]>([
    {
      id: 1,
      todo: "歯磨きする",
      complete: false,
    },
    {
      id: 2,
      todo: "洗濯する",
      complete: true,
    },
    {
      id: 3,
      todo: "買い物をする",
      complete: false,
    },
  ]);

  const changeTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputText(event.target.value);
  };

  const clickAddTodoHandle = (): void => {
    const newTodo: TodoList[] = [
      ...todoStateItems,
      {
        id: 4,
        todo: inputText,
        complete: false,
      },
    ];
    setTodoStateItems(newTodo);
    setInputText("");
  };

  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Todo
          onChange={changeTextHandler}
          value={inputText}
          lists={todoStateItems}
          onClick={clickAddTodoHandle}
        />
      </ThemeProvider>
    </GlobalProvider>
  );
};

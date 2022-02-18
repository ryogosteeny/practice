import React from "react";
import { InputField } from "../atoms/InputField";
import { Box, Button, List, ListItemText, Stack } from "@mui/material";
import { TodoList } from "../../App";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  lists: TodoList[];
  onClick: () => void;
}

export const Todo = ({ onClick, onChange, value, lists }: Props) => {
  return (
    <Box width={"20%"}>
      <Stack spacing={1}>
        <InputField
          onChange={onChange}
          value={value}
          label={"TODOを追加する"}
        />
        <Button onClick={onClick} variant="contained">
          {"追加する"}
        </Button>
        <Box sx={{ border: "2px solid #1849a5", textAlign: "center" }}>
          <List>
            {lists.map((todoItem) => (
              <Stack
                key={todoItem.id}
                direction="row"
                spacing={2}
                sx={{ margin: 1, alignItems: "center" }}
              >
                <ListItemText>{todoItem.todo}</ListItemText>
                <ListItemText>{todoItem.complete ? "済" : "未"}</ListItemText>
                <Button variant="outlined">{"完了"}</Button>
                <Button variant="outlined">{"削除"}</Button>
              </Stack>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

//-App
// -TodoComponent
//  -InputField
//   -TextField
//  -Button
//  -Box
//   -List
//    -ListItemText

// Stackでマージンが当てられる、多用していいのか？

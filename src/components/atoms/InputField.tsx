import React from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

export const InputField = ({ onChange, value, label }: Props) => {
  return (
    <div>
      <Typography variant={"h5"}>{label}</Typography>
      <TextField
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

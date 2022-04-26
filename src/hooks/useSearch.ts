import React, { useState } from "react";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (
    e: React.MouseEvent<HTMLButtonElement>,
    search: (searchValue: string) => void
  ) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return { searchValue, handleSearchValue, callSearchFunction };
};

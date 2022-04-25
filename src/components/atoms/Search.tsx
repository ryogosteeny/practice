import React, { useState } from "react";
import "./Search.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetInputField();
  };

  return (
    <form className="search search-layout">
      <input
        className="input"
        type="text"
        value={searchValue}
        onChange={handleSearchValue}
      />
      <button
        className="btn btn-main btn-layout"
        type="submit"
        onClick={callSearchFunction}
      >
        検索
      </button>
    </form>
  );
};

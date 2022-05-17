import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { MainButton } from "../atoms/MainButton";
import "./Search.css";

interface Props {
  search: (searchValue: string) => void;
}

export const Search = React.memo(({ search }: Props) => {
  const { searchValue, handleSearchValue, callSearchFunction } = useSearch();
  return (
    <form className="search search-layout">
      <input
        className="input"
        type="text"
        value={searchValue}
        onChange={handleSearchValue}
      />
      <MainButton
        btnText={"検索"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          callSearchFunction(e, search)
        }
      />
    </form>
  );
});

// TODO atom単位のボタンの正しいコンポーネント設計

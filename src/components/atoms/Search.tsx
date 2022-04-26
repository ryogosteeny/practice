import React from "react";
import "./Search.css";
import { useSearch } from "../../hooks/useSearch";

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
      <button
        className="btn btn-main btn-layout"
        type="submit"
        onClick={(e) => callSearchFunction(e, search)}
      >
        検索
      </button>
    </form>
  );
});

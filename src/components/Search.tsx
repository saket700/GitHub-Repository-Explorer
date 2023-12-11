import React, { useState } from "react";
import { SearchIcon } from "../Icons";

interface ISearch {
  onSearchClick: (searchValue: string) => void;
}

export const Search: React.FC<ISearch> = ({ onSearchClick: onSearchClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchClick(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="pt-4 max-w-2xl w-full">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative hover:bg-transparent hover:border-transparent hover:text-white">
          <input
          aria-label="search"
            id="username"
            value={searchValue}
            onChange={handleInputChange}
            className="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400"
            placeholder="Find a repository"
            required
          />
          <button
            data-testid="Search"
            type="submit"
            className="text-white absolute end-2.5 bottom-1.5 font-medium rounded-lg text-sm px-4 py-1 pt-[20px]"
          >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <SearchIcon />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { paginate, sortRepos, useGitHubRepos } from "../../utils";
import { Select, Loader, NotFound, Search, Pagination } from '../../components'
import { RepoList } from "./components/RepoList";


const pageSize = 5;
const updatedData = "Last updated";
const OptionList = [
  { id: 1, label: "Last updated" },
  { id: 2, label: "Name" },
  { id: 3, label: "Stars" },
];
export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(updatedData);

  const { repos, loading, fetchGitHubRepos } = useGitHubRepos();
  const sortedRepos = sortRepos(repos, sortOption);

  const onSearch = (value: string) => {
    setSearchValue(value);
    fetchGitHubRepos(value);
    setCurrentPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const currentPosts = paginate(sortedRepos, currentPage, pageSize);

  return (
    <div className="m-auto max-w-[900px]">
      <label
        htmlFor="github_username"
        className="text-sm font-medium leading-6 text-gray-900 flex justify-center"
      >
        Github Explorer Repository
      </label>
      <div className="flex flex-col md:flex-row md:items-center">
        <Search onSearchClick={onSearch} />
        <Select
          onChange={handleSortChange}
          isDisabled={!searchValue}
          options={OptionList.map((option) => option.label)}
          value={sortOption}
        />
      </div>
      {loading && (
        <div className="flex justify-center pt-10">
          <Loader />
        </div>
      )}

      {!loading && searchValue && currentPosts.length===0 && (
        <div className="pt-16">
          <NotFound
            headingNotFound={"Repository not found"}
            descriptionNotFound={`We are sorry but ${searchValue} doesn’t have any repositories that match.`}
          />
        </div>
      )}

      <RepoList currentPosts={currentPosts} />

      <div className="w-full flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalCount={repos.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </div>
  );
};

export default HomePage;

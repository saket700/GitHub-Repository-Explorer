import { IGithubRepoDetails } from "../types/GithubRepoType";
import { IGithubUserDetails } from "../types/GithubUserDetailsType";

// to convert date format
export const formatDate = (dateString: string, formatOptions = {}) => {
  const inputDate = new Date(dateString || new Date());
  const options = { ...formatOptions };
  return new Intl.DateTimeFormat("en-US", options).format(inputDate);
};

// To calculate the pagination index
export const paginate = <T extends IGithubUserDetails> (
  items: T[],
  currentPage: number,
  pageSize: number
) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return items.slice(startIndex, endIndex);
};

// to sort the options
export const sortRepos = (repos:IGithubRepoDetails[], sortOption: string) => {
  return [...repos].sort((a, b) => {
    switch (sortOption) {
      case "Name":
        return a.name.localeCompare(b.name);
      case "Stars":
        return b.stargazers_count - a.stargazers_count;
      default:
        return (
          new Date(b.updated_at).getTime() -
          new Date(a.updated_at).getTime()
        );
    }
  });
};


export const truncateDescription = (description: string, maxLength: number): string => {
  if (!description || description.length <= maxLength) {
    return description;
  }
  
  return `${description.substring(0, maxLength)}...`;
};
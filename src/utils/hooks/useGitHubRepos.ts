import { useState } from "react";
import { fetchGitHubRepos } from "../../services/githubService";
import { IGithubRepoDetails } from "../../types/GithubRepoType";

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<IGithubRepoDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (username: string) => {
    setLoading(true);
    setError(null)

    try {
      const data = await fetchGitHubRepos(username);
      setRepos(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return {
    repos,
    loading,
    error,
    fetchGitHubRepos: fetchData,
  };
};

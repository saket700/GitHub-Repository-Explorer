import { useState } from "react";
import { fetchGithubUserDetails } from "../../services/githubUserService";
import { IGithubUserDetails } from "../../types/GithubUserDetailsType";

export const useGithubDetails = () => {
  const [userData, setUserData] = useState<IGithubUserDetails[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (userName: string, repoName: string) => {
    setLoading(true);
    setError(null)
    try {
    
      const data = await fetchGithubUserDetails(userName, repoName);
      setUserData(data); 
    } catch (err) {
      setError(err.message);
    } 
    setLoading(false);
  };

  return { fetchGithubUserDetails: fetchData, userData, error, isLoading };
};
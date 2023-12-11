const GITHUB_API_URL = "https://api.github.com";
const CLIENT_ID = "xxxx";
const CLIENT_SECRET = "yyyy";

export const fetchGitHubRepos = async (userName: string) => {
  const url = `${GITHUB_API_URL}/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error.message);
    throw error;
  }
};

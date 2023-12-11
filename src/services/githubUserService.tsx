const GITHUB_API_URL = "https://api.github.com";

export const fetchGithubUserDetails = async (
  userName: string,
  repoName: string
) => {
  const url = `${GITHUB_API_URL}/repos/${userName}/${repoName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user details:", error.message);
    throw error;
  }
};

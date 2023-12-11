export interface IGithubRepoDetails {
  owner: { login: string };
  id: string;
  name: string;
  description: string;
  stargazers_url: string;
  url: string;
  language: string;
  visibility: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  updated_at: string;
  license: {
    key: string;
    name: string;
  };
}

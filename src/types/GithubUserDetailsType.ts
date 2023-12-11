export interface IGithubUserDetails {
  id: string;
  owner: { login: string };
  description: string;
  stargazers_url: string;
  name: string;
  visibility: string;
  stargazers_count: number;
  updated_at: string;
  language: string;
  watchers_count: number;
  forks_count: number;
  license: {
    key: string;
    name: string;
  };
}

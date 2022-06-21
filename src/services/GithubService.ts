import axios from "axios";
import { GithubRepoInterface } from "../interfaces/GithubInterface";

const PROFILE_ENDPOINT =
  "https://api.github.com/users/sheensantoscapadngan/repos";

export const fetchGithubRepos = async (): Promise<GithubRepoInterface[]> => {
  const reposResponse = await axios.get(PROFILE_ENDPOINT);

  return reposResponse.data.map(
    (res: any): GithubRepoInterface => ({
      description: res.description,
      forksCount: res.forks_count,
      isForked: res.fork,
      name: res.name,
      starsCount: res.stargazers_count,
      url: res.html_url,
      watchersCount: res.watchers_count,
    })
  );
};

export const removeForkedRepos = (repos: GithubRepoInterface[]) => {
  return repos.filter((repo) => !repo.isForked);
};

export const sortReposByPopularity = (repos: GithubRepoInterface[]) => {
  return repos.sort((a, b) => (a.starsCount < b.starsCount ? 1 : -1));
};

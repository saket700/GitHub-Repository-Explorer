import React from "react";
import { IGithubUserDetails } from "../../../types/GithubUserDetailsType";
import { formatDate } from "../../../utils";
import { Card } from "../../../components/Card";

interface IRepoList {
  currentPosts: IGithubUserDetails[];
}
export const RepoList: React.FC<IRepoList> = ({ currentPosts }) => (
  <div className="pt-8">
    {currentPosts?.map((item: IGithubUserDetails) => (
      <div key={item.id}  className="mb-8">
        <Card
          
          githubUsername={item?.owner?.login}
          githubDescription={item?.description}
          numberOfStars={item.stargazers_url}
          repoName={item.name || ""}
          githubLanguage={item?.language}
          visibility={item?.visibility}
          stargazersCount={item?.stargazers_count}
          updatedAt={formatDate(item.updated_at, {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
          license={item?.license}
          forkCount={item.forks_count}
        />
      </div>
    ))}
  </div>
);

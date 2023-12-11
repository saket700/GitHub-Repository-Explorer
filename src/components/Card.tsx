import React from "react";
import { GithubIcon, StarIcon, LicenseIcon, ForkIcon } from "../Icons";

export interface ICardDetails {
  githubUsername: string;
  githubDescription: string | undefined;
  numberOfStars?: string;
  githubLanguage: string;
  visibility: string;
  stargazersCount: number;
  updatedAt: string;
  repoName: string;
  license: {
    key: string;
    name: string;
  };
  forkCount: number;
}
export const Card: React.FC<ICardDetails> = ({
  githubUsername,
  githubDescription,
  githubLanguage,
  visibility,
  stargazersCount,
  updatedAt,
  repoName,
  license,
  forkCount,
}) => {
  return (
    <div className="max-w-[52rem] w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex">
        <GithubIcon />
        <a
          href={`/detail?username=${githubUsername}&reponame=${repoName}`}
          target="_blank"
          className="mb-3 text-blue-500 hover:underline"
        >
          {repoName}
        </a>
        <div className="border text-sm text-gray-500 rounded-3xl w-16 h-[24px] mt--[3px] text-uppercase capitalize ml-3 mb-1">
          {visibility}
        </div>
      </div>
      <div className="flex items-start flex-wrap">
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm text-justify">
          {githubDescription ? githubDescription : "-"}
        </p>
      </div>
      <div className="flex pt-2 text-xs">
        {!!stargazersCount && (
          <>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mr-3 pt-1">
              {githubLanguage}
            </p>
            <StarIcon />
            <div className="font-normal  text-gray-400 pt-1">{stargazersCount}</div>
          </>
        )}
        {!!forkCount && (
          <div className=" flex pl-2">
            <div className="pt-1">
              <ForkIcon />
            </div>
            <div className="font-normal  text-gray-500 dark:text-gray-400 mr-3 pt-1">
              {forkCount}
            </div>
          </div>
        )}
        {!!license?.name && (
          <div className=" flex pl-2">
            <div className="pt-1">
              <LicenseIcon />
            </div>
            <div className="font-normal  text-gray-500 dark:text-gray-400 mr-3 pt-1">
              {license?.name}
            </div>
          </div>
        )}
        <div className="text-gray-400 font-normal text-xs pl-2 pt-1">
          Updated on {updatedAt}
        </div>
      </div>
    </div>
  );
};

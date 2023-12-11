import React, { ReactElement } from "react";
import {
  ReadMeIcon,
  StarIcon,
  LicenseIcon,
  ActivityIcon,
  ForkIcon,
  EyeIcon
} from "../../../Icons";
import { ListItem } from "./ListItem";

interface IDetailsLayout {
  description: string | ReactElement;
  stargazersCount: number;
  watchersCount: number;
  forksCount: number;
}

export const DetailsLayout: React.FC<IDetailsLayout> = ({
  description,
  stargazersCount,
  watchersCount,
  forksCount,
}) => {
  
  return (
    <div className="space-y-8">
      <h4 className="flex items-center text-lg font-bold dark:text-black">
        About
      </h4>
      <div className="flex items-center">{description}</div>
      <ul className="max-w-md list-inside dark:text-gray-400">
        <ListItem icon={<ReadMeIcon />} children="Readme" />
        <ListItem icon={<LicenseIcon />} children="Unlicense license" />
        <ListItem icon={<ActivityIcon />} children="Activity" />
        <ListItem icon={<StarIcon />} children={`${stargazersCount} stars`} />
        <ListItem icon={<EyeIcon />} children={`${watchersCount} watching`} />
        <ListItem icon={<ForkIcon />} children={`${forksCount} forks`} />
      </ul>
    </div>
  );
};


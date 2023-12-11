import React from "react";

interface IAdditionalSection {
  HeadingText: string;
  DescriptionText: string;
}
export const AdditionalSection: React.FC<IAdditionalSection> = ({
  HeadingText,
  DescriptionText,
}) => {
  return (
    <div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 flex items-center">
        {HeadingText}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {DescriptionText}
      </p>
    </div>
  );
};

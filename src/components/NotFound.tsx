import React from "react";
interface INotFound {
  headingNotFound: string;
  descriptionNotFound: string;
}
export const NotFound: React.FC<INotFound> = ({
  headingNotFound,
  descriptionNotFound,
}) => (
  <div>
    <h3>{headingNotFound}</h3>
    <p>{descriptionNotFound}</p>
  </div>
);

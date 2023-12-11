import React, { ReactNode } from "react";

interface IListItem {
  icon: ReactNode;
  children: string;
}
export const ListItem: React.FC<IListItem> = ({ icon, children }) => (
  <li className="flex items-center">
    {icon}
    <span className="ml-2">{children}</span>
  </li>
);

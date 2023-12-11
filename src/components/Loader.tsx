import React from "react";
import { LoadingIcon } from "../Icons";

export const Loader = () => (
    <div className="flex justify-start">
      <LoadingIcon />
      <span className="sr-only">Loading...</span>
    </div>
  );
  
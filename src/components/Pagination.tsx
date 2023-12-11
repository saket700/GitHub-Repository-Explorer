import React from "react";
import classnames from "classnames";
import { DOTS, usePagination } from "../utils/hooks/usePagination";
import { LeftArrow, RightArrow } from "../Icons";

interface IPagination {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

export const Pagination: React.FC<IPagination> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) as number[];

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPaginationItem = (pageNumber: number, index: number) => (
    <li
      key={`${pageNumber}-${index}`}
      className={classnames(
        "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white-700 dark:hover:text-white",
        {
          "bg-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white-700 dark:hover:text-white":
            pageNumber === currentPage,
          "bg-gray-100 text-gray-700": pageNumber !== currentPage,
          "pointer-events-none opacity-50": pageNumber.toString() === DOTS,
        }
      )}
      onClick={() =>
        pageNumber !== currentPage ? handlePageChange(pageNumber) : null
      }
    >
      {pageNumber.toString() === DOTS ? (
        <span className="dots">&#8230;</span>
      ) : (
        pageNumber
      )}
    </li>
  );
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              currentPage > 1 && handlePageChange(currentPage - 1);
            }}
            className={classnames(
              "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  dark:hover:text-white",
              {
                "pointer-events-none opacity-50": currentPage === 1,
              }
            )}
          >
            <span className="sr-only">Previous</span>
            <LeftArrow />
          </a>
        </li>
        {paginationRange.map(renderPaginationItem)}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            className={classnames(
              "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white",
              {
                "pointer-events-none opacity-50": currentPage === lastPage,
              }
            )}
          >
            <span className="sr-only">Next</span>
            <RightArrow />
          </a>
        </li>
      </ul>
    </nav>
  );
};


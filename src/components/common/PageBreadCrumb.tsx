import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2
        className="text-xl font-semibold text-black dark:text-white"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300"
              href="/"
            >
              Home
              <svg
                className="stroke-current text-gray-400 dark:text-gray-500"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="text-sm text-black dark:text-white font-medium">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;

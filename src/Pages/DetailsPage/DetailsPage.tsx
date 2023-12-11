import React, { useEffect } from "react";
import { CardLayout } from "../../components/CardLayout";
import { DetailsLayout } from "./components/DetailLayout";
import { AdditionalSection } from "./components/AdditionalSection";
import { useGithubDetails } from "../../utils/hooks/useGithubDetails";
import { truncateDescription } from "../../utils";

const DetailsPage = () => {
  const params = new URLSearchParams(location.search);
  const userName = params.get("username");
  const repoName = params.get("reponame");
  const { userData, fetchGithubUserDetails, isLoading } = useGithubDetails();

  useEffect(() => {
    fetchGithubUserDetails(userName || "", repoName || "");
  }, [userName, repoName]);
  const userDataObject =
    userData && Array.isArray(userData) ? userData[0] : userData;

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col lg:flex-row pt-8">
          <div className="lg:flex-1 mr-0 lg:mr-20">
            <div className="flex mb-3">
              <figure className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
              <img
                className=""
                alt="Owner avatar"
                src="https://i.stack.imgur.com/Dj7eP.jpg"
                
                width="50px"
              />
              </figure>
              <div className="flex pt-6 pl-6">
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {repoName}
                </a>
                <div>
                <div className="border text-sm text-gray-500 rounded-3xl w-16 h-[24px] mt--[3px] text-uppercase capitalize ml-3 mb-1">
                  {userDataObject?.visibility}
                </div>
                </div>
              </div>
            </div>
            <hr className="my-8 border-t-1 border-gray-200" />
            <div>
              <CardLayout
                CardHeading={repoName || ""}
                CardDescription={truncateDescription(userDataObject?.description || "No description, website, or topics provided.", 60)}
              />
            </div>
          </div>
          <div className="lg:flex-2">
            <div className="pt-20">
              <DetailsLayout
                description={truncateDescription(userDataObject?.description || "No description, website, or topics provided.", 60)}
                stargazersCount={userDataObject?.stargazers_count || 0}
                watchersCount={userDataObject?.watchers_count || 0}
                forksCount={userDataObject?.forks_count || 0}
              />
            </div>
            <div className="pt-10">
              <AdditionalSection
                HeadingText="Release"
                DescriptionText="No releases published"
              />
              <hr className="my-8 border-t border-gray-200" />
              <AdditionalSection
                HeadingText="Packages"
                DescriptionText="No package published"
              />
            </div>
            <hr className="my-8 border-t border-gray-200" />
            <div className="dark:text-gray-400 flex">Languages</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;

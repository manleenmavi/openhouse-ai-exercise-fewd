import CommunityOverview from "./CommunityOverview";
import { Community, Home } from "../../types/types";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Animations/LoadingSpinner";
import CommunityListHeader from "./CommunityListHeader";
import DialogModal from "../Shared/DialogModal";

const CommunityList = () => {
  const [communityData, setCommunityData] = useState<Community[] | null>([]);

  // Validator for Community data
  const isCommunity = (data: any): data is Community => {
    return data.id !== undefined && data.name !== undefined;
  };

  const fetchCommunityData = async () => {
    try {
      //   Using proxy to prevent CORS error
      const response = await fetch(
        "/api/googleapis-storage/openhouse-ai-fe-coding-test/communities.json"
      );
      const data = await response.json();

      //  Validate the data, remoe invalid data from array
      const validData = data.filter((community: any) => {
        return isCommunity(community);
      });

      //  Checking if all data was invalid
      if (validData.length === 0 && data.length !== 0) {
        throw new Error("Invalid data in community list");
      }

      //   Sort the data by name
      validData.sort((a: Community, b: Community) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });

      setCommunityData(validData);
    } catch (error) {
      console.error(error);
      setCommunityData(null);
    }

    // Fetching home list data
    fetchHomeData();
  };

  useEffect(() => {
    // Load the data from the API on first render
    fetchCommunityData();
  }, []);

  const [homeData, setHomeData] = useState<Home[] | null>([]);
  //   Fetching home list data
  const fetchHomeData = async () => {
    try {
      const response = await fetch(
        "/api/googleapis-storage/openhouse-ai-fe-coding-test/homes.json"
      );
      const data = await response.json();

      setHomeData(data);
    } catch (error) {
      console.error(error);
      setHomeData(null);
    }
  };

  return (
    <>
      {/* Test */}
      <DialogModal
        onClose={() => console.log("Closed -test")}
        title="Test Title"
      >
        Title
      </DialogModal>

      <CommunityListHeader />
      <div className="flex justify-evenly flex-wrap w-full md:max-w-[80%] min-h-dvh m-auto pt-24 pb-24">
        {communityData === null ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-2xl text-gray-400">Error Loading Data</div>
          </div>
        ) : communityData.length === 0 ? (
          <div className="h-28 w-28 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          communityData?.map((community) => (
            <CommunityOverview
              key={community.id}
              comunity={community}
              allHomeList={homeData ?? []}
            />
          ))
        )}
      </div>
    </>
  );
};

export default CommunityList;

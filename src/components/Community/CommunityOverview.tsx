import { useEffect, useState } from "react";
import styles from "../../styles/Community.module.css";
import { Community, Home } from "../../types/types";
import DialogModal from "../Shared/DialogModal";
import CommunityHomeList from "./Home/CommunityHomeList";

type CommunityOverviewProps = {
  comunity: Community;
  allHomeList: Home[]; // This is the list of all homes including other communities
};

const CommunityOverview = (props: CommunityOverviewProps) => {
  const { comunity, allHomeList } = props;

  const [imageError, setImageError] = useState(false);

  const [avgPrice, setAvgPrice] = useState<number | null>(null);

  // Home List
  const [homeList, setHomeList] = useState<Home[] | null>([]); // This is the list of homes in the current community

  /*  Validator for Home data */
  const isHome = (data: any): data is Home => {
    return data.id !== undefined && data.type !== undefined;
  };

  /* Extract current community's home list from all home list*/
  const filterHomeData = () => {
    if (allHomeList == null || allHomeList.length === 0) {
      return;
    }

    //   Filter the home list to only include homes in the current community
    const filteredHomeList = allHomeList.filter((home) => {
      return home.communityId === comunity.id;
    });

    //  Validate the data, remoe invalid data from array
    const validData = filteredHomeList.filter((home: any) => {
      return isHome(home);
    });

    //  Checking if all data was invalid
    if (validData.length === 0 && filteredHomeList.length !== 0) {
      throw new Error("Invalid data in home list.");
    }

    setHomeList(validData);
  };

  /* Calculate the average price of the homes in the community */
  const calculateAvgPrice = () => {
    if (homeList == null || homeList.length === 0) {
      return;
    }

    //   Calculate the average price
    let total = 0;
    homeList.forEach((home) => {
      if (home.price == null) {
        return;
      } else {
        total += home.price;
      }
    });
    const avg = total / homeList.length;
    setAvgPrice(avg);
  };

  // Extract the home data for current community when allHomeList is updated
  useEffect(() => {
    filterHomeData();
  }, [allHomeList]);

  // Calculate the average price when homeList (of current community) is updated
  useEffect(() => {
    calculateAvgPrice();
  }, [homeList]);

  // Dialog Modal for Community Detail
  const [showCommunityDetail, setShowCommunityDetail] = useState(false);

  const handleCommunityDialog = () => {
    setShowCommunityDetail((showCommunityDetail) => !showCommunityDetail);
  };

  return (
    <>
      <div
        className={`${styles.communityOverviewCard} cursor-pointer`}
        onClick={handleCommunityDialog}
      >
        <div className="w-full h-full">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-2xl text-gray-400">
                Image Unavailable
              </div>
            </div>
          ) : (
            <img
              src={comunity.imgUrl ?? ""}
              alt={comunity.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="w-full">
          <div className="flex flex-col justify-between">
            <div
              className={`${styles.communityOverviewName} text-lg md:text-xl lg:text-2xl break-words`}
            >
              {comunity.name}
            </div>
            <div className="pl-4 pr-4 m-1 mb-2">
              {avgPrice
                ? `Average Price: $${new Intl.NumberFormat("en-CA", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  }).format(avgPrice)}`
                : " "}
            </div>
            {comunity.group && (
              <div className="pl-4 pr-4 m-1 mb-4 text-gray-500 text-right">
                {comunity.group}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Test */}

      {showCommunityDetail && (
        <DialogModal
          onClose={handleCommunityDialog}
          title={`${comunity.name} Community Detail`}
        >

          <CommunityHomeList homeList={homeList ?? []} />
        </DialogModal>
      )}
    </>
  );
};

export default CommunityOverview;

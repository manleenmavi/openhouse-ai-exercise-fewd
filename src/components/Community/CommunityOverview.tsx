import { useEffect, useState } from "react";
import styles from "../../styles/Community.module.css";
import { Community, Home } from "../../types/types";

type CommunityOverviewProps = {
  comunity: Community;
  allHomeList: Home[]; // This is the list of all homes including other communities
};

const CommunityOverview = (props: CommunityOverviewProps) => {
  const { comunity, allHomeList } = props;

  const [imageError, setImageError] = useState(false);

  const [avgPrice, setAvgPrice] = useState<number | null>(null);

  //   Validator for Home data
  const isHome = (data: any): data is Home => {
    return (
      data.id !== undefined &&
      data.communityId !== undefined &&
      data.price !== undefined
    );
  };

  //   Calculate the average price of the homes in the community
  const calculateAvgPrice = () => {

    //   Filter the home list to only include homes in the current community
    const filteredHomeList = allHomeList.filter((home) => {
      return home.communityId === comunity.id;
    });

    if (filteredHomeList.length === 0) {
      return;
    }

    // Validating the data without filtering
    if (!Array.isArray(allHomeList) || !allHomeList.every(isHome)) {
      console.log("Invalid data in home list");
      return;
    }

    //   Calculate the average price
    let total = 0;
    filteredHomeList.forEach((home) => {
      total += home.price;
    });
    const avg = total / filteredHomeList.length;
    setAvgPrice(avg);
  };

  useEffect(() => {
    calculateAvgPrice();
  }, [allHomeList]);

  return (
    <div className={`${styles.communityOverviewCard}`}>
      <div className="w-full h-full">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-2xl text-gray-400">Image Unavailable</div>
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
          <div className={`${styles.communityOverviewName}`}>
            {comunity.name}
          </div>
          <div className="pl-4 pr-4 m-1 mb-4">
            {avgPrice ? `Average Price: $${new Intl.NumberFormat('en-CA', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(avgPrice)}` : " "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOverview;

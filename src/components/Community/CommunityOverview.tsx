import { useState } from "react";
import styles from "../../styles/Community.module.css";

type CommunityOverviewProps = {
  name: string;
  imageUrl: string;
  avgPrice: number;
};

const CommunityOverview = (props: CommunityOverviewProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`${styles.communityOverviewCard}`}>
      <div className="w-full">
        {imageError ? (
          <div className="w-full h-48 flex items-center justify-center">
            <div className="text-2xl text-gray-400">Image Unavailable</div>
          </div>
        ) : (
          <img
            src={props.imageUrl}
            alt={props.name}
            className="w-full"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="w-full">
        <div className="flex flex-col justify-between">
          <div className={`${styles.communityOverviewName}`}>{props.name}</div>
          <div className="pl-4 pr-4 m-1 mb-4">
            Average Price: ${props.avgPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOverview;

import styles from "../../styles/Community.module.css";

type CommunityOverviewProps = {
  name: string;
  imageUrl: string;
  avgPrice: number;
};

const CommunityOverview = (props: CommunityOverviewProps) => {
  return (
    <div className={`${styles.communityOverviewCard}`}>
      <div className="w-full">
        <img src={props.imageUrl} alt={props.name} className="w-full" />
      </div>

      <div className="w-full">
        <div className="flex flex-col justify-between">
          <div className={`${styles.communityOverviewName}`}>
            {props.name}
          </div>
          <div className="pl-4 pr-4 m-1 mb-4">Average Price ${props.avgPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOverview;

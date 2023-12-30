import { Home } from "../../../types/types";
import CommunityHomeOverview from "./CommunityHomeOverview";

type CommunityHomeListProps = {
  homeList: Home[];
};

const CommunityHomeList = ({ homeList }: CommunityHomeListProps) => {
  return (
    <>
      {homeList.length === 0 ? (
        <div className="flex p-12 w-full h-full justify-center items-center text-2xl text-slate-400">
          No homes available in this community
        </div>
      ) : (
        <div>
            {homeList.map((home) => (
                <CommunityHomeOverview clasName="mb-10" key={home.id} home={home} />
            ))}
        </div>
      )}
    </>
  );
};

export default CommunityHomeList;

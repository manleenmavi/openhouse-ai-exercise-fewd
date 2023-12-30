import { Home } from "../../../types/types";
import CommunityHomeOverview from "./CommunityHomeOverview";

type CommunityHomeListProps = {
  homeList: Home[];
};

const CommunityHomeList = ({ homeList }: CommunityHomeListProps) => {
  return (
    <>
      {homeList.length === 0 ? (
        <div className="flex w-full h-full justify-center items-center text-2xl text-slate-400">
          No homes available in this community
        </div>
      ) : (
        <div>
            {/* Test */}
          <CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "House",
              communityId: "1",
            }}
            clasName="mb-5"
          />

          <CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "Townhome",
              communityId: "1",
            }}
          />

<CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "Condo",
              communityId: "1",
            }}
          />
<CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "Apartment",
              communityId: "1",
            }}
          />

<CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "Duplex",
              communityId: "1",
            }}
          />

          
<CommunityHomeOverview
            home={{
              area: 800,
              id: "1",
              price: 1000000,
              type: "Duplessx",
              communityId: "1",
            }}
          />

        </div>
      )}
    </>
  );
};

export default CommunityHomeList;

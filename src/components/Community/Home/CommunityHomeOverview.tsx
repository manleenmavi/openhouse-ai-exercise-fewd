import { Home } from "../../../types/types";
// Common House Type Images
import HomeTypeHouse from "../../../assets/images/home-types/home-type-house.png";
import HomeTypeTownhome from "../../../assets/images/home-types/home-type-townhome_townhouse.png";
import HomeTypeCondo from "../../../assets/images/home-types/home-type-condo.png";
import HomeTypeAppartment from "../../../assets/images/home-types/home-type-appartment.png";
import HomeTypeDuplex from "../../../assets/images/home-types/home-type-duplex.png";

type CommunityHomeOverviewProps = {
  home: Home;
  clasName?: string;
};

const CommunityHomeOverview = ({
  home,
  clasName,
}: CommunityHomeOverviewProps) => {
  return (
    <div
      className={`flex gap-2 flex-wrap min-w-fit w-3/4 mx-auto ${
        clasName ?? ""
      }`}
    >
      <div className="relative w-fit">
        <img
          src={
            home.type === "Townhome" || home.type === "Townhouse"
              ? HomeTypeTownhome
              : home.type === "Condo"
              ? HomeTypeCondo
              : home.type === "Apartment"
              ? HomeTypeAppartment
              : home.type === "Duplex"
              ? HomeTypeDuplex
              : HomeTypeHouse
          }
          alt="Home Type"
          className="w-full h-full object-cover max-w-64 rounded"
        />

        <div className="absolute z-0  top-0 left-0 bottom-0 right-0 shadow-[inset_-20px_0px_10px_3px_rgba(255,255,255,0.25)] bg-gradient-to-r from-transparent via-transparent to-[rgba(255,255,255,1)]" />
      </div>

      <div className="flex flex-col sm:gap-1 justify-center">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">
          {home.type}
        </div>
        <div className="text-base sm:text-lg text-slate-600">
          {home.area} sqft
        </div>
        <div className="text-base sm:text-lg text-slate-600">
          $
          {new Intl.NumberFormat("en-CA", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(home.price)}
        </div>
      </div>
    </div>
  );
};

export default CommunityHomeOverview;

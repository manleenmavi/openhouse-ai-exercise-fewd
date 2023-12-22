import image from "../../assets/header-background.png";

const CommunityListHeader = () => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Community Header"
        className="absolute w-1/2 max-w-[500px] top-0 left-0 z-[-1]"
      />
      <div className="text-7xl pl-[10%] pt-28">Gographic Communities </div>
    </div>
  );
};

export default CommunityListHeader;

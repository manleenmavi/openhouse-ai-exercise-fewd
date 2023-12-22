import CommunityOverview from "./CommunityOverview";

const CommunityList = () => {
  return (
    <div className="flex justify-evenly flex-wrap max-w-[80%] m-auto">

        {/* For Test */}
      <CommunityOverview
        name="Bowness"
        imageUrl="https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg"
        avgPrice={52}
      />

<CommunityOverview
        name="Bowness"
        imageUrl="https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg"
        avgPrice={52}
      />

<CommunityOverview
        name="Bowness"
        imageUrl="https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg"
        avgPrice={52}
      />

<CommunityOverview
        name="Bowness"
        imageUrl="https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg"
        avgPrice={52}
      />
    </div>
  );
};

export default CommunityList;

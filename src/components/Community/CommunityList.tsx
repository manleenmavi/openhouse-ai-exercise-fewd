import CommunityOverview from "./CommunityOverview";
import { Community } from "../../types/types";
import { useState, useEffect } from "react";

const CommunityList = () => {
  const [communityData, setCommunityData] = useState<Community[] | null>([]);

  const fetchCommunityData = async () => {
    try {
      console.log("fetching data");
      //   Using proxy to prevent CORS error
      const response = await fetch(
        "/api/googleapis-storage/openhouse-ai-fe-coding-test/communities.json"
      );
      console.log(response);
      const data = await response.json();
      console.log("data");
      console.log(data);
      setCommunityData(data);
    } catch (error) {
      console.error(error);
      setCommunityData(null);
    }
  };

  useEffect(() => {
    // Load the data from the API on first render
    fetchCommunityData();
  }, []);

  return (
    <div className="flex justify-evenly flex-wrap max-w-[80%] m-auto">
      {communityData?.map((community) => (
        <CommunityOverview
          key={community.id}
          name={community.name}
          imageUrl={community.imgUrl}
          avgPrice={50}
        />
      ))}
      {/* For Test */}
      <CommunityOverview
        name="Bowness"
        imageUrl="https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg"
        avgPrice={52}
      />
    </div>
  );
};

export default CommunityList;

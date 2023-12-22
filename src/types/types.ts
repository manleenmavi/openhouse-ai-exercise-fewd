
// API Response Structure from https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json
export interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

// API Response Structure from https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json
export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}
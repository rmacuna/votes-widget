type ICategoryLabel = `politics` | `business` | `entertainment`;

export interface ICelebrity {
  id: number;
  name: string;
  category: ICategoryLabel;
  picture: string;
  lastUpdated: string;
  positiveVotes: number;
  negativeVotes: number;
}

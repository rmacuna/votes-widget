export type ICategoryLabel = `politics` | `business` | `entertainment`;

export interface ISelectOption {
  id: string;
  name: string;
  value: string;
}
export interface ICelebrityInput {
  name: string;
  category: ICategoryLabel;
  picture: string;
}
export interface ICelebrity extends ICelebrityInput {
  id: string;
  lastUpdated: string;
  positiveVotes: number;
  negativeVotes: number;
}

import { ICategoryLabel, ICelebrityInput } from "../types";
import { v4 as uuidv4 } from "uuid";

export class Celebrity {
  id = uuidv4();
  name: string;
  category: ICategoryLabel;
  picture: string;
  description: string;
  lastUpdated = Date.now();
  positiveVotes = 0;
  negativeVotes = 0;

  constructor(args: ICelebrityInput) {
    this.name = args.name;
    this.category = args.category;
    this.picture = args.picture;
    this.description = args.description;
  }
}

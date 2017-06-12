export enum RReviewType {
  positive = 1,
  negative = -1,
  controversial = 0
}

export class RDocument {
  id: string;
  name: string;
  url: string;
  relevance: number;
  type: RReviewType;
}

export class RVideo {
  id: string; //hash of the video
  name: string;
}




export class RReview {
  id: number;
  type: RReviewType;
  confirmed_times: number;
  relying_docs: RDocument[];
}

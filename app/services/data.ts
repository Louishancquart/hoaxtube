export enum RReviewType {
  positive = 1,
  negative = -1,
  controversial = 0
}

export enum RDocumentType {
  video = 1,
  web = 2,
  pdf = 3,
  picture = 4,
  audio = 5,
  forum = 6
}

export class RUser {
  id: number;
  name: string;
  password: string;
}

export class RDocument {
  id: string;
  name: string;
  url: string;
  relevance: number;
  checked_times: number;
  // uploader: RUser;
  // uploaded_date: Date;
  type: RDocumentType;
  // creation_date: Date;
  positive_review: RReview;
  negative_review: RReview;
  controversial_review: RReview;
  parts: RPart[];
}

// export class Video{
//   id: string; //hash of the video
// name: string;
// }

export class RPart {
id: number;
start: number;
end: number;
checked_times: number;
creation_user: RUser;
creation_date: Date;
positive_review: RReview;
negative_review: RReview;
controversial_review: RReview;
}


export class RReview {
  id: number;
  type: RReviewType;
  confirmed_times: number;
  relying_docs: RDocument[];
}

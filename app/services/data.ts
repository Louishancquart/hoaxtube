export class Video{
  id: string; //hash of the video
  name: string;
  sequences: Sequence[];
}

export class Sequence{
  id: number;
  start: number;
  end: number;
}

export class Document{
  id: number;
  name: string;
  url: string;
  positive_review: Review;
  negative_review: Review;
  controversial_review: Review;
}

export class Review{
  id: number;
  type: number;
  confirmed_times: number;
  relying_docs: Document[];
}

export interface HeroBannerData {
  title: string;
  description: string;
  alignment: string;
  headingTop: string;
  image: {
    url: string;
  };
  ctAsCollection: {
    items: {
      _id: string;
      label: string;
      url: string;
    }[];
  };
}

export interface RatingData {
  title: string;
  description: string;
}

export interface GameSliderData {
  heading: string;
  description: string;
  mediaCollection: {
    items: mediaCollectionItem[];
  };
}

export interface ImageItem {
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
}

export interface WorldOfPlayData {
  title: string;
  imageCollection: {
    items: ImageItem[];
  };
}

export interface HiringData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  ctAsCollection: {
    items: {
      _id: string;
      label: string;
      url: string;
    }[];
  };
}

interface ContentItem {
  image: {
    url: string;
  };
  date: string;
  description: string;
}

export interface NewsData {
  title: string;
  contentCollection: {
    items: ContentItem[];
  };
}
export interface FaqData {
  title: string;
  questionCollection: {
    items: QuestionItem[];
  };
}

interface mediaCollectionItem {
  title: string;
  subtitle: string;
  img: {
    url: string;
  };
  video: {
    url: string;
  };
}

interface QuestionItem {
  question: string;
  answer: string;
}

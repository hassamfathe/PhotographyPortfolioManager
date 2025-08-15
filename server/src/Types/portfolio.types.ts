export interface PortfolioDataType {
  heading: string;
  subheading: string;
  summary: string;

  metrics: {
    totalProjects: number;
    totalClients: number;
    achievements: number;
    yearsActive: number;
  };

  offerings: {
    title: string;
    details: string;
  }[];

  feedback: {
    user: string;
    message: string;
    score: number;
    profilePic: string;
  }[];

  galleries: {
    title: string;
    description: string;
    category: string;
    photos: string[];
    date: Date;
  }[];

  contactDetails: {
    phoneNumber: string;
    emailAddress: string;
    location: string;
    socialLink1: string;
    socialLink2: string;
    websiteUrl: string;
  };

  actionBlock: {
    heading: string;
    buttonLabel: string;
    buttonUrl: string;
  };

  createdOn: Date;
}

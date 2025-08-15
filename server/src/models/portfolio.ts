import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  heading: String,
  subheading: String,
  summary: String,

  metrics: {
    totalProjects: Number,
    totalClients: Number,
    achievements: Number,
    yearsActive: Number,
  },

  offerings: [
    {
      title: String,
      info: String,
    }
  ],

  media: {
    sectionOne: [String],
    sectionTwo: [String],
    sectionThree: [String],
    sectionFour: [String],
    sectionFive: [String],
  },

  feedback: [
    {
      user: String,
      message: String,
      score: Number,
      profilePic: String,
    }
  ],

  contactDetails: {
    phoneNumber: String,
    emailAddress: String,
    location: String,
    socialLink1: String,
    socialLink2: String,
    websiteUrl: String,
  },

  actionBlock: {
    heading: String,
    buttonText: String,
    buttonUrl: String,
  },

  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

export default Portfolio;

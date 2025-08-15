import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  categoryOne: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ],
  categoryTwo: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ],
  categoryThree: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ],
  categoryFour: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ],
  categoryFive: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ]
});

const Gallery = mongoose.model("Gallery", GallerySchema);

export default Gallery;

import Home from "@/components/Home/Home";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import HomeSEO from "@/components/Home/HomeSEO";

export const metadata: Metadata = {
  title: "Black Rock Visuals | Creative Photography Studio",
  description: "Capturing timeless moments through artistic photography. Explore Black Rock Visuals' work in weddings, portraits, fashion, and more.",
  keywords: [
    "Photography Studio",
    "Black Rock Visuals",
    "Creative Photographer",
    "Wedding Photography",
    "Portrait Shoots",
    "Fashion Photography",
    "Photography in Pakistan",
    "Professional Photographer"
  ],
  openGraph: {
    title: "Black Rock Visuals | Creative Photography Studio",
    description: "Discover the art of storytelling through the lens with Black Rock Visuals.",
    url: "https://blackrockvisuals.vercel.app/", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://blackrockvisuals.vercel.app/BlackRockVisuals/CarsStreets.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Black Rock Visuals Hero Image",
      },
    ],
  }
};

export default async function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <HomeSEO/>
      <Footer />
    </>
  );
}

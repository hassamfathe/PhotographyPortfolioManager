import Portfolio from "@/components/Portfolio/Portfolio";
import { Metadata } from "next";

// Static metadata for SEO and OpenGraph/Twitter previews
export const metadata: Metadata = {
  title: "Portfolio | Black Rock Visuals",
  description: "Discover the creative photography portfolio of Black Rock Visuals. Weddings, portraits, events, fashion, and more.",
  keywords: [
    "Photography Portfolio",
    "Black Rock Visuals",
    "Wedding Photographer",
    "Event Photography",
    "Fashion Shoots",
    "Creative Photography",
    "Portrait Photography"
  ],
  icons:{
    icon:'./favicon.ico'
  },
  openGraph: {
    title: "Portfolio | Black Rock Visuals",
    description: "A stunning collection of photography work by Black Rock Visuals, showcasing creativity, emotion, and style.",
    url: "https://blackrockvisuals.vercel.app/portfolio", // Replace with actual domain
    type: "website",
    images: [
      {
        url: "https://blackrockvisuals.vercel.app/BlackRockVisuals/CarsStreets.png", 
        width: 1200,
        height: 630,
        alt: "Black Rock Visuals Portfolio Cover",
      },
    ],
  }
};

export default async function PortfolioPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/portfolioRoutes/fetchPortfolioDataRouteName`);

  const contentType = response.headers.get("content-type");

  if (!response.ok || !contentType?.includes("application/json")) {
    console.error("Error While Fetching Portfolio Data: ", await response.text());
    throw new Error("Error While Fetching Portfolio Data");
  }

  const responseData = await response.json();
  const portfolioData = responseData.data[0];

  return <Portfolio portfolioData={portfolioData} />;
}

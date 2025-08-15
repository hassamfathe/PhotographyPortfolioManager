import Gallery from "@/components/Gallery/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Black Rock Visuals",
  description: "Explore our exclusive photography gallery at Black Rock Visuals. From weddings to fashion, every photo tells a story.",
  keywords: ["Photography", "Gallery", "Black Rock Visuals", "Wedding Photography", "Fashion Shoots", "Creative Photography"],
  icons:{
    icon:'./favicon.ico'
  },
  openGraph: {
    title: "Gallery | Black Rock Visuals",
    description: "Step into our visual world through the curated photography gallery. Moments frozen in time.",
    url: "https://blackrockvisuals.vercel.app/gallery",
    type: "website",
    images: [
      {
        url: "https://blackrockvisuals.vercel.app/BlackRockVisuals/Cars/482738584_18013080941701445_9167949602051170189_n.jpg", // Replace with your real OG image URL
        width: 1200,
        height: 630,
        alt: "Gallery preview from Black Rock Visuals",
      },
    ],
  }
  
};

export default async function GalleryPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/galleryRoutes/fetchGalleryDataRouteName`,
    { next: { revalidate: 10 } }
  );

  const contentType = response.headers.get("content-type");

  if (!response.ok || !contentType?.includes("application/json")) {
    console.error("Error While Fetching Gallery Data: ", await response.text());
    throw new Error("Error While Fetching Gallery Data");
  }

  const data = await response.json();
  const galleryData = data.data[0];

  return <Gallery galleryData={galleryData} />;
}

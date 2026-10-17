import type { StaticImageData } from "next/image";
import forum1 from "@/public/forum1.jpeg";
import forum2 from "@/public/forum2.jpeg";
import forum3 from "@/public/forum3.jpeg";
import forum4 from "@/public/forum4.jpeg";
import forum5 from "@/public/forum5.jpeg";
import forum6 from "@/public/forum6.jpeg";
import forum7 from "@/public/forum7.jpeg";
import forum8 from "@/public/forum8.jpeg";
import forum9 from "@/public/forum9.jpeg";
import sensibilisation1 from "@/public/sensibilisation1.jpeg";
import sensibilisation2 from "@/public/sensibilisation2.jpeg";
import sensibilisation3 from "@/public/sensibilisation3.jpeg";
import sensibilisation4 from "@/public/sensibilisation4.jpeg";
import sensibilisation5 from "@/public/sensibilisation5.jpeg";
import sensibilisation6 from "@/public/sensibilisation6.jpeg";
import sensibilisation7 from "@/public/sensibilisation7.jpeg";

export type GalleryCategoryId = "forum" | "moto-taxi";

export type GalleryImage = {
  id: string;
  src: StaticImageData;
  /** 1-based position within its category, used to build the localized alt text. */
  n: number;
  category: GalleryCategoryId;
};

export type GalleryCategory = {
  id: GalleryCategoryId;
  images: GalleryImage[];
};

const build = (category: GalleryCategoryId, sources: StaticImageData[]): GalleryCategory => ({
  id: category,
  images: sources.map((src, i) => ({
    id: `${category}-${i + 1}`,
    src,
    n: i + 1,
    category,
  })),
});

export const galleryCategories: GalleryCategory[] = [
  build("forum", [
    forum1,
    forum2,
    forum3,
    forum4,
    forum5,
    forum6,
    forum7,
    forum8,
    forum9,
  ]),
  build("moto-taxi", [
    sensibilisation1,
    sensibilisation2,
    sensibilisation3,
    sensibilisation4,
    sensibilisation5,
    sensibilisation6,
    sensibilisation7,
  ]),
];

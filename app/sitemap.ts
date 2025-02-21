import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sistemas/flexxus`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sistemas/fudo`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sistemas/alegra`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sistemas/wubook`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sistemas/facil-virtual`,
    },
  ];
}

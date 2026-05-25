import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Aryan's Portfolio",
  description: "Showcasing my coding journey across Machine Learning and algorithmic challenges.",
  keywords: [
    "Aryan",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Flask",
    "Data Pipelines",
    "Portfolio",
    "AI Engineer",
    "Predictive Modeling"
  ] as Array<string>,
  authors: {
    name: "Aryan",
    url: "https://github.com/aaryan01313",
  },
} as const;
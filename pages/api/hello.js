// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { formatDate } from "@/utils/formatDate";

const user = {
  author: "Rajesh Kumar",
  date: formatDate(new Date()),
  title: "Ambay Capital",
  description: "Your Insurance Advisor and Financial Planner",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
  slug: "insurance_investment_savings",
}

export default function handler(req, res) {
  // res.status(200).json({ name: "Ambay Capital" });
  res.status(200).json(user);
}

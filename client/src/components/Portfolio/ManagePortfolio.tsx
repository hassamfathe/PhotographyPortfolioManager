"use client";

import axios from "axios";
import { PortfolioDataType } from "../Types/PortfolioData.types";
import './ManagePortfolio.css';
import { useEffect, useState } from "react";
import mergeWith from 'lodash/mergeWith';
import customMerge from "../Utility/CustomMerge";
import RecurFormPortfolio from "../Utility/FormUse/RecurFormPortfolio";

export default function PortfolioForm() {
  const [portfolioData, setPortfolioData] = useState<PortfolioDataType>({
    heading: "",
    subheading: "",
    summary: "",
    metrics: {
      totalProjects: 0,
      totalClients: 0,
      achievements: 0,
      yearsActive: 0,
    },
    offerings: [
      {
        title: "",
        details: "",
      },
    ],
    feedback: [], // ✅ renamed from "testimonials"
    galleries: [], // ✅ missing before
    contactDetails: { // ✅ renamed and aligned
      phoneNumber: "",
      emailAddress: "",
      location: "",
      socialLink1: "",
      socialLink2: "",
      websiteUrl: "",
    },
    actionBlock: { // ✅ renamed and aligned
      heading: "",
      buttonLabel: "",
      buttonUrl: "",
    },
    createdOn: new Date(), // ✅ renamed from "createdAt"
  });

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/portfolioRoutes/fetchPortfolioDataRouteName`
        );
        const fetched = response.data.data[0];
        const merged = mergeWith({}, portfolioData, fetched, customMerge);
        setPortfolioData(merged);
      } catch (error) {
        console.error("Error While Fetching The Form Data,", error);
      }
    };
    fetchFormData();
  }, []);

  const handleFormSubmit = async (data: PortfolioDataType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/apiRoutes/portfolioRoutes/savePortfolioDataRouteName`,
        { data }
      );
      if (response.data.workFlag) {
        alert("Portfolio Data Updated!");
      }
    } catch (error) {
      console.error("Error While Submitting The Data,", error);
    }
  };

  return (
    <div className="manage-portfolio-page">
      <RecurFormPortfolio<PortfolioDataType>
        initialData={portfolioData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

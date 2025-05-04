import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import SearchAnalytics from "@/components/search/SearchAnalytics";



export default function SearchAnalyticsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Search Analytics" />
      <SearchAnalytics />
    </div>
  );
} 
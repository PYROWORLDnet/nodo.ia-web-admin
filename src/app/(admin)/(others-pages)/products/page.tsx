import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import ProductManagement from "@/components/products/ProductManagement";

export const metadata: Metadata = {
  title: "Product Management | TailAdmin - Next.js Dashboard Template",
  description: "Product and listing management dashboard with analytics and promotion features",
};

export default function ProductsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Product Management" />
      <ProductManagement />
    </div>
  );
} 
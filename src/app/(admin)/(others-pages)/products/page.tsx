import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import ProductManagement from "@/components/products/ProductManagement";



export default function ProductsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Product Management" />
      <ProductManagement />
    </div>
  );
} 
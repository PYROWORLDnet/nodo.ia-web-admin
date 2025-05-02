import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import AccountBilling from "@/components/account/AccountBilling";

export const metadata: Metadata = {
    title: "Billing | TailAdmin - Next.js Dashboard Template",
    description: "Billing dashboard with analytics and promotion features",
};

export default function BillingPage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Billing" />
            <AccountBilling />
        </div>
    );
} 
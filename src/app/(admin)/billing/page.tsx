import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import AccountBilling from "@/components/account/AccountBilling";


export default function BillingPage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Billing" />
            <AccountBilling />
        </div>
    );
} 
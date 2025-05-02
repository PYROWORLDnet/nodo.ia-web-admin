"use client";
import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import Badge from "@/components/ui/badge/Badge";
import { ReceiptIcon, HistoryIcon } from "@/icons";

interface Subscription {
  plan: 'free' | 'analytics' | 'promo';
  startDate: string;
  endDate: string;
  credits: number;
  features: string[];
  price: number;
}

interface Payment {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: 'completed' | 'pending' | 'failed';
  invoiceUrl?: string;
  type: 'subscription' | 'credits' | 'promotion';
}

interface BillingInfo {
  cardNumber: string;
  expiryDate: string;
  cardholderName: string;
  billingAddress: string;
  taxId?: string;
}

export default function AccountBilling() {
  const [subscription, setSubscription] = useState<Subscription>({
    plan: 'free',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    credits: 0,
    features: ['Basic product management', 'Up to 10 products', 'Basic analytics'],
    price: 0
  });

  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '1',
      date: '2024-01-15',
      amount: 29.99,
      description: 'Analytics Plan - Monthly',
      status: 'completed',
      type: 'subscription',
      invoiceUrl: '#'
    },
    {
      id: '2',
      date: '2024-02-15',
      amount: 29.99,
      description: 'Analytics Plan - Monthly',
      status: 'completed',
      type: 'subscription',
      invoiceUrl: '#'
    },
    {
      id: '3',
      date: '2024-02-20',
      amount: 9.99,
      description: '10 Highlight Credits',
      status: 'completed',
      type: 'credits',
      invoiceUrl: '#'
    }
  ]);

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    cardNumber: '**** **** **** 1234',
    expiryDate: '12/25',
    cardholderName: 'John Doe',
    billingAddress: '123 Business St, Suite 100, New York, NY 10001',
    taxId: 'XX-XXXXXXX'
  });

  const [showBillingModal, setShowBillingModal] = useState(false);
  const [showBuyCreditsModal, setShowBuyCreditsModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [newBillingInfo, setNewBillingInfo] = useState<BillingInfo>(billingInfo);
  const [creditAmount, setCreditAmount] = useState(10);
  const [paymentFilter, setPaymentFilter] = useState<'all' | 'subscription' | 'credits' | 'promotion'>('all');

  const handleUpdateBillingInfo = () => {
    setBillingInfo(newBillingInfo);
    setShowBillingModal(false);
  };

  const handleBuyCredits = () => {
    setSubscription(prev => ({
      ...prev,
      credits: prev.credits + creditAmount
    }));
    setShowBuyCreditsModal(false);
  };

  const handleUpgradePlan = (newPlan: 'analytics' | 'promo') => {
    setSubscription(prev => ({
      ...prev,
      plan: newPlan,
      features: newPlan === 'analytics' 
        ? ['Advanced analytics', 'Unlimited products', 'Priority support', 'Custom reports']
        : ['Promo credits', 'Featured listings', 'Priority support'],
      price: newPlan === 'analytics' ? 29.99 : 49.99
    }));
    setShowUpgradeModal(false);
  };

  const filteredPayments = payments.filter(payment => 
    paymentFilter === 'all' || payment.type === paymentFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Billing & Subscription</h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setShowBillingModal(true)}>
            Update Billing Info
          </Button>
          <Button onClick={() => setShowBuyCreditsModal(true)}>
            Buy Credits
          </Button>
          <Button onClick={() => setShowUpgradeModal(true)}>
            Upgrade Plan
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Subscription Status */}
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Current Subscription</h2>
            <p className="text-sm text-gray-500">Your current plan and available credits</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Plan</span>
              <Badge variant="light" color={subscription.plan === 'free' ? 'light' : 'primary'}>
                {subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1)}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Start Date</span>
              <span className="text-sm">{subscription.startDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">End Date</span>
              <span className="text-sm">{subscription.endDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Available Credits</span>
              <span className="text-sm">{subscription.credits}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Monthly Price</span>
              <span className="text-sm">${subscription.price.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Plan Features:</h3>
              <ul className="space-y-1">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Billing Information</h2>
            <p className="text-sm text-gray-500">Your current payment method</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Card Number</span>
              <span className="text-sm">{billingInfo.cardNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Expiry Date</span>
              <span className="text-sm">{billingInfo.expiryDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Cardholder Name</span>
              <span className="text-sm">{billingInfo.cardholderName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Billing Address</span>
              <span className="text-sm">{billingInfo.billingAddress}</span>
            </div>
            {billingInfo.taxId && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Tax ID</span>
                <span className="text-sm">{billingInfo.taxId}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Payment History</h2>
          <p className="text-sm text-gray-500">Your recent transactions</p>
        </div>
        <div className="mb-4">
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value as any)}
            className="rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
          >
            <option value="all">All Transactions</option>
            <option value="subscription">Subscriptions</option>
            <option value="credits">Credits</option>
            <option value="promotion">Promotions</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">{payment.date}</td>
                  <td className="py-3 px-4">{payment.description}</td>
                  <td className="py-3 px-4">${payment.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="light"
                      color={
                        payment.status === 'completed'
                          ? 'success'
                          : payment.status === 'pending'
                          ? 'warning'
                          : 'error'
                      }
                    >
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    {payment.invoiceUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(payment.invoiceUrl, '_blank')}
                      >
                        <ReceiptIcon className="w-4 h-4 mr-2" />
                        Invoice
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Billing Info Modal */}
      {showBillingModal && (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Update Billing Information</h3>
              <p className="text-sm text-gray-500">Update your payment method details</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="block text-sm font-medium">Card Number</label>
                <input
                  id="cardNumber"
                  value={newBillingInfo.cardNumber}
                  onChange={(e) =>
                    setNewBillingInfo({ ...newBillingInfo, cardNumber: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="expiryDate" className="block text-sm font-medium">Expiry Date</label>
                <input
                  id="expiryDate"
                  value={newBillingInfo.expiryDate}
                  onChange={(e) =>
                    setNewBillingInfo({ ...newBillingInfo, expiryDate: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cardholderName" className="block text-sm font-medium">Cardholder Name</label>
                <input
                  id="cardholderName"
                  value={newBillingInfo.cardholderName}
                  onChange={(e) =>
                    setNewBillingInfo({ ...newBillingInfo, cardholderName: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="billingAddress" className="block text-sm font-medium">Billing Address</label>
                <textarea
                  id="billingAddress"
                  value={newBillingInfo.billingAddress}
                  onChange={(e) =>
                    setNewBillingInfo({ ...newBillingInfo, billingAddress: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="taxId" className="block text-sm font-medium">Tax ID (Optional)</label>
                <input
                  id="taxId"
                  value={newBillingInfo.taxId || ''}
                  onChange={(e) =>
                    setNewBillingInfo({ ...newBillingInfo, taxId: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowBillingModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateBillingInfo}>Save Changes</Button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Credits Modal */}
      {showBuyCreditsModal && (
        <div className="fixed inset-0 bg-[#00000072] flex items-center justify-center z-[999999]">
          <div className="bg-white dark:bg-[#000] border-2 border-[var(--color-gray-800)] rounded-lg p-6 w-full max-w-md">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Buy Credits</h3>
              <p className="text-sm text-gray-500">Purchase highlight credits for your products</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="creditAmount" className="block text-sm font-medium">Number of Credits</label>
                <select
                  id="creditAmount"
                  value={creditAmount.toString()}
                  onChange={(e) => setCreditAmount(parseInt(e.target.value))}
                  className="w-full bg-[#000000] outline-none rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2 dark:border-var(--color-gray-800)"
                >
                  <option value="10">10 Credits - $9.99</option>
                  <option value="50">50 Credits - $39.99</option>
                  <option value="100">100 Credits - $69.99</option>
                </select>
              </div>
              <div className="bg-gray-50 dark:bg-[#000] border-2 border-[var(--color-gray-800)] p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">What are credits?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Credits allow you to highlight your products in search results and featured sections.
                  Each credit can be used to highlight one product for 30 days.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowBuyCreditsModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleBuyCredits}>Purchase</Button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Plan Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-[#00000072] flex items-center justify-center z-[999999]">
          <div className="bg-white dark:bg-[#000] border-2 border-[var(--color-gray-800)] rounded-lg p-6 w-full max-w-md">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Upgrade Your Plan</h3>
              <p className="text-sm text-gray-500">Choose a plan that best fits your needs</p>
            </div>
            <div className="space-y-4">
              <div className="border border-[var(--color-gray-800)] rounded-lg p-4 hover:border-primary cursor-pointer"
                   onClick={() => handleUpgradePlan('analytics')}>
                <h4 className="font-medium">Analytics Plan</h4>
                <p className="text-sm text-gray-500">$29.99/month</p>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm">• Advanced analytics</li>
                  <li className="text-sm">• Unlimited products</li>
                  <li className="text-sm">• Priority support</li>
                  <li className="text-sm">• Custom reports</li>
                </ul>
              </div>
              <div className="border border-[var(--color-gray-800)] rounded-lg p-4 hover:border-primary cursor-pointer"
                   onClick={() => handleUpgradePlan('promo')}>
                <h4 className="font-medium">Promo Plan</h4>
                <p className="text-sm text-gray-500">$49.99/month</p>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm">• Promo credits</li>
                  <li className="text-sm">• Featured listings</li>
                  <li className="text-sm">• Priority support</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
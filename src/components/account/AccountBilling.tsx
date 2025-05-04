/* eslint-disable */
"use client";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import { ReceiptIcon } from "@/icons/navigation";
import { BadgeCheck, BadgeIcon } from "lucide-react";
import { useState } from "react";

interface Subscription {
  plan: 'free' | 'smart' | 'pro';
  startDate: string;
  endDate: string;
  credits: number;
  features: string[];
  price: number;
  includedHighlights?: number;
  remainingHighlights?: number;
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
    features: [
      'Up to 3 active listings',
      'No analytics',
      'Buy promo credits separately'
    ],
    price: 0,
    includedHighlights: 0,
    remainingHighlights: 0
  });

  const [payments] = useState<Payment[]>([
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

  const handleUpgradePlan = (newPlan: 'smart' | 'pro') => {
    setSubscription(prev => ({
      ...prev,
      plan: newPlan,
      features: newPlan === 'smart'
        ? [
          'Unlimited listings',
          'Full access to market analytics',
          'Top searches & search trends',
          'Category insights',
          'Get verified badge by nodo'
        ]
        : [
          'Everything in Smart Plan',
          'Highlight up to 3 listings/month included',
          'Priority spots in search results',
          '50% discount on additional promo credits'
        ],
      price: newPlan === 'smart' ? 29 : 79,
      includedHighlights: newPlan === 'pro' ? 3 : 0,
      remainingHighlights: newPlan === 'pro' ? 3 : 0
    }));
    setShowUpgradeModal(false);
  };

  const filteredPayments = payments.filter(payment =>
    paymentFilter === 'all' || payment.type === paymentFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl font-bold">Billing & Subscription</h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 w-full sm:w-auto">
          <Button variant="outline" onClick={() => setShowBillingModal(true)} className="w-full sm:w-auto">Update Billing Info</Button>
          <Button onClick={() => setShowBuyCreditsModal(true)} className="w-full sm:w-auto">Buy Credits</Button>
          <Button onClick={() => setShowUpgradeModal(true)} className="w-full sm:w-auto">Upgrade Plan</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscription Status */}
        <div className="rounded-lg border border-gray-200 p-4 sm:p-6 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Current Subscription</h2>
            <p className="text-sm text-gray-500">Your current plan and available credits</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Plan</span>
                <Badge variant="light" color={subscription.plan === 'free' ? 'light' : subscription.plan === 'smart' ? 'blue' : 'yellow'}>
              <BadgeCheck className={`w-6 h-6 ${subscription.plan === 'free' ? 'text-gray-500' : subscription.plan === 'smart' ? 'text-blue-500' : 'text-[#FFD700]'}`} />
                
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
        <div className="rounded-lg border border-gray-200 p-4 sm:p-6 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
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
      <div className="rounded-lg border border-gray-200 p-4 sm:p-6 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Payment History</h2>
          <p className="text-sm text-gray-500">Your recent transactions</p>
        </div>
        <div className="mb-4">
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value as any)}
            className="rounded-lg border-2 border-gray-200 px-4 py-2 dark:border-gray-700 w-full sm:w-auto"
          >
            <option value="all">All Transactions</option>
            <option value="subscription">Subscriptions</option>
            <option value="credits">Credits</option>
            <option value="promotion">Promotions</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Date</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Description</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Amount</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Status</th>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-2 sm:py-3 sm:px-4">{payment.date}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">{payment.description}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">${payment.amount.toFixed(2)}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
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
                  <td className="py-2 px-2 sm:py-3 sm:px-4">
                    {payment.invoiceUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(payment.invoiceUrl, '_blank')}
                        className="w-full sm:w-auto"
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
        <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-[999999]">
          <div className="bg-white dark:bg-[#000000] rounded-lg p-4 sm:p-6 md:w-[50%] w-[90%] mx-2 h-[70vh] flex flex-col border-2 border-[var(--color-gray-800)]">
            <div className="overflow-y-auto flex-1" style={{ scrollbarWidth: 'none' }}>
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
                    className="w-full rounded-lg bg-transparent outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 border-2 border-[var(--color-gray-800)] px-4 py-2"
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
                    className="w-full rounded-lg bg-transparent outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 border-2 border-[var(--color-gray-800)] px-4 py-2"
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
                    className="w-full rounded-lg bg-transparent outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 border-2 border-[var(--color-gray-800)] px-4 py-2"
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
                    className="w-full rounded-lg bg-transparent outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 border-2 border-[var(--color-gray-800)] px-4 py-2"
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
                    className="w-full rounded-lg bg-transparent outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 border-2 border-[var(--color-gray-800)] px-4 py-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end sm:space-x-2">
              <Button variant="outline" onClick={() => setShowBillingModal(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={handleUpdateBillingInfo} className="w-full sm:w-auto bg-brand-400">Save Changes</Button>
            </div>
          </div>
        </div>
      )}

      {/* Buy Credits Modal */}
      {showBuyCreditsModal && (
        <div className="fixed inset-0 bg-[#00000072] flex items-center justify-center z-[999999]">
          <div className="bg-white dark:bg-[#000] border-2 border-[var(--color-gray-800)] rounded-lg p-4 sm:p-6 md:w-[50%] w-[90%] mx-2 overflow-y-auto max-h-[90vh]">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Buy Credits</h3>
              <p className="text-sm text-gray-500">Purchase highlight credits for your listings</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="creditAmount" className="block text-sm font-medium">Number of Credits</label>
                <select
                  id="creditAmount"
                  value={creditAmount.toString()}
                  onChange={(e) => setCreditAmount(parseInt(e.target.value))}
                  className="w-full bg-white dark:bg-[#000000] outline-none rounded-lg border-2 border-[var(--color-gray-800)] px-4 py-2 dark:border-var(--color-gray-800)"
                >
                  <option value="1">1 Credit - ${subscription.plan === 'pro' ? '1.50' : '3.00'}</option>
                  <option value="5">5 Credits - ${subscription.plan === 'pro' ? '7.00' : '14.00'}</option>
                  <option value="10">10 Credits - ${subscription.plan === 'pro' ? '12.50' : '25.00'}</option>
                </select>
              </div>
              <div className="bg-gray-50 dark:bg-[#000] border-2 border-[var(--color-gray-800)] p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">About Credits</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• 1 credit = highlight 1 listing for 3 days</li>
                  <li>• Highlighted listings appear with a colored border or badge</li>
                  <li>• {subscription.plan === 'pro' ? '50% discount on all credits' : 'Standard pricing: $3/credit'}</li>
                  <li>• Bulk option: 10 credits for ${subscription.plan === 'pro' ? '12.50' : '25.00'}</li>
                </ul>
              </div>
              {subscription.plan === 'pro' && (subscription.remainingHighlights ?? 0) > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Pro Plan Benefits</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    You have {subscription.remainingHighlights} free highlight{(subscription.remainingHighlights ?? 0) !== 1 ? 's' : ''} remaining this month.
                    These highlights include both the colored border AND priority placement in search results.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end sm:space-x-2">
              <Button variant="outline" onClick={() => setShowBuyCreditsModal(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={handleBuyCredits} className="w-full sm:w-auto">
                Purchase Credits
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Plan Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-[#00000072] flex items-center justify-center z-[999999] p-4">
          <div className="bg-white dark:bg-[#000] border-2 border-[var(--color-gray-800)] rounded-lg w-full max-w-[500px]">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Upgrade Your Plan</h3>
                  <p className="text-sm text-gray-500">Choose a plan that best fits your needs</p>
                </div>
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="text-gray-500"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="space-y-3">
                {/* Smart Plan */}
                <div
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all
                    ${subscription.plan === 'smart'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'}`}
                  onClick={() => handleUpgradePlan('smart')}
                >
                  {/* Selection Indicator */}
                  <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${subscription.plan === 'smart'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'}`}
                  >
                    {subscription.plan === 'smart' && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                      <BadgeCheck className="w-10 h-10 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Smart Plan</h4>
                      <p className="text-sm text-gray-500">$29/month</p>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Unlimited listings
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Full access to market analytics
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Top searches & search trends
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Category insights
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Get a verified badge 
                    </li>
                  </ul>
                </div>

                {/* Pro Plan */}
                <div
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all
                    ${subscription.plan === 'pro'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-500'}`}
                  onClick={() => handleUpgradePlan('pro')}
                >
                  {/* Selection Indicator */}
                  <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${subscription.plan === 'pro'
                      ? 'border-yellow-500 bg-yellow-500'
                      : 'border-gray-300'}`}
                  >
                    {subscription.plan === 'pro' && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <BadgeCheck className="w-10 h-10 text-[#FFD700]"/>
                    <div>
                      <h4 className="font-medium">Pro Plan</h4>
                      <p className="text-sm text-gray-500">$79/month</p>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Everything in Smart Plan
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Highlight up to 3 listings/month included
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      Priority spots in search results
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="mr-2 text-brand-500">✓</span>
                      50% discount on additional promo credits
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowUpgradeModal(false)}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    const selectedPlan = subscription.plan === 'smart' ? 'smart' : 'pro';
                    handleUpgradePlan(selectedPlan);
                  }}
                  className="w-full sm:w-auto"
                >
                  Confirm Selection
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
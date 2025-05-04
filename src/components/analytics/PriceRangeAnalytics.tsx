'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/ui/charts/BarChart';

interface PriceRangeAnalyticsProps {
  timeRange: string;
  detailed?: boolean;
}

export function PriceRangeAnalytics({ timeRange, detailed = false }: PriceRangeAnalyticsProps) {
  // Mock data - replace with real data from your API
  const priceRangeData = [
    { range: '$0 - $50,000', count: 1200, category: 'Electrónicos' },
    { range: '$50,000 - $100,000', count: 850, category: 'Servicios' },
    { range: '$100,000 - $200,000', count: 1500, category: 'Generales' },
    { range: '$200,000 - $350,000', count: 2500, category: 'Autos' },
    { range: '$350,000 - $500,000', count: 1800, category: 'Inmuebles' },
    { range: '$500,000+', count: 900, category: 'Inmuebles' },
  ];

  const chartData = {
    labels: priceRangeData.map(item => item.range),
    datasets: [
      {
        label: 'Search Count',
        data: priceRangeData.map(item => item.count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle>Popular Price Ranges ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
      </CardHeader>
      <CardContent>
        {detailed ? (
          <div className="h-[400px]">
            <BarChart data={chartData} />
          </div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Price Range</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Searches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {priceRangeData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{item.range}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.category}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.count}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">searches</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 
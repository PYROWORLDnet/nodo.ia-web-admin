'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/ui/charts/BarChart';

interface CompetitorInsightsProps {
  timeRange: string;
  detailed?: boolean;
}

export function CompetitorInsights({ timeRange, detailed = false }: CompetitorInsightsProps) {
  // Mock data - replace with real data from your API
  const competitorData = [
    { keyword: 'Toyota Hilux', competitors: 15, avgPrice: '$350,000', marketShare: '25%' },
    { keyword: 'Apartamento Santo Domingo', competitors: 25, avgPrice: '$450,000', marketShare: '15%' },
    { keyword: 'iPhone 14', competitors: 8, avgPrice: '$45,000', marketShare: '30%' },
    { keyword: 'Casa en Santiago', competitors: 20, avgPrice: '$550,000', marketShare: '20%' },
    { keyword: 'Honda Civic', competitors: 12, avgPrice: '$280,000', marketShare: '22%' },
  ];

  const chartData = {
    labels: competitorData.map(item => item.keyword),
    datasets: [
      {
        label: 'Competitors',
        data: competitorData.map(item => item.competitors),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle>Competitor Insights ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Competitor</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Market Share</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Avg Price</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Competitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {competitorData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{item.keyword}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.marketShare}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.avgPrice}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.competitors}</span>
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
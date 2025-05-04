'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/ui/charts/BarChart';

interface CallToActionStatsProps {
  timeRange: string;
  detailed?: boolean;
}

export function CallToActionStats({ timeRange, detailed = false }: CallToActionStatsProps) {
  // Mock data - replace with real data from your API
  const ctaData = [
    { feature: 'Highlighted Listings', views: 2500, normalViews: 850, improvement: '300%' },
    { feature: 'Contact Button', clicks: 1800, impressions: 5000, rate: '36%' },
    { feature: 'WhatsApp Direct', clicks: 1200, impressions: 3000, rate: '40%' },
    { feature: 'Call Now', clicks: 800, impressions: 2000, rate: '40%' },
    { feature: 'Email Contact', clicks: 600, impressions: 2500, rate: '24%' },
  ];

  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Highlighted Views',
        data: [1500, 1800, 2100, 2300, 2500],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
      {
        label: 'Normal Views',
        data: [500, 600, 700, 800, 850],
        borderColor: 'rgb(156, 163, 175)',
        tension: 0.4,
      },
    ],
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle>Call-to-Action Stats ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
      </CardHeader>
      <CardContent>
        {detailed ? (
          <div className="h-[400px]">
            <BarChart data={chartData} />
          </div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Action</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Count</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {ctaData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{item.feature}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.views ? (
                          <>
                            {item.views} views vs {item.normalViews} normal
                          </>
                        ) : (
                          <>
                            {item.clicks} clicks / {item.impressions} impressions ({item.rate})
                          </>
                        )}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      {item.improvement && (
                        <span className="text-sm font-medium text-green-500">
                          {item.improvement} improvement
                        </span>
                      )}
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
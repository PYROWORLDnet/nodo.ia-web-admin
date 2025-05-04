'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart } from '@/components/ui/charts/PieChart';

interface SearchToClickProps {
  timeRange: string;
  detailed?: boolean;
}

export function SearchToClick({ timeRange, detailed = false }: SearchToClickProps) {
  // Mock data - replace with real data from your API
  const conversionData = [
    { category: 'Autos', searches: 2500, clicks: 850, conversion: '34%' },
    { category: 'Inmuebles', searches: 1800, clicks: 720, conversion: '40%' },
    { category: 'Servicios', searches: 1500, clicks: 450, conversion: '30%' },
    { category: 'Electrónicos', searches: 1200, clicks: 360, conversion: '30%' },
    { category: 'Generales', searches: 900, clicks: 270, conversion: '30%' },
  ];

  const chartData = {
    labels: conversionData.map(item => item.category),
    datasets: [
      {
        data: conversionData.map(item => (item.clicks / item.searches) * 100),
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(245, 158, 11, 0.5)',
          'rgba(239, 68, 68, 0.5)',
          'rgba(139, 92, 246, 0.5)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle>Search-to-Click Conversion ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
      </CardHeader>
      <CardContent>
        {detailed ? (
          <div className="h-[400px]">
            <PieChart data={chartData} />
          </div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Searches</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Clicks</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Conversion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {conversionData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{item.category}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.searches}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.clicks}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-brand-500 font-bold">{item.conversion}</span>
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
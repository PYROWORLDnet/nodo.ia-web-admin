'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/ui/charts/BarChart';
import { ChartOptions } from 'chart.js';

interface SearchAnalyticsProps {
  timeRange: string;
  detailed?: boolean;
}

export function SearchAnalytics({ timeRange, detailed = false }: SearchAnalyticsProps) {
  // Mock data - replace with real data from your API
  const searchData = [
    { term: 'Toyota Hilux', count: 450, change: '+15%' },
    { term: 'Apartamento Santo Domingo', count: 380, change: '+8%' },
    { term: 'iPhone 14', count: 320, change: '-5%' },
    { term: 'Casa en Santiago', count: 290, change: '+12%' },
    { term: 'Honda Civic', count: 250, change: '+3%' },
    { term: 'Samsung Galaxy', count: 220, change: '-2%' },
    { term: 'Terreno Constanza', count: 200, change: '+20%' },
    { term: 'BMW X5', count: 180, change: '+7%' },
    { term: 'Apartamento Punta Cana', count: 170, change: '+25%' },
    { term: 'Mercedes-Benz', count: 150, change: '-1%' },
  ];

  const chartData = {
    labels: searchData.map(item => item.term),
    datasets: [
      {
        label: 'Search Count',
        data: searchData.map(item => item.count),
        backgroundColor: 'rgba(192, 254, 0, 0.8)',
        borderColor: 'rgba(192, 254, 0, 1)',
        borderWidth: 2,
        borderRadius: 6,
        barThickness: 20,
        maxBarThickness: 30,
        minBarLength: 4,
        hoverBackgroundColor: 'rgba(192, 254, 0, 1)',
        hoverBorderColor: 'rgba(192, 254, 0, 1)',
        hoverBorderWidth: 3,
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.parsed.x} searches`;
          }
        }
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
          padding: 8,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
          padding: 8,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Top 10 Searches ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
      </CardHeader>
      <CardContent>
        {detailed ? (
          <div className="h-[400px]">
            <BarChart data={chartData} options={chartOptions} />
          </div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-[100%]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Search Term</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Count</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {searchData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{item.term}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.count}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">searches</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}
                      </span>
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
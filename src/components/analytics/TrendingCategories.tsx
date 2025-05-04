'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart } from '@/components/ui/charts/LineChart';
import { ChartOptions } from 'chart.js';

interface TrendingCategoriesProps {
  timeRange: string;
  detailed?: boolean;
}

export function TrendingCategories({ timeRange, detailed = false }: TrendingCategoriesProps) {
  // Mock data - replace with real data from your API
  const categoryData = [
    { category: 'Autos', count: 2500, change: '+40%', trend: [1200, 1400, 1800, 2100, 2500] },
    { category: 'Inmuebles', count: 1800, change: '+25%', trend: [1000, 1200, 1400, 1600, 1800] },
    { category: 'Servicios', count: 1500, change: '+15%', trend: [900, 1100, 1200, 1300, 1500] },
    { category: 'Electrónicos', count: 1200, change: '-5%', trend: [1300, 1250, 1200, 1150, 1200] },
    { category: 'Generales', count: 900, change: '+10%', trend: [600, 700, 800, 850, 900] },
  ];

  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: categoryData.map((item, index) => {
      const hue = index * 72;
      return {
        label: item.category,
        data: item.trend,
        borderColor: `hsl(${hue}, 80%, 60%)`,
        backgroundColor: `hsla(${hue}, 80%, 60%, 0.1)`,
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: `hsl(${hue}, 80%, 60%)`,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: `hsl(${hue}, 80%, 60%)`,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        pointStyle: 'circle',
        showLine: true,
        spanGaps: false,
        stepped: false,
        cubicInterpolationMode: 'monotone' as const,
      };
    }),
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 'bold',
          },
        },
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
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2,
        hoverBorderWidth: 2,
        backgroundColor: 'transparent',
        hoverBackgroundColor: 'transparent',
      },
      line: {
        tension: 0.4,
        borderWidth: 3,
      },
    },
  };

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} overflow-x-auto`}>
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Trending Categories ({timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'})</CardTitle>
      </CardHeader>
      <CardContent>
        {detailed ? (
          <div className="h-[400px]">
            <LineChart data={chartData} options={chartOptions} />
          </div>
        ) : (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Searches</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {categoryData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{item.category}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.count}</span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.change.startsWith('+') ? '+' : ''}{item.change.replace('%', '')}%</span>
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
'use client';

import { CallToActionStats } from '@/components/analytics/CallToActionStats';
import { CompetitorInsights } from '@/components/analytics/CompetitorInsights';
import { LocationDemandMap } from '@/components/analytics/LocationDemandMap';
import { PriceRangeAnalytics } from '@/components/analytics/PriceRangeAnalytics';
import { SearchAnalytics } from '@/components/analytics/SearchAnalytics';
import { SearchToClick } from '@/components/analytics/SearchToClick';
import { TrendingCategories } from '@/components/analytics/TrendingCategories';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export default function AnalyticsPage() {
    const [timeRange, setTimeRange] = useState('7d'); // '7d' or '30d'

    return (
        <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Analytics Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="hidden sm:inline">Top 10 Searches • Real-time insights</span>
                        <span className="sm:hidden">Top 10 Searches</span>
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="h-9 rounded-md bg-[#fff] dark:bg-[#000] px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gray-800)]/30 transition-all"
                    >
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                    </select>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="searches">Searches</TabsTrigger>
                    <TabsTrigger value="trends">Trends</TabsTrigger>
                    <TabsTrigger value="locations">Locations</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-1">
                        <SearchAnalytics timeRange={timeRange} />
                        <TrendingCategories timeRange={timeRange} />
                    </div>
                    <div className="w-full">
                        <LocationDemandMap timeRange={timeRange} />
                    </div>
                    <div className="grid gap-4 md:grid-cols-1">
                        <SearchToClick timeRange={timeRange} />
                        <PriceRangeAnalytics timeRange={timeRange} />
                    </div>
                    <div className="grid gap-4 md:grid-cols-1">
                        <CompetitorInsights timeRange={timeRange} />
                        <CallToActionStats timeRange={timeRange} />
                    </div>
                </TabsContent>
                <TabsContent value="searches" className="space-y-4">
                    <SearchAnalytics timeRange={timeRange} detailed />
                </TabsContent>
                <TabsContent value="trends" className="space-y-4">
                    <TrendingCategories timeRange={timeRange} detailed />
                </TabsContent>
                <TabsContent value="locations" className="space-y-4">
                    <LocationDemandMap timeRange={timeRange} detailed />
                </TabsContent>
            </Tabs>
        </div>
    );
} 
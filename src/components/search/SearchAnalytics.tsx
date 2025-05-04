"use client";
import { ArrowDownIcon, ArrowUpIcon, ClickIcon, MapIcon, MoneyIcon, SearchIcon, StarIcon, TagIcon } from "@/icons";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
import Badge from "../ui/badge/Badge";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SearchAnalytics() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d">("7d");

  // Top searches data
  const topSearches = [
    { term: "Toyota Hilux", count: 245, change: 12 },
    { term: "Apartamento Santo Domingo", count: 189, change: -5 },
    { term: "iPhone 15 Pro", count: 156, change: 8 },
    { term: "Casa en Piantini", count: 143, change: 15 },
    { term: "Honda Civic 2024", count: 132, change: -3 },
  ];

  // Trending categories data
  const trendingCategories = [
    { name: "Automóviles", searches: 1250, change: 40 },
    { name: "Inmuebles", searches: 980, change: 25 },
    { name: "Electrónica", searches: 850, change: -10 },
    { name: "Servicios", searches: 720, change: 15 },
  ];

  // Location data
  const locationData = [
    { region: "Santo Domingo", searches: 120 },
    { region: "Santiago", searches: 85 },
    { region: "La Vega", searches: 65 },
    { region: "Puerto Plata", searches: 45 },
  ];

  // Price range data
  const priceRanges = [
    { range: "$200,000 - $350,000", percentage: 45 },
    { range: "$350,000 - $500,000", percentage: 30 },
    { range: "$500,000 - $750,000", percentage: 15 },
    { range: "$750,000+", percentage: 10 },
  ];

  // Competitor insights
  const competitorInsights = [
    { keyword: "Toyota Hilux", matches: 10 },
    { keyword: "Apartamento Santo Domingo", matches: 8 },
    { keyword: "iPhone 15", matches: 15 },
  ];

  // Call-to-action stats
  const ctaStats = {
    highlightedViews: 300,
    regularViews: 100,
    increase: 200,
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: { show: false },
      fontFamily: "Outfit, sans-serif",
    },
    colors: ["#c0fe00"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { theme: "dark" },
  };

  const chartSeries = [
    {
      name: "Searches",
      data: [45, 52, 38, 45, 19, 23, 41],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with time range selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-black dark:text-white">Search Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setTimeRange("7d")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${timeRange === "7d"
                  ? "bg-white text-black shadow-sm dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeRange("30d")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${timeRange === "30d"
                  ? "bg-white text-black shadow-sm dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
            >
              30 Days
            </button>
          </div>
        </div>
      </div>

      {/* Main metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Searches */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <SearchIcon className="text-black dark:text-white size-6" />
          </div>
          <div className="mt-4">
            <h4 className="text-2xl font-bold text-black dark:text-white">12.5K</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Searches</p>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            12.5%
          </Badge>
        </div>

        {/* Search to Click Rate */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <ClickIcon className="text-black dark:text-white size-6" />
          </div>
          <div className="mt-4">
            <h4 className="text-2xl font-bold text-black dark:text-white">30%</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Click Rate</p>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            5.2%
          </Badge>
        </div>

        {/* Average Price Range */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <MoneyIcon className="text-black dark:text-white size-6" />
          </div>
          <div className="mt-4">
            <h4 className="text-2xl font-bold text-black dark:text-white">$350K</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Price Range</p>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            8.1%
          </Badge>
        </div>

        {/* Highlight Performance */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <StarIcon className="text-black dark:text-white size-6" />
          </div>
          <div className="mt-4">
            <h4 className="text-2xl font-bold text-black dark:text-white">300%</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Highlight Boost</p>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            15.3%
          </Badge>
        </div>
      </div>

      {/* Search Trends Chart */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">Search Trends</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Daily search volume</p>
          </div>
        </div>
        <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={200} />
      </div>

      {/* Top Searches and Trending Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Searches */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Top Searches</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Most searched terms</p>
            </div>
          </div>
          <div className="space-y-4">
            {topSearches.map((search, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{index + 1}</span>
                  <span className="text-sm font-medium text-black dark:text-white">{search.term}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{search.count} searches</span>
                  <Badge color={search.change > 0 ? "success" : "error"}>
                    {search.change > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    {Math.abs(search.change)}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Categories */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Trending Categories</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Most active categories</p>
            </div>
          </div>
          <div className="space-y-4">
            {trendingCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TagIcon className="text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-black dark:text-white">{category.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{category.searches} searches</span>
                  <Badge color={category.change > 0 ? "success" : "error"}>
                    {category.change > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    {Math.abs(category.change)}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Demand and Price Ranges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location Demand */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Location Demand</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Search activity by region</p>
            </div>
          </div>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapIcon className="text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-black dark:text-white">{location.region}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{location.searches} searches</span>
                  <div className="w-24 h-2 bg-gray-100 rounded-full dark:bg-gray-800">
                    <div
                      className="h-full bg-brand-500 rounded-full"
                      style={{ width: `${(location.searches / 120) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Ranges */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Popular Price Ranges</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Most searched price points</p>
            </div>
          </div>
          <div className="space-y-4">
            {priceRanges.map((range, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-black dark:text-white">{range.range}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{range.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full dark:bg-gray-800">
                  <div
                    className="h-full bg-brand-500 rounded-full"
                    style={{ width: `${range.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Insights and CTA Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competitor Insights */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Competitor Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Similar listings in your category</p>
            </div>
          </div>
          <div className="space-y-4">
            {competitorInsights.map((insight, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-black dark:text-white">{insight.keyword}</span>
                <Badge variant="light" color="primary">
                  {insight.matches} matches
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Stats */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Highlight Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Impact of featured listings</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">{ctaStats.highlightedViews}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Highlighted Views</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-black dark:text-white">{ctaStats.regularViews}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Regular Views</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Badge color="success">
                  <ArrowUpIcon />
                  {ctaStats.increase}%
                </Badge>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  More views compared to regular listings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
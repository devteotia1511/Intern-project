"use client";
import { useState } from "react";

export default function AnalyticsChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("2025 Half-1");
  
  // Updated data to match the reference image exactly
  const chartData = [
    { month: "Jan", impressions: 12000, clicks: 12000 },
    { month: "Feb", impressions: 7000, clicks: 7000 },
    { month: "Mar", impressions: 15000, clicks: 15000 },
    { month: "Apr", impressions: 24000, clicks: 24000 },
    { month: "May", impressions: 28000, clicks: 28000 },
    { month: "Jun", impressions: 20000, clicks: 20000 },
    { month: "Jul", impressions: 23000, clicks: 23000 }
  ];

  return (
    <div className="space-x-6 flex">
      {/* Total Impressions Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border relative w-120">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-semibold text-gray-600">Total Impressions</h3>
          
          {/* Dropdown Menu */}
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="2025 Half-1">2025 Half-1</option>
              <option value="2025 Half-2">2025 Half-2</option>
              <option value="2024 Full Year">2024 Full Year</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Chart Container */}
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>30K</span>
            <span>20K</span>
            <span>10K</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-8 h-full relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-b border-gray-200"></div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              {chartData.map((item) => (
                <span key={item.month}>{item.month}</span>
              ))}
            </div>
            
            {/* Impressions line with fill */}
            <svg className="absolute inset-0 ml-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Fill area */}
              <path
                d={`M 0 100 ${chartData.map((item, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - (item.impressions / 30000) * 100;
                  return `L ${x} ${y}`;
                }).join(' ')} L 100 100 Z`}
                fill="#dcfce7"
                opacity="0.4"
              />
              {/* Line */}
              <path
                d={chartData.map((item, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - (item.impressions / 30000) * 100;
                  return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                stroke="#10b981"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Clicks Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border relative w-120">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-semibold text-gray-600">Total Clicks</h3>
          
          {/* Dropdown Menu */}
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="2025 Half-1">2025 Half-1</option>
              <option value="2025 Half-2">2025 Half-2</option>
              <option value="2024 Full Year">2024 Full Year</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Chart Container */}
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>30K</span>
            <span>20K</span>
            <span>10K</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-8 h-full relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-b border-gray-200"></div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              {chartData.map((item) => (
                <span key={item.month}>{item.month}</span>
              ))}
            </div>
            
            {/* Clicks line with fill */}
            <svg className="absolute inset-0 ml-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Fill area */}
              <path
                d={`M 0 100 ${chartData.map((item, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - (item.clicks / 30000) * 100;
                  return `L ${x} ${y}`;
                }).join(' ')} L 100 100 Z`}
                fill="#dcfce7"
                opacity="0.4"
              />
              {/* Line */}
              <path
                d={chartData.map((item, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - (item.clicks / 30000) * 100;
                  return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                stroke="#10b981"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
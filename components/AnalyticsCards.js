"use client";

export default function AnalyticsCards() {
  const items = [
    { 
      label: "Impressions", 
      value: "3,671", 
      change: "+3.00%",
      trend: "up"
    },
    { 
      label: "Clicks", 
      value: "1,200", 
      change: "+5.00%",
      trend: "up"
    },
    { 
      label: "CTR", 
      value: "20%", 
      change: "+0.50%",
      trend: "up"
    },
    { 
      label: "Total Ad spend", 
      value: "Rs.2,000", 
      change: "+10.00%",
      trend: "up"
    },
    { 
      label: "Cost per click", 
      value: "Rs.100", 
      change: "-5.00%",
      trend: "down"
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {items.map((item, index) => (
        <div key={index} className="bg-[#2EC773] rounded-3xl p-6 shadow-lg border">
          <div className="text-sm text-gray-100 mb-2">{item.label}</div>
          <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${item.trend === 'up' ? 'text-green-900' : 'text-red-600'}`}>
              {item.trend === 'up' ? (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-900' : 'text-red-600'}`}>
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
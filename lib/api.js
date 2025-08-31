export const api = {
    getCampaigns: async () => [
      { id: 1, name: "Summer Sale", budget: 500, status: "Active" },
      { id: 2, name: "Winter Promo", budget: 300, status: "Paused" },
    ],
  
    getAnalytics: async () => ({
      impressions: 12000,
      clicks: 1500,
      ctr: 12.5,
      spend: 750,
      cpc: 0.5,
      daily: [
        { date: "2025-08-01", impressions: 500, clicks: 50, spend: 25 },
        { date: "2025-08-02", impressions: 800, clicks: 70, spend: 35 },
        { date: "2025-08-03", impressions: 1200, clicks: 100, spend: 50 },
      ],
    }),
  
    getInvoices: async () => [
      { id: 1, month: "July 2025", amount: 200, status: "Paid" },
      { id: 2, month: "August 2025", amount: 250, status: "Unpaid" },
      { id: 3, month: "September 2025", amount: 180, status: "Unpaid" },
    ],
  };
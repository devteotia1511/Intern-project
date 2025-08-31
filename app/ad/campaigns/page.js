"use client";
import { useState } from "react";
import CampaignForm from "@/components/CampaignForm";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "Active",
      impressions: 15000,
      clicks: 1200,
      spend: 2500,
      startDate: "2025-01-15",
      endDate: "2025-03-15"
    },
    {
      id: 2,
      name: "Festival Sale Campaign",
      status: "Paused",
      impressions: 8000,
      clicks: 600,
      spend: 1200,
      startDate: "2025-02-01",
      endDate: "2025-02-28"
    },
    {
      id: 3,
      name: "New Arrivals Promotion",
      status: "Active",
      impressions: 22000,
      clicks: 1800,
      spend: 3200,
      startDate: "2025-01-01",
      endDate: "2025-04-01"
    }
  ]);

  const handleCreateCampaign = (newCampaign) => {
    setCampaigns(prev => [...prev, {
      ...newCampaign,
      impressions: 0,
      clicks: 0,
      spend: 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }]);
  };

  const handleEditCampaign = (campaignId) => {
    const campaign = campaigns.find(c => c.id === campaignId);
    alert(`Edit Campaign: ${campaign.name} - In a real app, this would open an edit form`);
    // In a real app, this would open an edit form
  };

  const handleToggleStatus = (campaignId) => {
    setCampaigns(prev => prev.map(campaign => {
      if (campaign.id === campaignId) {
        const newStatus = campaign.status === 'Active' ? 'Paused' : 'Active';
        return { ...campaign, status: newStatus };
      }
      return campaign;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Campaigns</h1>
        <CampaignForm 
          onAdd={handleCreateCampaign}
          triggerLabel="Create Campaign"
        />
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Campaigns</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Campaign Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Impressions</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Clicks</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Spend</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Duration</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-800">{campaign.name}</div>
                        <div className="text-sm text-gray-500">ID: {campaign.id}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        campaign.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-800">{campaign.impressions.toLocaleString()}</td>
                    <td className="py-4 px-4 text-gray-800">{campaign.clicks.toLocaleString()}</td>
                    <td className="py-4 px-4 text-gray-800">₹{campaign.spend.toLocaleString()}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditCampaign(campaign.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleToggleStatus(campaign.id)}
                          className={`text-sm hover:underline ${
                            campaign.status === 'Active' 
                              ? 'text-red-600 hover:text-red-800' 
                              : 'text-green-600 hover:text-green-800'
                          }`}
                        >
                          {campaign.status === 'Active' ? 'Pause' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
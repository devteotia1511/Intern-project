"use client";
import { useState } from "react";

export default function BillingPage() {
  const [expandedMonth, setExpandedMonth] = useState("March");

  const invoices = [
    { month: "January", status: "Paid", expanded: false, amount: 15000 },
    { month: "February", status: "Paid", expanded: false, amount: 12000 },
    { month: "March", status: "Unpaid", expanded: true, amount: 18000 },
    { month: "April", status: "Paid", expanded: false, amount: 16000 },
    { month: "May", status: "Paid", expanded: false, amount: 14000 }
  ];

  const toggleExpanded = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const handlePayment = (month) => {
    alert(`Proceeding to payment for ${month} invoice. Amount: INR ${invoices.find(inv => inv.month === month)?.amount.toLocaleString()}`);
    // In a real app, this would redirect to payment gateway
  };

  const exportPDF = (month) => {
    alert(`Exporting ${month} invoice as PDF...`);
    // In a real app, this would generate and download a PDF
  };

  return (
    <div className="space-y-6">
      {/* Invoice History */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Invoice History</h2>
        
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.month} className="border border-gray-200 rounded-lg">
              {/* Invoice Header */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpanded(invoice.month)}
              >
                <h3 className="font-medium text-gray-800">
                  Invoice history for {invoice.month}
                </h3>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    invoice.status === 'Paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {invoice.status}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedMonth === invoice.month ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Invoice Details */}
              {expandedMonth === invoice.month && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="space-y-4 mt-4">
                    {invoice.status === "Unpaid" ? (
                      <>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Cost for impressions</p>
                            <p className="text-sm text-gray-600">Total impressions - 10,000</p>
                          </div>
                          <span className="font-semibold text-gray-800">INR 10,000</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Cost for clicks</p>
                            <p className="text-sm text-gray-600">Total clicks - 500</p>
                          </div>
                          <span className="font-semibold text-gray-800">INR 8,000</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="font-semibold text-gray-800">Total</span>
                          <span className="font-bold text-xl text-gray-800">INR 18,000</span>
                        </div>
                        
                        <button 
                          onClick={() => handlePayment(invoice.month)}
                          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          Proceed to payment
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Total Amount</p>
                            <p className="text-sm text-gray-600">Invoice #{invoice.month.slice(0, 3)}-2025</p>
                          </div>
                          <span className="font-bold text-xl text-gray-800">INR {invoice.amount.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex gap-3">
                          <button 
                            onClick={() => exportPDF(invoice.month)}
                            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                          >
                            Export PDF
                          </button>
                          <button 
                            onClick={() => alert(`Viewing ${invoice.month} invoice details`)}
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
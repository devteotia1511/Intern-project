"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function BillingPage() {
  const [openMonth, setOpenMonth] = useState(null)

  const toggleMonth = (month) => {
    setOpenMonth(openMonth === month ? null : month)
  }

  const invoices = [
    {
      month: "January",
      status: "Paid",
      details: [
        { name: "Rohan Singh", spent: 5000, amount: 100 },
        { name: "Customer", spent: 7000, amount: 80 },
      ],
      total: 8000,
    },
    {
      month: "February",
      status: "Paid",
      details: [
        { name: "Rohan Singh", spent: 5000, amount: 100 },
        { name: "Customer", spent: 7000, amount: 80 },
      ],
      total: 8000,
    },
    {
      month: "March",
      status: "Unpaid",
      due: "16th March",
      details: [
        { name: "Rohan Singh", spent: 5000, amount: 100 },
        { name: "Customer", spent: 7000, amount: 80 },
        { name: "Rohan Singh", spent: 5000, amount: 100 },
      ],
      total: 8000,
    },
  ]

  return (
    <div className="p-6 grid grid-cols-1 gap-6">
      {invoices.map((invoice, index) => (
        <div key={index} className="shadow-sm border rounded-2xl bg-white">
          <div
            className="flex justify-between items-center cursor-pointer p-6"
            onClick={() => toggleMonth(invoice.month)}
          >
            <div className="flex justify-between w-full items-center gap-4">
              <span className="text-lg font-semibold">Invoice history for {invoice.month}</span>
              <span
                className={`ml-auto px-3 py-1 flex justify-center items-center text-sm rounded-full ${
                  invoice.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {invoice.status}
              </span>
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform ${
                  openMonth === invoice.month ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {openMonth === invoice.month && (
            <div className="p-6 space-y-4">
              {invoice.due && (
                <p className="text-sm text-red-600">
                  Due date - {invoice.due}
                </p>
              )}

              {invoice.details.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Customer spent - INR {item.spent}
                    </p>
                  </div>
                  <p className="font-semibold">INR {item.amount}</p>
                </div>
              ))}

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>INR {invoice.total}</span>
              </div>

              <Button
                variant="link"
                className="text-green-600 hover:text-green-700 p-0"
              >
                Download full history →
              </Button>

              {invoice.status === "Unpaid" && (
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Proceed to payment
                </Button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

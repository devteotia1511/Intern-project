"use client"

import { useId, useState, useEffect } from "react"
import { 
  UserIcon, 
  FileTextIcon, 
  BarChart3Icon, 
  SearchIcon,
  HomeIcon,
  TicketIcon,
  ClockIcon,
  CarIcon,
  UsersIcon,
  DollarSignIcon 
} from "lucide-react"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const analyticsData = [
  { name: 'Jan', revenue: 4000, newCustomers: 2400, freeParking: 100 },
  { name: 'Feb', revenue: 3000, newCustomers: 1398, freeParking: 150 },
  { name: 'Mar', revenue: 2000, newCustomers: 9800, freeParking: 200 },
  { name: 'Apr', revenue: 2780, newCustomers: 3908, freeParking: 180 },
  { name: 'May', revenue: 1890, newCustomers: 4800, freeParking: 250 },
  { name: 'Jun', revenue: 2390, newCustomers: 3800, freeParking: 220 },
  { name: 'Jul', revenue: 3490, newCustomers: 4300, freeParking: 300 },
];

export default function AnalyticsPage() {
  const [totalTickets, setTotalTickets] = useState(1245)
  const [activeCars, setActiveCars] = useState(82)
  const [totalRevenue, setTotalRevenue] = useState(120000)
  const [freeParking, setFreeParking] = useState(540)
  const [totalUsers, setTotalUsers] = useState(780)

  useEffect(() => {
    // This is where you would fetch data from a real database.
    // For now, we'll use a placeholder to simulate a slight change in data.
    const interval = setInterval(() => {
      setTotalTickets(prev => prev + Math.floor(Math.random() * 5))
      setActiveCars(prev => prev + Math.floor(Math.random() * 2))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const dashboardMetrics = [
    { title: "Total Tickets", value: totalTickets, icon: TicketIcon, change: "+5.2%" },
    { title: "Active Cars", value: activeCars, icon: CarIcon, change: "+2.1%" },
    { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: DollarSignIcon, change: "+7.8%" },
    { title: "Free Parking Vouchers", value: freeParking, icon: ClockIcon, change: "+1.5%" },
    { title: "Total Registered Users", value: totalUsers, icon: UsersIcon, change: "+3.9%" },
  ]

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md border bg-background p-2 shadow-md">
          <p className="font-bold">{`Month: ${label}`}</p>
          {payload.map((p, index) => (
            <p key={index} style={{ color: p.color }}>
              {`${p.name}: ${p.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dashboardMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="flex flex-col rounded-xl border p-4 bg-white shadow-sm transition-transform duration-200 hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{metric.title}</span>
                <Icon className="h-4 w-4 text-gray-400" />
              </div>
              <div className="mt-1 font-bold text-3xl">
                {metric.value}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {metric.change} from last month
              </p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-4 bg-white shadow-sm">
          <h3 className="font-bold mb-4">Monthly Revenue & Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={customTooltip} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="newCustomers" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border p-4 bg-white shadow-sm">
          <h3 className="font-bold mb-4">Free Parking Vouchers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={customTooltip} />
              <Legend />
              <Bar dataKey="freeParking" fill="#2EC773" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

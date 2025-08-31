import Link from "next/link";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Zudio - Ad Analytics Dashboard | Park Smart",
  description: "Manage Ads, Analytics & Billing for Zudio campaigns",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Park Smart Logo */}
            <Link href="/">
                <Image 
                  src="/logo.jpg" 
                  alt="Park Smart Logo" 
                  width={110} 
                  height={45} 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
              
            
            {/* Zudio Branding */}
            <div className="ml-8">
              <h1 className="text-2xl font-serif font-semibold text-gray-500">Zudio</h1>
              <p className="text-sm text-gray-600">Ad analytics dashboard</p>
            </div>
          </div>

          {/* Navigation - Centered */}
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>

          {/* Contact Info - Right aligned */}
          <div className="text-sm text-gray-600">
            For any queries{" "}
            <Link href="/ad/contact" className="text-gray-900 p-2  hover:text-blue-700 bg-gray-100 rounded-md">
              Contact us
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
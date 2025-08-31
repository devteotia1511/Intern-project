"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      
      <Link 
        href="/ad/analytics" 
        className={`transition-colors relative flex items-center gap-2 ${
          pathname === '/ad/analytics' 
            ? 'text-green-600' 
            : 'text-gray-700 hover:text-green-600'
        }`}
      >
        {pathname === '/ad/analytics' && (
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        )}
        Analytics
      </Link>
      <Link 
        href="/ad/campaigns" 
        className={`transition-colors relative flex items-center gap-2 ${
          pathname === '/ad/campaigns' 
            ? 'text-green-600' 
            : 'text-gray-700 hover:text-green-600'
        }`}
      >
        {pathname === '/ad/campaigns' && (
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        )}
        Campaigns
      </Link>
      <Link 
        href="/ad/billing" 
        className={`transition-colors relative flex items-center gap-2 ${
          pathname === '/ad/billing' 
            ? 'text-green-600' 
            : 'text-gray-700 hover:text-green-600'
        }`}
      >
        {pathname === '/ad/billing' && (
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        )}
        Billing
      </Link>
    </nav>
  );
}

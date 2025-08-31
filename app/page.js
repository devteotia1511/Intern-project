import Link from "next/link";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Park Smart Logo */}
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image 
                  src="/logo.jpg" 
                  alt="Park Smart Logo" 
                  width={110} 
                  height={45} 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            
            {/* Main Branding */}
            <div className="ml-6">
              <p className="text-2xl font-semibold text-gray-600 font-serif">Main dashboard</p>
            </div>
          </div>

          <div className="flex-1 flex justify-end gap-4">
            <Link 
              href="/ad" 
              className="bg-[#2EC773] hover:bg-[#2EC760] text-white font-serif px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              AD Analytics Dashboard
            </Link>
            <Link 
              href="/parking-model" 
              className="bg-[#2EC773] hover:bg-[#2EC760] text-white font-serif px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Brand Parking Discount
            </Link>
          </div>

          <div className="w-[110px]"></div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="py-20">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Welcome to Park Smart
            </h1>
            
            <li className="text-lg text-gray-500">
              Click the `AD Analytics Dashboard` button in the navbar above to get started
            </li>
          </div>
        </div>
      </main>
    </div>
  );
}

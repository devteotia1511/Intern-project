"use client"

import { useId } from "react"
import { 
  UserIcon, 
  FileTextIcon, 
  BarChart3Icon, 
  SearchIcon,
  HomeIcon 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Navbar() {
  const id = useId()
  const navigationLinks = [
    { href: "/parking-model", label: "Home", icon: HomeIcon },
    { href: "/parking-model/Profile", label: "Profile", icon: UserIcon },
    { href: "/parking-model/Billing", label: "Billing", icon: FileTextIcon },
    { href: "/parking-model/Analytics", label: "Analytics", icon: BarChart3Icon },
  ]
  
  const handleNavigation = (href) => {
    window.location.href = href;
  }
  
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Button
              className="group size-8"
              variant="ghost"
              size="icon"
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6H20M4 12H20M4 18H20" />
              </svg>
            </Button>
            <div className="w-40 p-2 md:hidden">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="ghost"
                      className="justify-start gap-2"
                      onClick={() => handleNavigation(link.href)}
                    >
                      <div>
                        <Icon size={16} />
                        {link.label}
                      </div>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <img src="/logo.jpg" width={100} height={80} alt="Logo" />
          </div>
        </div>

        {/* Middle area (Desktop navbar) */}
        <div className="max-md:hidden">
          <div className="flex gap-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <div key={index}>
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2"
                    onClick={() => handleNavigation(link.href)}
                  >
                    <div>
                      <Icon size={16} />
                      {link.label}
                    </div>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right side - Search */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="relative">
            <Input
              id={id}
              className="peer h-8 ps-8 pe-2"
              placeholder="Search..."
              type="search"
            />
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 text-muted-foreground/80">
              <SearchIcon size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </>
  )
}

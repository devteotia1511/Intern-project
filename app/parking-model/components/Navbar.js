"use client"

import { useId } from "react"
import { 
  UserIcon, 
  FileTextIcon, 
  BarChart3Icon, 
  SearchIcon,
  HomeIcon 
} from "lucide-react"
import Link from "next/link"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navigationLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/Profile", label: "Profile", icon: UserIcon },
  { href: "/Billing", label: "Billing", icon: FileTextIcon },
  { href: "/Analytics", label: "Analytics", icon: BarChart3Icon },
]

export default function Navbar() {
  const id = useId()

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
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
            </PopoverTrigger>
            <PopoverContent align="start" className="w-40 p-2 md:hidden">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="ghost"
                      className="justify-start gap-2"
                    >
                      <link href={link.href}>
                        <Icon size={16} />
                        {link.label}
                      </link>
                    </Button>
                  )
                })}
              </div>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
                <Image src="/logo.jpg" width={100} height={80} alt="Logo" />
            </Link>
              
          </div>
        </div>

        {/* Middle area (Desktop navbar) */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="flex gap-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <NavigationMenuItem key={index}>
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2"
                  >
                    <a href={link.href}>
                      <Icon size={16} />
                      {link.label}
                    </a>
                  </Button>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

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
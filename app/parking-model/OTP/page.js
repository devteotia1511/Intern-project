"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function OTPPage() {
  const searchParams = useSearchParams()
  const brand = searchParams.get("brand")

  const [otp, setOtp] = useState("")

  // Auto-generate OTP jab page load ho
  useEffect(() => {
    generateOtp()
  }, [])

  const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString()
    setOtp(newOtp)
    navigator.clipboard.writeText(newOtp)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-2xl font-bold">OTP for {brand}</h1>
      <p className="text-xl font-mono">{otp}</p>
      <Button onClick={generateOtp}>Regenerate OTP</Button>
    </div>
  )
}
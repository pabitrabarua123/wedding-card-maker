"use client"

import type React from "react"

import { Sparkles, Flower2, Church, Gift } from "lucide-react"

export type TemplateField = {
  id: string
  type: "text" | "image"
  label: string
  placeholder?: string
  defaultValue?: string
  position: { x: number; y: number }
  width?: number
  height?: number
  fontSize?: number
  fontFamily?: string
  color?: string
  align?: "left" | "center" | "right"
  maxLength?: number
}

export type Template = {
  id: string
  name: string
  description: string
  thumbnail: string
  backgroundImage?: string // Added background image for editing
  isPremium?: boolean
  category?: "Hindu" | "Muslim" | "Christian" | "General" // Added category field
  fields: TemplateField[]
  renderTemplate: (data: Record<string, string>) => React.ReactNode
}

export const templates: Template[] = [
  {
    id: "nikah-royale",
    name: "Nikah Royale",
    description: "Opulent black and gold elegance",
    thumbnail: "/images/premium10.jpg",
    backgroundImage: "/images/premium10-for-real-use.png",
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Yusuf",
        defaultValue: "Yusuf",
        position: { x: 300, y: 155 },
        fontSize: 46,
        fontFamily: "serif",
        color: "#d4af37",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Zainab",
        defaultValue: "Zainab",
        position: { x: 300, y: 215 },
        fontSize: 46,
        fontFamily: "serif",
        color: "#d4af37",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "December 31, 2024",
        defaultValue: "December 31, 2024",
        position: { x: 300, y: 320 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#d4af37",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "7:00 PM",
        defaultValue: "7:00 PM",
        position: { x: 300, y: 377 },
        fontSize: 15,
        fontFamily: "sans",
        color: "#c4a137",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "The Royal Palace",
        defaultValue: "The Royal Palace",
        position: { x: 300, y: 352 },
        fontSize: 15,
        fontFamily: "sans",
        color: "#c4a137",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          src="/images/premium10-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center py-16 px-12">
          <div className="text-center">
            <h1 className="text-5xl font-serif mt-[280px]" style={{ color: "#364d22" }}>
              {data["bride-name"] || "Victoria"}
            </h1>
            <h1 className="text-5xl font-serif mt-[60px]" style={{ color: "#364d22" }}>
              {data["groom-name"] || "Alexander"}
            </h1>
            <div className="mt-[100px] space-y-5">
              <p className="text-lg font-sans" style={{ color: "#364d22" }}>
                {new Date(data["date"]).toLocaleString("en-US", { month: "long" })} {data["date"].split("-")[2]}, {data["date"].split("-")[0]} | AT {data["time"] || "7:00 PM"}
              </p>
              <p className="text-sm font-sans" style={{ color: "#364d22" }}>
                {data["venue"] || "The Royal Palace"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "noor-palace",
    name: "Noor Palace",
    description: "Majestic design with crown motifs",
    thumbnail: "/images/premium11.jpg",
    isPremium: true,
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Omar",
        defaultValue: "Omar",
        position: { x: 300, y: 240 },
        fontSize: 40,
        fontFamily: "serif",
        color: "#8B0000",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Khadija",
        defaultValue: "Khadija",
        position: { x: 300, y: 295 },
        fontSize: 40,
        fontFamily: "serif",
        color: "#8B0000",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "",
        defaultValue: "",
        position: { x: 300, y: 630 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#A52A2A",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Wedding Time",
        placeholder: "2:00 PM",
        defaultValue: "2:00 PM",
        position: { x: 300, y: 695 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#B22222",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Westminster Abbey",
        defaultValue: "Westminster Abbey",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#B22222",
        align: "center",
      }
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/images/premium11-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-6 mt-[257px]">
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-5xl font-serif mt-[63px]" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[30px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[72%] mt-[12px] justify-center items-baseline">
            <p className="text-xl font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-xl flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[15px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[60px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "celestial-night",
    name: "Celestial Night",
    description: "Starry night sky with magical atmosphere",
    thumbnail: "/images/premium15.jpg",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Luna",
        defaultValue: "Luna",
        position: { x: 300, y: 330 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#E8D5B7",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Orion",
        defaultValue: "Orion",
        position: { x: 300, y: 380 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#E8D5B7",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "November 11, 2024",
        defaultValue: "November 11, 2024",
        position: { x: 300, y: 540 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#F4E5C2",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "8:00 PM",
        defaultValue: "8:00 PM",
        position: { x: 300, y: 605 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#F4E5C2",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Observatory Hill",
        defaultValue: "Observatory Hill",
        position: { x: 300, y: 575 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#F4E5C2",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-[#0a1128]">
        <img
          src="/images/premium15-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-6 mt-[230px]">
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#263a53" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-5xl font-serif mt-[63px]" style={{ fontFamily: "var(--font-serif)", color: "#263a53" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[113px]">
            <p className="text-md font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[60%] mt-[12px] justify-center items-baseline">
            <p className="text-xl font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-xl flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[15px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[40px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#263a53" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aayat-of-love",
    name: "Aayat of Love",
    description: "1920s glamour with geometric patterns",
    thumbnail: "/images/premium12.jpg",
    isPremium: true,
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Hassan",
        defaultValue: "Hassan",
        position: { x: 300, y: 330 },
        fontSize: 40,
        fontFamily: "serif",
        color: "#FFD700",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Maryam",
        defaultValue: "Maryam",
        position: { x: 300, y: 385 },
        fontSize: 40,
        fontFamily: "serif",
        color: "#FFD700",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "January 1, 2025",
        defaultValue: "January 1, 2025",
        position: { x: 300, y: 540 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#E6C200",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "9:00 PM",
        defaultValue: "9:00 PM",
        position: { x: 300, y: 605 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#CCAA00",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "The Great Hall",
        defaultValue: "The Great Hall",
        position: { x: 300, y: 575 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#CCAA00",
        align: "center",
      }
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          src="/images/premium12-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-4 mt-[237px]">
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-5xl font-serif mt-[55px]" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[10px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[57%] mt-[0px] justify-center items-baseline">
            <p className="text-xl font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-xl flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[8px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[20px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "blessed-promise",
    name: "Blessed Promise",
    description: "Soft pastel watercolor artistry",
    thumbnail: "/images/premium14.jpg",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Aurora",
        defaultValue: "Aurora",
        position: { x: 300, y: 260 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#C96A8E",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Sebastian",
        defaultValue: "Sebastian",
        position: { x: 300, y: 310 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#C96A8E",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "April 20, 2024",
        defaultValue: "April 20, 2024",
        position: { x: 300, y: 630 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#B5779C",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "4:30 PM",
        defaultValue: "4:30 PM",
        position: { x: 300, y: 695 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#9E6B8A",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Watercolor Pavilion Complex",
        defaultValue: "Watercolor Pavilion Complex",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#9E6B8A",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/images/premium14-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center flex gap-[55px] w-full mt-[110px]">
            <h1 className="text-5xl flex-1" style={{ fontFamily: "var(--font-serif)", color: "#42567b" }}>
              {data["bride-name"] || "Aurora"}
            </h1>
            <h1 className="text-5xl flex-1" style={{ fontFamily: "var(--font-serif)", color: "#42567b" }}>
              {data["groom-name"] || "Sebastian"}
            </h1>
          </div>
          <div className="flex mt-[108px] w-[93%]">
            <p className="text-base font-sans flex-1 ml-[53px] break-all" style={{ fontFamily: "var(--font-sans)", color: "#42567b" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}<br/>
              {new Date(data["date"]).toLocaleString("en-US", { month: "short" }) || "Dec"} {data["date"].split("-")[2]}<br/>
              {data["date"].split("-")[0]}
              
            </p>
            <p className="text-base font-sans flex-1 ml-[58px]" style={{ fontFamily: "var(--font-sans)", color: "#42567b" }}>
              {data["time"] || "AT 2:00PM"}
            </p>
            <p className="text-base font-sans flex-1 ml-[52px]" style={{ fontFamily: "var(--font-sans)", color: "#42567b" }}>
              {data["venue"] || "Watercolor Pavilion"}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "barakah-gold",
    name: "Barakah Gold",
    description: "Dramatic navy blue with watercolor pink roses",
    thumbnail: "/images/premium13.jpg",
    isPremium: true,
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Samira",
        defaultValue: "Samira",
        position: { x: 180, y: 540 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#FFFFFF",
        align: "left",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Murad",
        defaultValue: "Murad",
        position: { x: 180, y: 710 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#FFFFFF",
        align: "left",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "Saturday, September 21, 2025",
        defaultValue: "Saturday, September 21, 2025",
        position: { x: 450, y: 640 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#FFFFFF",
        align: "right",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "7:00 PM",
        defaultValue: "7:00 PM",
        position: { x: 300, y: 377 },
        fontSize: 15,
        fontFamily: "sans",
        color: "#c4a137",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Kotajy City, ST 12345",
        defaultValue: "Kotajy City, ST 12345",
        position: { x: 450, y: 860 },
        fontSize: 14,
        fontFamily: "sans",
        color: "#FFFFFF",
        align: "right",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-[#1a3a52]">
        <img
          src="/images/premium13-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 px-16 py-16">
          <div className="mt-[390px] text-center">
            <div className="space-y-4 mb-12">
              <h1
                className="text-4xl leading-tight font-serif"
                style={{ fontFamily: "var(--font-serif)", color: "#000000" }}
              >
                {data["bride-name"] || "Samira"} & {data["groom-name"] || "Murad"}
              </h1>
            </div>
          </div>

          <div className="mt-[100px] text-center">
            <div className="mb-6">
              <p className="text-lg font-medium font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
                {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })} {data["date"].split("-")[2]}, {data["date"].split("-")[0]} | AT {data["time"] || "7:00 PM"}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
                {data["venue"] || "123 Anywhere St., Any City, ST 12345"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mangalam-vivaah",
    name: "Mangalam Vivaah",
    description: "Elegant burgundy with floral corners and Om symbol",
    thumbnail: "/images/premium1.jpg",
    backgroundImage: "/images/premium1-for-real-use.png",
    isPremium: true,
    category: "Hindu",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "PRERNA SINGH",
        defaultValue: "PRERNA SINGH",
        position: { x: 300, y: 280 },
        fontSize: 44,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "SUMIT GUPTA",
        defaultValue: "SUMIT GUPTA",
        position: { x: 300, y: 380 },
        fontSize: 44,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "28",
        defaultValue: "28",
        position: { x: 300, y: 550 },
        fontSize: 80,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "AT 8AM",
        defaultValue: "AT 8AM",
        position: { x: 380, y: 540 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue Address",
        placeholder: "123 ANYWHERE ST, ANY CITY, ST 12345",
        defaultValue: "123 ANYWHERE ST, ANY CITY, ST 12345",
        position: { x: 300, y: 670 },
        fontSize: 13,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/images/premium1-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-6 mt-[236px]">
            <h1 className="text-4xl font-serif mb-[40px]" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-4xl font-serif mt-[40px]" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[142px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[72%] mt-[7px] justify-center items-baseline">
            <p className="text-lg font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-lg flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[7px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[60px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>

      </div>
    ),
  },
  {
    id: "mehndi-celebration-premium",
    name: "Mehndi Celebration",
    isPremium: true,
    thumbnail: "/images/premium4.jpg",
    backgroundImage: "/images/premium4-for-real-use.png",
    description: "Vibrant mehndi invitation with floral accents and pink highlights",
    category: "Hindu",
    fields: [
      {
        id: "title",
        type: "text",
        label: "Event Title",
        placeholder: "Mehndi",
        defaultValue: "Mehndi",
        position: { x: 300, y: 180 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#f4c542",
        align: "center",
      },
      {
        id: "subtitle",
        type: "text",
        label: "Subtitle",
        placeholder: "we celebrate the upcoming union of",
        defaultValue: "we celebrate the upcoming union of",
        position: { x: 300, y: 270 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#f0e8d5",
        align: "center",
      },
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Sagar",
        defaultValue: "Sagar",
        position: { x: 270, y: 340 },
        fontSize: 60,
        fontFamily: "serif",
        color: "#f4c542",
        align: "right",
      },
      {
        id: "and",
        type: "text",
        label: "And",
        placeholder: "&",
        defaultValue: "&",
        position: { x: 300, y: 350 },
        fontSize: 44,
        fontFamily: "serif",
        color: "#f4c542",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Riya",
        defaultValue: "Riya",
        position: { x: 330, y: 340 },
        fontSize: 60,
        fontFamily: "serif",
        color: "#f4c542",
        align: "left",
      },
      {
        id: "full-date",
        type: "text",
        label: "Full Date",
        placeholder: "Sunday, November 27",
        defaultValue: "Sunday, November 27",
        position: { x: 300, y: 445 },
        fontSize: 28,
        fontFamily: "serif",
        color: "#ffffff",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "at 7:00 PM",
        defaultValue: "at 7:00 PM",
        position: { x: 300, y: 495 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#f0e8d5",
        align: "center",
      },
      {
        id: "message",
        type: "text",
        label: "Message",
        placeholder: "Let's celebrate together!",
        defaultValue: "Let's celebrate together!",
        position: { x: 300, y: 535 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#f0e8d5",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-[#f5eed6]">
        <img
          src="/images/premium4-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Event title */}
          <div className="text-center mt-38">
            <h1 className="text-4xl" style={{ color: "#f4c542" }}>
              {data["title"] || "Mehndi"}
            </h1>
            <h2 className="text-4xl mt-1" style={{ color: "#f0e8d5" }}>
              Celebration
            </h2>
          </div>

          {/* Subtitle */}
          <div className="text-center mt-4">
            <p className="text-base font-serif italic" style={{ color: "#f0e8d5" }}>
              {data["subtitle"] || "we celebrate the upcoming union of"}
            </p>
          </div>

          {/* Couple names */}
          <div className="text-center mt-6">
            <p className="text-6xl font-serif" style={{ color: "#f4c542" }}>
              {data["bride-name"] || "Sagar"} {data["and"] || "&"} {data["groom-name"] || "Riya"}
            </p>
          </div>

          {/* Date with pink background */}
          <div className="text-center mt-8 px-8 py-2 rounded-lg" style={{ backgroundColor: "#ff1f8f" }}>
            <p className="text-3xl font-serif font-bold" style={{ color: "#ffffff" }}>
              {data["full-date"] || "Sunday, November 27"}
            </p>
          </div>

          {/* Time */}
          <div className="text-center mt-3">
            <p className="text-xl font-serif italic" style={{ color: "#f0e8d5" }}>
              {data["time"] || "at 7:00 PM"}
            </p>
          </div>

          {/* Message */}
          <div className="text-center mt-2">
            <p className="text-lg font-serif italic" style={{ color: "#f0e8d5" }}>
              {data["message"] || "Let's celebrate together!"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "garden-romance-premium",
    name: "Garden Romance",
    description: "Romantic garden arch with pink roses and white drapes",
    thumbnail: "/images/premium5.jpg",
    backgroundImage: "/images/premium5-for-real-use.png",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Isabel",
        defaultValue: "Isabel",
        position: { x: 300, y: 330 },
        fontSize: 72,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Morgan",
        defaultValue: "Morgan",
        position: { x: 300, y: 470 },
        fontSize: 72,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "10",
        defaultValue: "10",
        position: { x: 300, y: 595 },
        fontSize: 32,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "AT 5 PM",
        defaultValue: "AT 5 PM",
        position: { x: 340, y: 615 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "123 Anywhere St., Any City",
        defaultValue: "123 Anywhere St., Any City",
        position: { x: 300, y: 710 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      }
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium5-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-6 mt-[150px]">
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#86672c" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-5xl font-serif mt-[63px]" style={{ fontFamily: "var(--font-serif)", color: "#86672c" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[105px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[85%] mt-[12px] justify-center items-baseline">
            <p className="text-xl font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-xl flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[15px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[30px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#86672c" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "elegant-couple",
    name: "Elegant Couple",
    isPremium: true,
    thumbnail: "/images/premium6.jpg",
    backgroundImage: "/images/premium6-for-real-use.png",
    description: "Sophisticated wedding invitation with floral accents and classic typography",
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Morgan",
        defaultValue: "Morgan",
        position: { x: 300, y: 330 },
        fontSize: 56,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Lerna",
        defaultValue: "Lerna",
        position: { x: 300, y: 450 },
        fontSize: 56,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "05",
        defaultValue: "05",
        position: { x: 300, y: 635 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "10:00 PM",
        defaultValue: "10:00 PM",
        position: { x: 390, y: 650 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "123 Anywhere st., Any City",
        defaultValue: "123 Anywhere st., Any City",
        position: { x: 300, y: 740 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium6-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center px-12">
          <div className="text-center space-y-6 mt-[257px] w-[75%]">
            <h1 className="text-5xl font-serif text-start" style={{ fontFamily: "var(--font-serif)", color: "#000000" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
        
            <h1 className="text-5xl font-serif mt-[48px] text-end" style={{ fontFamily: "var(--font-serif)", color: "#000000" }}>
              {data["groom-name"] || "Edward"}
            </h1>
          </div>

          <div className="text-center space-y-2 mt-[65px]">
            <p className="text-md font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
            May love, laughter, and happily ever after begin!
            </p>
          </div>

          <div className="text-center space-y-2 mt-[65px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"}
            </p>
          </div>

          <div className="text-center flex w-[72%] mt-[12px] justify-center items-baseline">
            <p className="text-xl font-semibold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {new Date(data["date"]).toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold flex-1 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {data["date"].split("-")[2]}
            </p>
            <p className="text-xl flex-1 font-sans font-semibold" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {data["time"] || "2:00 PM"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[15px]">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {data["date"].split('-')[0] || "2026"}
            </p>
          </div>

          <div className="text-center space-y-2 mt-[60px]">
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#000000" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sanskriti-vivah",
    name: "Sanskriti Vivah",
    isPremium: true,
    thumbnail: "/images/premium7.jpg",
    backgroundImage: "/images/premium7-for-real-use.png",
    description: "Traditional Hindu wedding invitation with floral motifs and rich colors",
    category: "Hindu",
    fields: [
      {
        id: "invitation-text",
        type: "text",
        label: "Invitation Text",
        placeholder:
          "With joyous hearts, Kapoor Family and Tandon Family request your gracious presence and blessings as",
        defaultValue:
          "With joyous hearts, Kapoor Family and Tandon Family request your gracious presence and blessings as",
        position: { x: 300, y: 280 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#8b1538",
        align: "center",
      },
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Gajara",
        defaultValue: "Gajara",
        position: { x: 300, y: 380 },
        fontSize: 68,
        fontFamily: "serif",
        color: "#a91c3f",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Posha",
        defaultValue: "Posha",
        position: { x: 300, y: 550 },
        fontSize: 68,
        fontFamily: "serif",
        color: "#a91c3f",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "MARCH 15TH, 2030",
        defaultValue: "MARCH 15TH, 2030",
        position: { x: 300, y: 640 },
        fontSize: 22,
        fontFamily: "serif",
        color: "#8b1538",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "Baraat: 8 pm",
        defaultValue: "Baraat: 8 pm",
        position: { x: 300, y: 715 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#8b1538",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Kapoor Residence",
        defaultValue: "Kapoor Residence",
        position: { x: 300, y: 680 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#8b1538",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium7-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Invitation text */}
          <div className="text-center mt-[235px] px-12 w-[85%]">
            <p className="text-base font-serif leading-relaxed" style={{ color: "#8b1538" }}>
              {data["invitation-text"] ||
                "With joyous hearts, Kapoor Family and Tandon Family request your gracious presence and blessings as"}
            </p>
          </div>

          {/* Bride name */}
          <div className="text-center mt-3 mb-[22px]">
            <p className="text-[50px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["bride-name"] || "Gajara"}
            </p>
          </div>

          {/* Groom name */}
          <div className="text-center mt-8">
            <p className="text-[50px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["groom-name"] || "Posha"}
            </p>
          </div>

          {/* Date */}
          <div className="text-center mt-10">
            <p className="text-[22px] font-serif tracking-wide" style={{ color: "#8b1538" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"} {data["date"].split("-")[2]}, {data["date"].split("-")[0]}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-3">
            <p className="text-xl font-serif" style={{ color: "#8b1538" }}>
              {data["venue"] || "Kapoor Residence"}
            </p>
          </div>

          {/* Time */}
          <div className="text-center mt-2">
            <p className="text-lg font-serif" style={{ color: "#8b1538" }}>
              {data["time"] || "Baraat: 8 pm"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "kalyanam-gold",
    name: "Kalyanam Gold",
    isPremium: true,
    thumbnail: "/images/premium8.jpg",
    backgroundImage: "/images/premium8-for-real-use.png",
    description: "Elegant Hindu wedding invitation with gold accents and traditional design elements",
    category: "Hindu",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Gajara Chopra",
        defaultValue: "Gajara Chopra",
        position: { x: 300, y: 470 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Saphal Mittal",
        defaultValue: "Saphal Mittal",
        position: { x: 300, y: 680 },
        fontSize: 52,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "APRIL 21ST 2030",
        defaultValue: "APRIL 21ST 2030",
        position: { x: 300, y: 790 },
        fontSize: 28,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "Five o'clock in the evening",
        defaultValue: "Five o'clock in the evening",
        position: { x: 300, y: 840 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Chopra Residence",
        defaultValue: "Chopra Residence",
        position: { x: 300, y: 875 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      }
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium8-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">

          {/* Bride name */}
          <div className="text-center mt-[417px] mb-[6px]">
            <p className="text-[50px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["bride-name"] || "Gajara"}
            </p>
          </div>
          <p className="text-[30px]">&</p>
          {/* Groom name */}
          <div className="text-center mt-3">
            <p className="text-[50px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["groom-name"] || "Posha"}
            </p>
          </div>

          {/* Date */}
          <div className="text-center mt-10 w-full">
            <p className="text-[22px] font-serif tracking-wide" style={{ color: "#8b1538" }}>
              {new Date(data["date"]).toLocaleString("en-US", { month: "long" }) || "December"} {data["date"].split("-")[2]}, {data["date"].split("-")[0]}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-3">
            <p className="text-xl font-serif" style={{ color: "#8b1538" }}>
              {data["venue"] || "Kapoor Residence"}
            </p>
          </div>

          {/* Time */}
          <div className="text-center mt-2">
            <p className="text-lg font-serif" style={{ color: "#8b1538" }}>
              {data["time"] || "Baraat: 8 pm"}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  //
]

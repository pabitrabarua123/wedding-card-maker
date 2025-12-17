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
  backgroundImage: string // Added background image for editing
  isPremium?: boolean
  category?: "Hindu" | "Muslim" | "Christian" | "General" // Added category field
  fields: TemplateField[]
  renderTemplate: (data: Record<string, string>) => React.ReactNode
}

export const templates: Template[] = [
  // FREE TEMPLATES
  {
    id: "classic-elegant",
    name: "Classic Elegant",
    description: "Timeless design with gold accents",
    thumbnail: "/elegant-wedding-invitation-with-gold-frame.jpg",
    backgroundImage: "/elegant-wedding-invitation-with-gold-frame.jpg", // Using same for now
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Sarah",
        defaultValue: "Sarah",
        position: { x: 300, y: 250 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "John",
        defaultValue: "John",
        position: { x: 300, y: 305 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "June 15, 2024",
        defaultValue: "June 15, 2024",
        position: { x: 300, y: 600 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "The Grand Ballroom",
        defaultValue: "The Grand Ballroom",
        position: { x: 300, y: 635 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#4a4a4a",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "4:00 PM",
        defaultValue: "4:00 PM",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#4a4a4a",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/elegant-wedding-invitation-with-gold-frame.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-4">
            <p className="text-sm tracking-wider text-gray-700 uppercase font-sans">You are invited to</p>
            <p className="text-sm tracking-widest text-gray-600 uppercase font-sans">The Wedding of</p>
            <h1 className="text-5xl font-serif" style={{ color: "#1a1a1a" }}>
              {data["bride-name"] || "Sarah"}
            </h1>
            <p className="text-3xl font-serif" style={{ color: "#4a4a4a" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#1a1a1a" }}>
              {data["groom-name"] || "John"}
            </h1>
            <div className="mt-12 space-y-2">
              <p className="text-xl font-semibold font-sans" style={{ color: "#2a2a2a" }}>
                {data["date"] || "June 15, 2024"}
              </p>
              <p className="text-base font-sans" style={{ color: "#4a4a4a" }}>
                {data["venue"] || "The Grand Ballroom"}
              </p>
              <p className="text-base font-sans" style={{ color: "#4a4a4a" }}>
                {data["time"] || "4:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "floral-romance",
    name: "Floral Romance",
    description: "Delicate florals in soft pink tones",
    thumbnail: "/romantic-floral-wedding-invitation-pink-flowers.jpg",
    backgroundImage: "/romantic-floral-wedding-invitation-pink-flowers.jpg",
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Emma",
        defaultValue: "Emma",
        position: { x: 300, y: 280 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#8b5a7f",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "James",
        defaultValue: "James",
        position: { x: 300, y: 330 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#8b5a7f",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "July 20, 2024",
        defaultValue: "July 20, 2024",
        position: { x: 300, y: 635 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#6a4a5f",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Garden Estate",
        defaultValue: "Garden Estate",
        position: { x: 300, y: 670 },
        fontSize: 15,
        fontFamily: "sans",
        color: "#7a5a6f",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/romantic-floral-wedding-invitation-pink-flowers.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-widest uppercase font-sans" style={{ color: "#7a5a6f" }}>
              Together with their families
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#8b5a7f" }}>
              {data["bride-name"] || "Emma"}
            </h1>
            <p className="text-2xl font-serif" style={{ color: "#8b5a7f" }}>
              and
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#8b5a7f" }}>
              {data["groom-name"] || "James"}
            </h1>
            <p className="text-sm tracking-wider uppercase font-sans pt-8" style={{ color: "#7a5a6f" }}>
              Request the pleasure of your company
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-lg font-semibold font-sans" style={{ color: "#6a4a5f" }}>
                {data["date"] || "July 20, 2024"}
              </p>
              <p className="text-sm font-sans" style={{ color: "#7a5a6f" }}>
                {data["venue"] || "Garden Estate"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean lines and contemporary style",
    thumbnail: "/modern-minimal-wedding-invitation-black-white.jpg",
    backgroundImage: "/modern-minimal-wedding-invitation-black-white.jpg",
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Olivia",
        defaultValue: "Olivia",
        position: { x: 300, y: 300 },
        fontSize: 48,
        fontFamily: "sans",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Michael",
        defaultValue: "Michael",
        position: { x: 300, y: 355 },
        fontSize: 48,
        fontFamily: "sans",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "08.20.2024",
        defaultValue: "08.20.2024",
        position: { x: 300, y: 500 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Modern Loft",
        defaultValue: "Modern Loft",
        position: { x: 300, y: 535 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#4a4a4a",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/modern-minimal-wedding-invitation-black-white.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-sans font-light" style={{ color: "#1a1a1a" }}>
              {data["bride-name"] || "Olivia"}
            </h1>
            <div className="w-12 h-px bg-gray-400 mx-auto" />
            <h1 className="text-6xl font-sans font-light" style={{ color: "#1a1a1a" }}>
              {data["groom-name"] || "Michael"}
            </h1>
            <div className="mt-12 space-y-3">
              <p className="text-xl font-sans" style={{ color: "#2a2a2a" }}>
                {data["date"] || "08.20.2024"}
              </p>
              <p className="text-base font-sans" style={{ color: "#4a4a4a" }}>
                {data["venue"] || "Modern Loft"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Warm wood and natural textures",
    thumbnail: "/rustic-wedding-invitation-wood-texture-burlap.jpg",
    backgroundImage: "/rustic-wedding-invitation-wood-texture-burlap.jpg",
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Sophia",
        defaultValue: "Sophia",
        position: { x: 300, y: 250 },
        fontSize: 44,
        fontFamily: "serif",
        color: "#5a4030",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Daniel",
        defaultValue: "Daniel",
        position: { x: 300, y: 300 },
        fontSize: 44,
        fontFamily: "serif",
        color: "#5a4030",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "September 10, 2024",
        defaultValue: "September 10, 2024",
        position: { x: 300, y: 630 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#6a5040",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Barn at Willow Creek",
        defaultValue: "Barn at Willow Creek",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#7a6050",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/rustic-wedding-invitation-wood-texture-burlap.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-4">
            <p className="text-sm tracking-wider font-sans" style={{ color: "#7a6050" }}>
              Join us for the wedding of
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#5a4030" }}>
              {data["bride-name"] || "Sophia"}
            </h1>
            <p className="text-3xl font-serif" style={{ color: "#6a5040" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#5a4030" }}>
              {data["groom-name"] || "Daniel"}
            </h1>
            <div className="mt-10 space-y-2">
              <p className="text-lg font-sans" style={{ color: "#6a5040" }}>
                {data["date"] || "September 10, 2024"}
              </p>
              <p className="text-base font-sans" style={{ color: "#7a6050" }}>
                {data["venue"] || "Barn at Willow Creek"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "luxury-glamour",
    name: "Luxury Glamour",
    description: "Opulent black and gold elegance",
    thumbnail: "/luxury-black-gold-wedding-invitation-glamorous.jpg",
    backgroundImage: "/luxury-black-gold-wedding-invitation-glamorous.jpg",
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Victoria",
        defaultValue: "Victoria",
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
        placeholder: "Alexander",
        defaultValue: "Alexander",
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
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          src="/luxury-black-gold-wedding-invitation-glamorous.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-widest uppercase font-sans" style={{ color: "#c4a137" }}>
              The Wedding of
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#d4af37" }}>
              {data["bride-name"] || "Victoria"}
            </h1>
            <p className="text-2xl font-serif" style={{ color: "#d4af37" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#d4af37" }}>
              {data["groom-name"] || "Alexander"}
            </h1>
            <p className="text-xs tracking-widest font-sans pt-6" style={{ color: "#c4a137" }}>
              Request the honor of your presence
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-lg font-sans" style={{ color: "#d4af37" }}>
                {data["date"] || "December 31, 2024"}
              </p>
              <p className="text-sm font-sans" style={{ color: "#c4a137" }}>
                {data["venue"] || "The Royal Palace"}
              </p>
              <p className="text-sm font-sans" style={{ color: "#c4a137" }}>
                {data["time"] || "7:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "garden-party",
    name: "Garden Party",
    description: "Fresh greenery and botanical beauty",
    thumbnail: "/garden-party-wedding-invitation-with-greenery-and-.jpg",
    backgroundImage: "/garden-party-wedding-invitation-with-greenery-and-.jpg",
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Lily",
        defaultValue: "Lily",
        position: { x: 300, y: 270 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#2d5016",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Ethan",
        defaultValue: "Ethan",
        position: { x: 300, y: 320 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#2d5016",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "May 25, 2024",
        defaultValue: "May 25, 2024",
        position: { x: 300, y: 630 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#3d6026",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Botanical Gardens",
        defaultValue: "Botanical Gardens",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#4d7036",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/garden-party-wedding-invitation-with-greenery-and-.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center py-16 px-12">
          <div className="text-center space-y-4">
            <p className="text-sm tracking-wider uppercase font-sans" style={{ color: "#4d7036" }}>
              Celebrate with us
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#2d5016" }}>
              {data["bride-name"] || "Lily"}
            </h1>
            <p className="text-3xl font-serif" style={{ color: "#3d6026" }}>
              and
            </p>
            <h1 className="text-5xl font-serif" style={{ color: "#2d5016" }}>
              {data["groom-name"] || "Ethan"}
            </h1>
            <div className="mt-10 space-y-2">
              <p className="text-lg font-sans" style={{ color: "#3d6026" }}>
                {data["date"] || "May 25, 2024"}
              </p>
              <p className="text-base font-sans" style={{ color: "#4d7036" }}>
                {data["venue"] || "Botanical Gardens"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // PREMIUM TEMPLATES
  {
    id: "royal-elegance",
    name: "Royal Elegance",
    description: "Majestic design with crown motifs",
    thumbnail: "/royal-elegant-wedding-invitation-with-crown-and-lu.jpg",
    isPremium: true,
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Catherine",
        defaultValue: "Catherine",
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
        placeholder: "Edward",
        defaultValue: "Edward",
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
        placeholder: "October 10, 2024",
        defaultValue: "October 10, 2024",
        position: { x: 300, y: 630 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#A52A2A",
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
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "2:00 PM",
        defaultValue: "2:00 PM",
        position: { x: 300, y: 695 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#B22222",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/royal-elegant-wedding-invitation-with-crown-and-lu.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between py-16 px-12">
          <div className="text-center space-y-6 mt-28">
            <p
              className="text-xs tracking-0.3em uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#8B0000" }}
            >
              Royal Wedding Invitation
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["bride-name"] || "Catherine"}
            </h1>
            <p className="text-3xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#A52A2A" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B0000" }}>
              {data["groom-name"] || "Edward"}
            </h1>
            <p
              className="text-sm tracking-wider font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}
            >
              Request the pleasure of your company
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A52A2A" }}>
              {data["date"] || "October 10, 2024"}
            </p>
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["venue"] || "Westminster Abbey"}
            </p>
            <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B22222" }}>
              {data["time"] || "2:00 PM"}
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
    thumbnail: "/celestial-night-sky-wedding-invitation-with-stars-.jpg",
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
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-[#0a1128]">
        <img
          src="/celestial-night-sky-wedding-invitation-with-stars-.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center py-20 px-12">
          <div className="text-center space-y-6">
            <p
              className="text-xs tracking-0.4em uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#F4E5C2" }}
            >
              Under the Stars
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#E8D5B7" }}>
              {data["bride-name"] || "Luna"}
            </h1>
            <Sparkles className="w-6 h-6 text-[#E8D5B7] mx-auto" />
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#E8D5B7" }}>
              {data["groom-name"] || "Orion"}
            </h1>
            <p className="text-sm pt-4 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#F4E5C2" }}>
              Invite you to witness their celestial union
            </p>

            <div className="pt-8 space-y-2">
              <p
                className="text-xl font-semibold font-sans"
                style={{ fontFamily: "var(--font-sans)", color: "#F4E5C2" }}
              >
                {data["date"] || "November 11, 2024"}
              </p>
              <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#F4E5C2" }}>
                {data["venue"] || "Observatory Hill"}
              </p>
              <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#F4E5C2" }}>
                {data["time"] || "8:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "art-deco-gatsby",
    name: "Art Deco Gatsby",
    description: "1920s glamour with geometric patterns",
    thumbnail: "/art-deco-gatsby-wedding-invitation-gold-black-geom.jpg",
    isPremium: true,
    category: "Muslim",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Daisy",
        defaultValue: "Daisy",
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
        placeholder: "Gatsby",
        defaultValue: "Gatsby",
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
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          src="/art-deco-gatsby-wedding-invitation-gold-black-geom.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center py-20 px-12">
          <div className="text-center space-y-6">
            <p
              className="text-xs tracking-0.5em uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#E6C200" }}
            >
              An Evening of Splendor
            </p>
            <h1 className="text-6xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#FFD700" }}>
              {data["bride-name"] || "Daisy"}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-[#FFD700]"></div>
              <Sparkles className="w-5 h-5 text-[#FFD700]" />
              <div className="w-20 h-px bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-transparent"></div>
            </div>
            <h1 className="text-6xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#FFD700" }}>
              {data["groom-name"] || "Gatsby"}
            </h1>

            <div className="pt-8 space-y-2">
              <p
                className="text-xl font-semibold font-sans"
                style={{ fontFamily: "var(--font-sans)", color: "#E6C200" }}
              >
                {data["date"] || "January 1, 2025"}
              </p>
              <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#CCAA00" }}>
                {data["venue"] || "The Great Hall"}
              </p>
              <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#CCAA00" }}>
                {data["time"] || "9:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "watercolor-dream",
    name: "Watercolor Dream",
    description: "Soft pastel watercolor artistry",
    thumbnail: "/watercolor-wedding-invitation-soft-pastel-artistic.jpg",
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
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Watercolor Pavilion",
        defaultValue: "Watercolor Pavilion",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#9E6B8A",
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
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/watercolor-wedding-invitation-soft-pastel-artistic.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between py-16 px-12">
          <div className="text-center space-y-5 mt-32">
            <p
              className="text-sm tracking-wider uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#B5779C" }}
            >
              You're Invited
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#C96A8E" }}>
              {data["bride-name"] || "Aurora"}
            </h1>
            <p className="text-2xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#B5779C" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#C96A8E" }}>
              {data["groom-name"] || "Sebastian"}
            </h1>
            <p className="text-base pt-4 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#9E6B8A" }}>
              Are getting married
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#B5779C" }}>
              {data["date"] || "April 20, 2024"}
            </p>
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#9E6B8A" }}>
              {data["venue"] || "Watercolor Pavilion"}
            </p>
            <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#9E6B8A" }}>
              {data["time"] || "4:30 PM"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    description: "Vibrant tropical flowers and leaves",
    thumbnail: "/tropical-paradise-wedding-invitation-palm-leaves-e.jpg",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Marina",
        defaultValue: "Marina",
        position: { x: 300, y: 320 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#FF6B9D",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Diego",
        defaultValue: "Diego",
        position: { x: 300, y: 370 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#FF6B9D",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "July 15, 2024",
        defaultValue: "July 15, 2024",
        position: { x: 300, y: 530 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#E8527A",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Beach Resort",
        defaultValue: "Beach Resort",
        position: { x: 300, y: 565 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#D14468",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "5:00 PM",
        defaultValue: "5:00 PM",
        position: { x: 300, y: 595 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#D14468",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/tropical-paradise-wedding-invitation-palm-leaves-e.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center py-20 px-12">
          <div className="text-center space-y-6">
            <p
              className="text-sm tracking-wider uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#D14468" }}
            >
              Destination Wedding
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#FF6B9D" }}>
              {data["bride-name"] || "Marina"}
            </h1>
            <Flower2 className="w-6 h-6 text-[#FF6B9D] mx-auto" />
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#FF6B9D" }}>
              {data["groom-name"] || "Diego"}
            </h1>
            <p className="text-base pt-4 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#E8527A" }}>
              Join us for a tropical celebration
            </p>

            <div className="pt-6 space-y-2">
              <p
                className="text-xl font-semibold font-sans"
                style={{ fontFamily: "var(--font-sans)", color: "#E8527A" }}
              >
                {data["date"] || "July 15, 2024"}
              </p>
              <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#D14468" }}>
                {data["venue"] || "Beach Resort"}
              </p>
              <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#D14468" }}>
                {data["time"] || "5:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "vintage-romance",
    name: "Vintage Romance",
    description: "Nostalgic vintage lace and antique style",
    thumbnail: "/vintage-romantic-wedding-invitation-lace-antique-s.jpg",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Elizabeth",
        defaultValue: "Elizabeth",
        position: { x: 300, y: 250 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#8B7355",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Henry",
        defaultValue: "Henry",
        position: { x: 300, y: 300 },
        fontSize: 38,
        fontFamily: "serif",
        color: "#8B7355",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "March 25, 2024",
        defaultValue: "March 25, 2024",
        position: { x: 300, y: 630 },
        fontSize: 20,
        fontFamily: "sans",
        color: "#9B8568",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "Heritage Manor",
        defaultValue: "Heritage Manor",
        position: { x: 300, y: 665 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#A5906B",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "2:30 PM",
        defaultValue: "2:30 PM",
        position: { x: 300, y: 695 },
        fontSize: 16,
        fontFamily: "sans",
        color: "#A5906B",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/vintage-romantic-wedding-invitation-lace-antique-s.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between py-16 px-12">
          <div className="text-center space-y-5 mt-28">
            <p
              className="text-sm tracking-wider uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#9B8568" }}
            >
              A Vintage Affair
            </p>
            <p className="text-lg font-sans" style={{ fontFamily: "var(--font-sans)", color: "#8B7355" }}>
              The Wedding of
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B7355" }}>
              {data["bride-name"] || "Elizabeth"}
            </h1>
            <p className="text-2xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#9B8568" }}>
              &
            </p>
            <h1 className="text-5xl font-serif" style={{ fontFamily: "var(--font-serif)", color: "#8B7355" }}>
              {data["groom-name"] || "Henry"}
            </h1>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl font-semibold font-sans" style={{ fontFamily: "var(--font-sans)", color: "#9B8568" }}>
              {data["date"] || "March 25, 2024"}
            </p>
            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A5906B" }}>
              {data["venue"] || "Heritage Manor"}
            </p>
            <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#A5906B" }}>
              {data["time"] || "2:30 PM"}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // NEW PREMIUM TEMPLATES INSPIRED BY USER IMAGES
  {
    id: "soft-magnolia",
    name: "Soft Magnolia",
    description: "Delicate pink watercolor with magnolia flowers",
    thumbnail: "/premium1.jpg",
    backgroundImage: "/premium1-for-real-use.jpg", // Separate clean background
    isPremium: true,
    category: "Hindu",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Claudia",
        defaultValue: "Claudia",
        position: { x: 300, y: 215 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#4a1f3a",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Morgan",
        defaultValue: "Morgan",
        position: { x: 300, y: 280 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#4a1f3a",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "30",
        defaultValue: "30",
        position: { x: 300, y: 380 },
        fontSize: 72,
        fontFamily: "serif",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "NOVEMBER",
        defaultValue: "NOVEMBER",
        position: { x: 300, y: 380 },
        fontSize: 14,
        fontFamily: "sans",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2023",
        defaultValue: "2023",
        position: { x: 300, y: 380 },
        fontSize: 32,
        fontFamily: "serif",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "AT 8 AM",
        defaultValue: "AT 8 AM",
        position: { x: 300, y: 380 },
        fontSize: 14,
        fontFamily: "sans",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "venue-name",
        type: "text",
        label: "Venue Name",
        placeholder: "BORCELLE HOTEL",
        defaultValue: "BORCELLE HOTEL",
        position: { x: 300, y: 470 },
        fontSize: 15,
        fontFamily: "sans",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "venue-address",
        type: "text",
        label: "Venue Address",
        placeholder: "123 ANYWHERE ST., ANY CITY, ST 12345",
        defaultValue: "123 ANYWHERE ST., ANY CITY, ST 12345",
        position: { x: 300, y: 470 },
        fontSize: 10,
        fontFamily: "sans",
        color: "#4a4a4a",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-pink-50">
        <img
          src="/premium1-for-real-use.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between py-12 px-12">
          <div className="text-center space-y-2 mt-2">
            <p className="text-xs tracking-wider uppercase font-sans" style={{ color: "#6a4a5a" }}>
              You are invited to
            </p>
            <p className="text-xs tracking-widest uppercase font-sans" style={{ color: "#5a3a4a" }}>
              The Wedding of
            </p>
          </div>

          <div className="text-center space-y-3">
            <h1 className="text-6xl font-serif italic" style={{ color: "#4a1f3a" }}>
              {data["bride-name"] || "Claudia"}
            </h1>
            <p className="text-4xl font-serif italic" style={{ color: "#5a2f4a" }}>
              &
            </p>
            <h1 className="text-6xl font-serif italic" style={{ color: "#4a1f3a" }}>
              {data["groom-name"] || "Morgan"}
            </h1>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-4">
              <p className="text-sm tracking-widest uppercase font-sans" style={{ color: "#2a2a2a" }}>
                {data["month"] || "NOVEMBER"}
              </p>
              <p className="text-7xl font-serif font-bold" style={{ color: "#1a1a1a" }}>
                {data["date"] || "30"}
              </p>
              <p className="text-sm tracking-widest uppercase font-sans" style={{ color: "#2a2a2a" }}>
                {data["time"] || "AT 8 AM"}
              </p>
            </div>
            <p className="text-3xl font-serif" style={{ color: "#1a1a1a" }}>
              {data["year"] || "2023"}
            </p>
          </div>

          <div className="text-center space-y-1 mb-4">
            <p className="text-base font-sans font-bold tracking-wide" style={{ color: "#1a1a1a" }}>
              {data["venue-name"] || "BORCELLE HOTEL"}
            </p>
            <p className="text-xs font-sans tracking-wide" style={{ color: "#4a4a4a" }}>
              {data["venue-address"] || "123 ANYWHERE ST., ANY CITY, ST 12345"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "navy-rose-garden",
    name: "Navy Rose Garden",
    description: "Dramatic navy blue with watercolor pink roses",
    thumbnail: "/navy-blue-pink-rose-wedding-save-date.jpg",
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
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "123 Anywhere St., Any City, ST 12345",
        defaultValue: "123 Anywhere St., Any City, ST 12345",
        position: { x: 450, y: 860 },
        fontSize: 14,
        fontFamily: "sans",
        color: "#FFFFFF",
        align: "right",
      },
      {
        id: "message",
        type: "text",
        label: "Message",
        placeholder: "With love, Samira & Murad",
        defaultValue: "With love, Samira & Murad",
        position: { x: 450, y: 1120 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#FFFFFF",
        align: "right",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-[#1a3a52]">
        <img
          src="/navy-blue-pink-rose-wedding-save-date.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 px-16 py-16">
          <div className="mt-32">
            <p
              className="text-3xl tracking-0.3em uppercase mb-8 font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#FFFFFF" }}
            >
              Save the Date
            </p>
            <p className="text-lg mb-8 font-sans" style={{ fontFamily: "var(--font-sans)", color: "#FFFFFF" }}>
              Together with their families,
            </p>

            <div className="space-y-4 mb-12">
              <h1
                className="text-7xl italic leading-tight font-serif"
                style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF" }}
              >
                {data["bride-name"] || "Samira"}
              </h1>
              <p className="text-4xl font-serif italic" style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF" }}>
                &
              </p>
              <h1
                className="text-7xl italic leading-tight font-serif"
                style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF" }}
              >
                {data["groom-name"] || "Murad"}
              </h1>
            </div>

            <p className="text-base font-sans" style={{ fontFamily: "var(--font-sans)", color: "#FFFFFF" }}>
              joyfully invite you to celebrate their wedding!
            </p>
          </div>

          <div className="absolute right-16 top-[500px] text-right">
            <div className="mb-6">
              <Gift className="w-12 h-12 text-white mb-4 ml-auto" />
              <p className="text-lg font-medium font-sans" style={{ fontFamily: "var(--font-sans)", color: "#FFFFFF" }}>
                {data["date"] || "Saturday, September 21, 2025"}
              </p>
            </div>

            <div className="mb-6">
              <Church className="w-12 h-12 text-white mb-4 ml-auto" />
              <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#FFFFFF" }}>
                {data["venue"] || "123 Anywhere St., Any City, ST 12345"}
              </p>
            </div>
          </div>

          <div className="absolute bottom-16 right-16 text-right">
            <p className="text-xl font-serif italic" style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF" }}>
              {data["message"] || `With love, ${data["bride-name"] || "Samira"} & ${data["groom-name"] || "Murad"}`}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "orchid-watercolor",
    name: "Orchid Watercolor",
    description: "Soft pastel washes with elegant white orchids",
    thumbnail: "/watercolor-orchid-wedding-invitation-pastel.jpg",
    isPremium: true,
    category: "Christian",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Jamet J",
        defaultValue: "Jamet J",
        position: { x: 300, y: 205 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Larissa H",
        defaultValue: "Larissa H",
        position: { x: 300, y: 315 },
        fontSize: 42,
        fontFamily: "serif",
        color: "#2a2a2a",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Wedding Date",
        placeholder: "Saturday, 18 November 2024",
        defaultValue: "Saturday, 18 November 2024",
        position: { x: 200, y: 405 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "8.00 PM",
        defaultValue: "8.00 PM",
        position: { x: 400, y: 405 },
        fontSize: 18,
        fontFamily: "sans",
        color: "#1a1a1a",
        align: "center",
      },
      {
        id: "venue",
        type: "text",
        label: "Venue",
        placeholder: "123 Anywhere St., Any City, ST 12345",
        defaultValue: "123 Anywhere St., Any City, ST 12345",
        position: { x: 300, y: 465 },
        fontSize: 13,
        fontFamily: "sans",
        color: "#2a2a2a",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#fef5f1] via-[#fef9f5] to-[#fff0e6]">
        <img
          src="/watercolor-orchid-wedding-invitation-pastel.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12 py-16">
          <div className="text-center space-y-1 mt-20">
            <p
              className="text-xs tracking-wider uppercase font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#4a4a4a" }}
            >
              You are invited to
            </p>
            <p
              className="text-sm tracking-wide uppercase mb-4 font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#2a2a2a" }}
            >
              The Wedding of
            </p>

            <div className="py-2">
              <h1
                className="text-6xl italic leading-tight font-serif"
                style={{ fontFamily: "var(--font-serif)", color: "#2a2a2a" }}
              >
                {data["bride-name"] || "Jamet J"}
              </h1>
              <p
                className="text-4xl font-serif italic my-3"
                style={{ fontFamily: "var(--font-serif)", color: "#4a4a4a" }}
              >
                &
              </p>
              <h1
                className="text-6xl italic leading-tight font-serif"
                style={{ fontFamily: "var(--font-serif)", color: "#2a2a2a" }}
              >
                {data["groom-name"] || "Larissa H"}
              </h1>
            </div>
          </div>

          <div className="text-center mt-8 bg-white/40 backdrop-blur-sm rounded-lg px-8 py-4">
            <div className="flex items-center justify-center gap-12 border-2 border-[#2a2a2a] px-6 py-3">
              <div className="text-center">
                <p
                  className="text-xs uppercase tracking-wider mb-1 font-sans"
                  style={{ fontFamily: "var(--font-sans)", color: "#1a1a1a" }}
                >
                  Saturday
                </p>
                <p
                  className="text-6xl font-bold leading-none font-sans"
                  style={{ fontFamily: "var(--font-sans)", color: "#1a1a1a" }}
                >
                  18
                </p>
                <p
                  className="text-xs mt-1 uppercase font-sans"
                  style={{ fontFamily: "var(--font-sans)", color: "#1a1a1a" }}
                >
                  November
                </p>
                <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#2a2a2a" }}>
                  2024
                </p>
              </div>
              <div className="w-px h-20 bg-[#2a2a2a]"></div>
              <div className="text-center">
                <p
                  className="text-xs uppercase tracking-wider mb-2 font-sans"
                  style={{ fontFamily: "var(--font-sans)", color: "#1a1a1a" }}
                >
                  At
                </p>
                <p
                  className="text-4xl font-semibold font-sans"
                  style={{ fontFamily: "var(--font-sans)", color: "#1a1a1a" }}
                >
                  8.00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p
              className="text-xs uppercase tracking-wider mb-1 font-sans"
              style={{ fontFamily: "var(--font-sans)", color: "#4a4a4a" }}
            >
              At the
            </p>
            <p className="text-sm font-sans" style={{ fontFamily: "var(--font-sans)", color: "#2a2a2a" }}>
              {data["venue"] || "123 Anywhere St., Any City, ST 12345"}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "indian-floral-premium",
    name: "Indian Floral Premium",
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
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "JULY",
        defaultValue: "JULY",
        position: { x: 300, y: 500 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "day",
        type: "text",
        label: "Day",
        placeholder: "SUNDAY",
        defaultValue: "SUNDAY",
        position: { x: 220, y: 540 },
        fontSize: 16,
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
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2024",
        defaultValue: "2024",
        position: { x: 300, y: 590 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#f5e6d3",
        align: "center",
      },
      {
        id: "venue-address",
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
          {/* Om symbol area - kept empty as it's in background */}
          <div className="h-16" />

          {/* Together with families text */}
          <div className="text-center mt-20">
            <p className="text-sm tracking-wide font-serif" style={{ color: "#f5e6d3" }}>
              Together with their families
            </p>
          </div>

          {/* Bride and Groom names */}
          <div className="text-center mt-8 space-y-2">
            <h1 className="text-5xl font-serif tracking-wide" style={{ color: "#f5e6d3", letterSpacing: "0.05em" }}>
              {data["bride-name"] || "PRERNA SINGH"}
            </h1>
            <p className="text-3xl font-serif italic" style={{ color: "#f5e6d3" }}>
              &
            </p>
            <h1 className="text-5xl font-serif tracking-wide" style={{ color: "#f5e6d3", letterSpacing: "0.05em" }}>
              {data["groom-name"] || "SUMIT GUPTA"}
            </h1>
          </div>

          {/* Invitation text */}
          <div className="text-center mt-6">
            <p className="text-xs font-serif" style={{ color: "#f5e6d3" }}>
              cordially invite you to join the occasion of
            </p>
            <p className="text-xs font-serif" style={{ color: "#f5e6d3" }}>
              their joyous commitment on
            </p>
          </div>

          {/* Date section */}
          <div className="text-center mt-8">
            <p className="text-xl tracking-widest font-serif mb-2" style={{ color: "#f5e6d3" }}>
              {data["month"] || "JULY"}
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p
                  className="text-base tracking-wider font-serif border-t border-b border-[#f5e6d3] py-1 px-4"
                  style={{ color: "#f5e6d3" }}
                >
                  {data["day"] || "SUNDAY"}
                </p>
              </div>
              <p className="text-8xl font-serif font-light" style={{ color: "#f5e6d3" }}>
                {data["date"] || "28"}
              </p>
              <div className="text-center">
                <p
                  className="text-base tracking-wider font-serif border-t border-b border-[#f5e6d3] py-1 px-4"
                  style={{ color: "#f5e6d3" }}
                >
                  {data["time"] || "AT 8AM"}
                </p>
              </div>
            </div>
            <p className="text-xl tracking-widest font-serif mt-2" style={{ color: "#f5e6d3" }}>
              {data["year"] || "2024"}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-8">
            <p className="text-sm font-serif italic mb-1" style={{ color: "#f5e6d3" }}>
              at
            </p>
            <p className="text-sm font-serif tracking-wide" style={{ color: "#f5e6d3" }}>
              {data["venue-address"] || "123 ANYWHERE ST, ANY CITY, ST 12345"}
            </p>
          </div>

          {/* RSVP text */}
          <div className="text-center mt-8">
            <p className="text-xs font-serif italic" style={{ color: "#f5e6d3" }}>
              Kindly RSVP before 17th June on
            </p>
            <p className="text-xs font-serif" style={{ color: "#f5e6d3" }}>
              +123-456-7890
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "rose-garden-wreath-premium",
    name: "Rose Garden Wreath",
    description: "Elegant pink roses with gold circular wreath frame",
    thumbnail: "/images/premium2.jpg",
    backgroundImage: "/images/premium2-for-real-use.png",
    isPremium: true,
    category: "Hindu",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "SACHA",
        defaultValue: "SACHA",
        position: { x: 300, y: 200 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "DANIEL",
        defaultValue: "DANIEL",
        position: { x: 300, y: 300 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "MARCH",
        defaultValue: "MARCH",
        position: { x: 300, y: 560 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "day",
        type: "text",
        label: "Day",
        placeholder: "MONDAY",
        defaultValue: "MONDAY",
        position: { x: 220, y: 600 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "10",
        defaultValue: "10",
        position: { x: 300, y: 605 },
        fontSize: 80,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "AT 5 PM",
        defaultValue: "AT 5 PM",
        position: { x: 380, y: 600 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2023",
        defaultValue: "2023",
        position: { x: 300, y: 660 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "venue-address",
        type: "text",
        label: "Venue Address",
        placeholder: "123 ANY WHERE ST., ANY CITY",
        defaultValue: "123 ANY WHERE ST., ANY CITY",
        position: { x: 300, y: 700 },
        fontSize: 13,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium2-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Top section with names inside gold circle */}
          <div className="text-center mt-32">
            <h1 className="text-5xl font-serif tracking-wide" style={{ color: "#2d2d2d", letterSpacing: "0.1em" }}>
              {data["bride-name"] || "SACHA"}
            </h1>
            <p className="text-3xl font-serif italic my-2" style={{ color: "#2d2d2d" }}>
              and
            </p>
            <h1 className="text-5xl font-serif tracking-wide" style={{ color: "#2d2d2d", letterSpacing: "0.1em" }}>
              {data["groom-name"] || "DANIEL"}
            </h1>
          </div>

          {/* Invitation text */}
          <div className="text-center mt-8">
            <p className="text-sm font-serif tracking-wide leading-relaxed" style={{ color: "#2d2d2d" }}>
              WE INVITE YOU TO CELEBRATE LOVE AND
            </p>
            <p className="text-sm font-serif tracking-wide" style={{ color: "#2d2d2d" }}>
              COMMITMENT WITH US
            </p>
          </div>

          {/* Date section */}
          <div className="text-center mt-6">
            <p className="text-lg tracking-widest font-serif mb-2" style={{ color: "#2d2d2d" }}>
              {data["month"] || "MARCH"}
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-base tracking-wider font-serif" style={{ color: "#2d2d2d" }}>
                  {data["day"] || "MONDAY"}
                </p>
              </div>
              <p className="text-xl font-serif" style={{ color: "#2d2d2d" }}>
                |
              </p>
              <p className="text-8xl font-serif font-light" style={{ color: "#2d2d2d" }}>
                {data["date"] || "10"}
              </p>
              <p className="text-xl font-serif" style={{ color: "#2d2d2d" }}>
                |
              </p>
              <div className="text-center">
                <p className="text-base tracking-wider font-serif" style={{ color: "#2d2d2d" }}>
                  {data["time"] || "AT 5 PM"}
                </p>
              </div>
            </div>
            <p className="text-lg tracking-widest font-serif mt-2" style={{ color: "#2d2d2d" }}>
              {data["year"] || "2023"}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-6">
            <p className="text-sm font-serif tracking-wide" style={{ color: "#2d2d2d" }}>
              {data["venue-address"] || "123 ANY WHERE ST., ANY CITY"}
            </p>
          </div>

          {/* Reception text */}
          <div className="text-center mt-6">
            <p className="text-xl font-serif italic" style={{ color: "#2d2d2d" }}>
              {data["reception"] || "Reception to Follow"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "indian-celebration-premium",
    name: "Indian Celebration",
    description: "Save the date with purple curtains and Indian couple illustration",
    thumbnail: "/images/premium3.jpg",
    backgroundImage: "/images/premium3-for-real-use.png",
    isPremium: true,
    category: "Hindu",
    fields: [
      {
        id: "bride-name",
        type: "text",
        label: "Bride's Name",
        placeholder: "Bride",
        defaultValue: "Bride",
        position: { x: 300, y: 200 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#8b5a9f",
        align: "center",
      },
      {
        id: "groom-name",
        type: "text",
        label: "Groom's Name",
        placeholder: "Groom",
        defaultValue: "Groom",
        position: { x: 300, y: 260 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#8b5a9f",
        align: "center",
      },
      {
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "JAN",
        defaultValue: "JAN",
        position: { x: 300, y: 365 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "day",
        type: "text",
        label: "Day",
        placeholder: "WEDNESDAY",
        defaultValue: "WEDNESDAY",
        position: { x: 200, y: 415 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "date",
        type: "text",
        label: "Date",
        placeholder: "15",
        defaultValue: "15",
        position: { x: 300, y: 415 },
        fontSize: 100,
        fontFamily: "serif",
        color: "#8b5a9f",
        align: "center",
      },
      {
        id: "time",
        type: "text",
        label: "Time",
        placeholder: "AT 8 PM",
        defaultValue: "AT 8 PM",
        position: { x: 400, y: 415 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2025",
        defaultValue: "2025",
        position: { x: 300, y: 490 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium3-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Save the date header */}
          <div className="text-center mt-24">
            <p className="text-2xl font-serif tracking-widest" style={{ color: "#8b5a9f" }}>
              SAVE THE DATE
            </p>
          </div>

          {/* 1 Month to go text */}
          <div className="text-center mt-4">
            <p className="text-5xl font-serif italic" style={{ color: "#8b5a9f" }}>
              1 Month to go!
            </p>
          </div>

          {/* Message */}
          <div className="text-center mt-4">
            <p className="text-sm font-serif italic" style={{ color: "#2d2d2d" }}>
              we are thrilled to share that our special day
            </p>
          </div>

          {/* Date section */}
          <div className="text-center mt-6">
            <p className="text-xl tracking-widest font-serif mb-3" style={{ color: "#2d2d2d" }}>
              {data["month"] || "JAN"}
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p
                  className="text-base tracking-wider font-serif border-t border-b border-gray-800 py-2 px-6"
                  style={{ color: "#2d2d2d" }}
                >
                  {data["day"] || "WEDNESDAY"}
                </p>
              </div>
              <p className="text-9xl font-serif font-bold" style={{ color: "#8b5a9f" }}>
                {data["date"] || "15"}
              </p>
              <div className="text-center">
                <p
                  className="text-base tracking-wider font-serif border-t border-b border-gray-800 py-2 px-6"
                  style={{ color: "#2d2d2d" }}
                >
                  {data["time"] || "AT 8 PM"}
                </p>
              </div>
            </div>
            <p className="text-xl tracking-widest font-serif mt-3" style={{ color: "#2d2d2d" }}>
              {data["year"] || "2025"}
            </p>
          </div>

          {/* Bottom message */}
          <div className="text-center mt-6">
            <p className="text-sm font-serif italic leading-relaxed" style={{ color: "#2d2d2d" }}>
              Make sure to mark your calendars, and stay tuned for
            </p>
            <p className="text-sm font-serif italic" style={{ color: "#2d2d2d" }}>
              more details coming your way!
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
    category: "Hindu",
    fields: [
      {
        id: "title",
        type: "text",
        label: "Event Title",
        placeholder: "Mehndi Celebration",
        defaultValue: "Mehndi Celebration",
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
          <div className="text-center mt-28">
            <h1 className="text-5xl font-serif italic" style={{ color: "#f4c542" }}>
              {data["title"] || "Mehndi"}
            </h1>
            <h2 className="text-5xl font-serif italic mt-1" style={{ color: "#f0e8d5" }}>
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
            <p className="text-6xl font-serif italic leading-tight" style={{ color: "#f4c542" }}>
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
        id: "header",
        type: "text",
        label: "Header Text",
        placeholder: "TOGETHER WITH THEIR FAMILIES",
        defaultValue: "TOGETHER WITH THEIR FAMILIES",
        position: { x: 300, y: 220 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
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
        id: "and",
        type: "text",
        label: "And Symbol",
        placeholder: "&",
        defaultValue: "&",
        position: { x: 300, y: 400 },
        fontSize: 48,
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
        id: "invite-text",
        type: "text",
        label: "Invitation Text",
        placeholder: "Invite you to their wedding",
        defaultValue: "Invite you to their wedding",
        position: { x: 300, y: 540 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "day",
        type: "text",
        label: "Day",
        placeholder: "MONDAY",
        defaultValue: "MONDAY",
        position: { x: 260, y: 615 },
        fontSize: 18,
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
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "MAY",
        defaultValue: "MAY",
        position: { x: 300, y: 635 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
      {
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2023",
        defaultValue: "2023",
        position: { x: 300, y: 660 },
        fontSize: 18,
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
      },
      {
        id: "reception",
        type: "text",
        label: "Reception Note",
        placeholder: "Reception to Follow",
        defaultValue: "Reception to Follow",
        position: { x: 300, y: 750 },
        fontSize: 20,
        fontFamily: "serif",
        color: "#5a4a3a",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium5-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Header text */}
          <div className="text-center mt-32">
            <p className="text-base font-serif tracking-widest" style={{ color: "#5a4a3a" }}>
              {data["header"] || "TOGETHER WITH THEIR FAMILIES"}
            </p>
          </div>

          {/* Couple names */}
          <div className="text-center mt-12">
            <p className="text-7xl font-serif italic leading-tight" style={{ color: "#5a4a3a" }}>
              {data["bride-name"] || "Isabel"}
            </p>
            <p className="text-5xl font-serif italic mt-2" style={{ color: "#5a4a3a" }}>
              {data["and"] || "&"}
            </p>
            <p className="text-7xl font-serif italic mt-2" style={{ color: "#5a4a3a" }}>
              {data["groom-name"] || "Morgan"}
            </p>
          </div>

          {/* Invitation text */}
          <div className="text-center mt-6">
            <p className="text-lg font-serif italic" style={{ color: "#5a4a3a" }}>
              {data["invite-text"] || "Invite you to their wedding"}
            </p>
          </div>

          {/* Date grid */}
          <div
            className="flex items-center justify-center gap-0 mt-6"
            style={{ borderTop: "1px solid #5a4a3a", borderBottom: "1px solid #5a4a3a" }}
          >
            <div className="px-6 py-3 text-center" style={{ borderRight: "1px solid #5a4a3a" }}>
              <p className="text-lg font-serif tracking-wider" style={{ color: "#5a4a3a" }}>
                {data["day"] || "MONDAY"}
              </p>
            </div>
            <div className="px-8 py-2 text-center" style={{ borderRight: "1px solid #5a4a3a" }}>
              <p className="text-3xl font-serif font-bold" style={{ color: "#5a4a3a" }}>
                {data["date"] || "10"}
              </p>
              <p className="text-lg font-serif tracking-wider" style={{ color: "#5a4a3a" }}>
                {data["month"] || "MAY"}
              </p>
              <p className="text-lg font-serif" style={{ color: "#5a4a3a" }}>
                {data["year"] || "2023"}
              </p>
            </div>
            <div className="px-6 py-3 text-center">
              <p className="text-lg font-serif tracking-wider" style={{ color: "#5a4a3a" }}>
                {data["time"] || "AT 5 PM"}
              </p>
            </div>
          </div>

          {/* Venue */}
          <div className="text-center mt-6">
            <p className="text-base font-serif" style={{ color: "#5a4a3a" }}>
              {data["venue"] || "123 Anywhere St., Any City"}
            </p>
          </div>

          {/* Reception note */}
          <div className="text-center mt-3">
            <p className="text-xl font-serif italic" style={{ color: "#5a4a3a" }}>
              {data["reception"] || "Reception to Follow"}
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
        id: "and",
        type: "text",
        label: "And Symbol",
        placeholder: "&",
        defaultValue: "&",
        position: { x: 300, y: 390 },
        fontSize: 48,
        fontFamily: "serif",
        color: "#000000",
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
        id: "message",
        type: "text",
        label: "Message",
        placeholder: "May love, laughter, and beautiful memories always brighten your journey together",
        defaultValue: "May love, laughter, and beautiful memories always brighten your journey together",
        position: { x: 300, y: 540 },
        fontSize: 16,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "day",
        type: "text",
        label: "Day",
        placeholder: "WEDNESDAY",
        defaultValue: "WEDNESDAY",
        position: { x: 300, y: 610 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "month",
        type: "text",
        label: "Month",
        placeholder: "FEBRUARY",
        defaultValue: "FEBRUARY",
        position: { x: 210, y: 650 },
        fontSize: 18,
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
        placeholder: "AT 10:00 PM",
        defaultValue: "AT 10:00 PM",
        position: { x: 390, y: 650 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#2d2d2d",
        align: "center",
      },
      {
        id: "year",
        type: "text",
        label: "Year",
        placeholder: "2025",
        defaultValue: "2025",
        position: { x: 300, y: 690 },
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
          {/* Couple names */}
          <div className="text-center mt-[280px]">
            <p className="text-[56px] font-serif italic leading-tight" style={{ color: "#2d2d2d" }}>
              {data["bride-name"] || "Morgan"}
            </p>
            <p className="text-5xl font-serif font-bold mt-1" style={{ color: "#000000" }}>
              {data["and"] || "&"}
            </p>
            <p className="text-[56px] font-serif italic mt-1" style={{ color: "#2d2d2d" }}>
              {data["groom-name"] || "Lerna"}
            </p>
          </div>

          {/* Message */}
          <div className="text-center mt-10 px-16">
            <p className="text-base font-serif leading-relaxed" style={{ color: "#2d2d2d" }}>
              {data["message"] || "May love, laughter, and beautiful memories always brighten your journey together"}
            </p>
          </div>

          {/* Day */}
          <div className="text-center mt-8">
            <p className="text-lg font-serif tracking-widest" style={{ color: "#2d2d2d" }}>
              {data["day"] || "WEDNESDAY"}
            </p>
          </div>

          {/* Date grid */}
          <div className="flex items-center justify-center gap-0 mt-2">
            <div className="px-6 py-2 text-center" style={{ borderRight: "2px dashed #2d2d2d" }}>
              <p className="text-lg font-serif tracking-wider" style={{ color: "#2d2d2d" }}>
                {data["month"] || "FEBRUARY"}
              </p>
            </div>
            <div className="px-6 py-2 text-center" style={{ borderRight: "2px dashed #2d2d2d" }}>
              <p className="text-[52px] font-serif font-bold leading-none" style={{ color: "#2d2d2d" }}>
                {data["date"] || "05"}
              </p>
            </div>
            <div className="px-6 py-2 text-center">
              <p className="text-lg font-serif tracking-wider" style={{ color: "#2d2d2d" }}>
                {data["time"] || "AT 10:00 PM"}
              </p>
            </div>
          </div>

          {/* Year */}
          <div className="text-center mt-0">
            <p className="text-lg font-serif" style={{ color: "#2d2d2d" }}>
              {data["year"] || "2025"}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-6">
            <p className="text-lg font-serif" style={{ color: "#2d2d2d" }}>
              {data["venue"] || "123 Anywhere st., Any City"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hindu-traditional",
    name: "Hindu Traditional",
    isPremium: true,
    thumbnail: "/images/premium7.jpg",
    backgroundImage: "/images/premium7-for-real-use.png",
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
        id: "married-to",
        type: "text",
        label: "Is Getting Married To",
        placeholder: "is getting married to",
        defaultValue: "is getting married to",
        position: { x: 300, y: 470 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#c4a024",
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
        id: "additional-info",
        type: "text",
        label: "Additional Info",
        placeholder: "Step-free area",
        defaultValue: "Step-free area",
        position: { x: 300, y: 755 },
        fontSize: 18,
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
          <div className="text-center mt-[235px] px-12">
            <p className="text-base font-serif leading-relaxed" style={{ color: "#8b1538" }}>
              {data["invitation-text"] ||
                "With joyous hearts, Kapoor Family and Tandon Family request your gracious presence and blessings as"}
            </p>
          </div>

          {/* Bride name */}
          <div className="text-center mt-6">
            <p className="text-[68px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["bride-name"] || "Gajara"}
            </p>
          </div>

          {/* Is getting married to */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[2px]" style={{ background: "#c4a024" }}></div>
            <p className="text-lg font-serif italic" style={{ color: "#c4a024" }}>
              {data["married-to"] || "is getting married to"}
            </p>
            <div className="w-16 h-[2px]" style={{ background: "#c4a024" }}></div>
          </div>

          {/* Groom name */}
          <div className="text-center mt-6">
            <p className="text-[68px] font-serif font-bold leading-none" style={{ color: "#a91c3f" }}>
              {data["groom-name"] || "Posha"}
            </p>
          </div>

          {/* Date */}
          <div className="text-center mt-10">
            <p className="text-[22px] font-serif tracking-wide" style={{ color: "#8b1538" }}>
              {data["date"] || "MARCH 15TH, 2030"}
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

          {/* Additional info */}
          <div className="text-center mt-3">
            <p className="text-lg font-serif italic" style={{ color: "#8b1538" }}>
              {data["additional-info"] || "Step-free area"}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sangeet-celebration",
    name: "Sangeet Celebration",
    isPremium: true,
    thumbnail: "/images/premium8.jpg",
    backgroundImage: "/images/premium8-for-real-use.png",
    category: "Hindu",
    fields: [
      {
        id: "invitation-text",
        type: "text",
        label: "Invitation Text",
        placeholder: "You are cordially invited to the",
        defaultValue: "You are cordially invited to the",
        position: { x: 300, y: 290 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
      {
        id: "ceremony-type",
        type: "text",
        label: "Ceremony Type",
        placeholder: "SANGEET CEREMONY OF",
        defaultValue: "SANGEET CEREMONY OF",
        position: { x: 300, y: 360 },
        fontSize: 32,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
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
        id: "and-symbol",
        type: "text",
        label: "And Symbol",
        placeholder: "&",
        defaultValue: "&",
        position: { x: 300, y: 560 },
        fontSize: 48,
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
      },
      {
        id: "dress-code",
        type: "text",
        label: "Dress Code",
        placeholder: "Attire: Indo-western",
        defaultValue: "Attire: Indo-western",
        position: { x: 300, y: 920 },
        fontSize: 18,
        fontFamily: "serif",
        color: "#b83b4e",
        align: "center",
      },
    ],
    renderTemplate: (data) => (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src="/images/premium8-for-real-use.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center px-12">
          {/* Invitation text */}
          <div className="text-center mt-[245px]">
            <p className="text-lg font-serif" style={{ color: "#b83b4e" }}>
              {data["invitation-text"] || "You are cordially invited to the"}
            </p>
          </div>

          {/* Ceremony type */}
          <div className="text-center mt-4">
            <p className="text-[32px] font-serif font-bold tracking-wide leading-tight" style={{ color: "#b83b4e" }}>
              {data["ceremony-type"] || "SANGEET CEREMONY OF"}
            </p>
          </div>

          {/* Gold star divider */}
          <div className="mt-4 text-4xl" style={{ color: "#f4a261" }}>
            ✦
          </div>

          {/* Bride name */}
          <div className="text-center mt-4">
            <p className="text-[52px] font-serif font-bold leading-none" style={{ color: "#b83b4e" }}>
              {data["bride-name"] || "Gajara Chopra"}
            </p>
          </div>

          {/* And symbol with dividers */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-20 h-[2px]" style={{ background: "#b83b4e" }}></div>
            <p className="text-5xl font-serif" style={{ color: "#b83b4e" }}>
              {data["and-symbol"] || "&"}
            </p>
            <div className="w-20 h-[2px]" style={{ background: "#b83b4e" }}></div>
          </div>

          {/* Groom name */}
          <div className="text-center mt-4">
            <p className="text-[52px] font-serif font-bold leading-none" style={{ color: "#b83b4e" }}>
              {data["groom-name"] || "Saphal Mittal"}
            </p>
          </div>

          {/* Date */}
          <div className="text-center mt-8">
            <p className="text-[28px] font-serif font-bold tracking-wide" style={{ color: "#b83b4e" }}>
              {data["date"] || "APRIL 21ST 2030"}
            </p>
          </div>

          {/* Time */}
          <div className="text-center mt-3">
            <p className="text-xl font-serif" style={{ color: "#b83b4e" }}>
              {data["time"] || "Five o'clock in the evening"}
            </p>
          </div>

          {/* Venue */}
          <div className="text-center mt-2">
            <p className="text-xl font-serif" style={{ color: "#b83b4e" }}>
              {data["venue"] || "Chopra Residence"}
            </p>
          </div>

          {/* Dress code */}
          <div className="text-center mt-4">
            <p className="text-lg font-serif italic" style={{ color: "#b83b4e" }}>
              {data["dress-code"] || "Attire: Indo-western"}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  //
]

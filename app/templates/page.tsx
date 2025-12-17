"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles, Star, Check } from "lucide-react"
import { templates } from "@/components/wedding-templates"
import { Button } from "@/components/ui/button"

type Category = "All" | "Hindu" | "Muslim" | "Christian"

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  const categories: Category[] = ["All", "Hindu", "Muslim", "Christian"]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white">
        <div className="absolute inset-0 bg-[url('/elegant-floral-pattern.png')] opacity-10" />

        <div className="container relative mx-auto px-4 py-16 sm:py-24">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-amber-100 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-amber-200" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-amber-200">
                Choose Your Perfect Design
              </span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Wedding Card Templates
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-amber-100 sm:text-xl">
              Explore our beautiful collection of wedding invitation templates. From traditional Hindu ceremonies to
              elegant Christian weddings and timeless Muslim celebrations - find the perfect design for your special
              day.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Star className="h-5 w-5 text-amber-300" />
                <span className="text-sm font-medium">Premium Designs</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Check className="h-5 w-5 text-amber-300" />
                <span className="text-sm font-medium">Easy Customization</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-amber-300" />
                <span className="text-sm font-medium">Instant Download</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#fffbeb"
            />
          </svg>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex gap-2 rounded-full bg-white p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-800 to-amber-700 text-white shadow-md"
                    : "text-amber-900 hover:bg-amber-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTemplates.map((template) => (
            <Link
              key={template.id}
              href={`/editor?template=${template.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={template.thumbnail || "/placeholder.svg"}
                  alt={template.name}
                  width={400}
                  height={533}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {template.isPremium && (
                <div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  <Star className="mr-1 inline h-3 w-3" />
                  Premium
                </div>
              )}

              <div className="p-4">
                <h3 className="mb-1 font-serif text-lg font-semibold text-amber-900">{template.name}</h3>
                <p className="text-sm text-amber-700">{template.description}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-amber-900/95 to-transparent p-6 pt-12 transition-transform duration-300 group-hover:translate-y-0">
                <Button className="w-full bg-white text-amber-900 hover:bg-amber-50">Customize This Template</Button>
              </div>
            </Link>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
              <Sparkles className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-semibold text-amber-900">No Templates Found</h3>
            <p className="text-amber-700">We're working on adding more templates in this category. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-amber-900">Wedify</h3>
              <p className="text-sm leading-relaxed text-amber-700">
                Create beautiful, personalized wedding invitations with our easy-to-use online editor.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-amber-900">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-amber-700 transition-colors hover:text-amber-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-amber-700 transition-colors hover:text-amber-900">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-amber-700 transition-colors hover:text-amber-900">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-amber-700 transition-colors hover:text-amber-900">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-amber-900">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-amber-700 transition-colors hover:text-amber-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-amber-700 transition-colors hover:text-amber-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-amber-700 transition-colors hover:text-amber-900">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-amber-900">Stay Connected</h4>
              <p className="mb-4 text-sm text-amber-700">Get updates on new templates and features.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-amber-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none"
                />
                <Button className="bg-amber-800 hover:bg-amber-900">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-amber-200 pt-8 text-center text-sm text-amber-600">
            <p>© 2025 Wedify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Moon, Church } from "lucide-react"
import Image from "next/image"

export default function CategoriesPage() {
  const categories = [
    {
      id: "hindu",
      name: "Hindu Wedding",
      description: "Traditional Hindu wedding invitations with vibrant colors, mandalas, and sacred symbols",
      icon: Heart,
      count: "60+ templates",
      color: "from-orange-500 via-red-500 to-pink-500",
      features: ["Mandala Designs", "Om & Ganesha Symbols", "Traditional Patterns", "Vibrant Colors"],
      image: "/images/premium4.jpg",
    },
    {
      id: "muslim",
      name: "Muslim Wedding",
      description: "Elegant Islamic wedding invitations with beautiful calligraphy and geometric patterns",
      icon: Moon,
      count: "40+ templates",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["Arabic Calligraphy", "Geometric Patterns", "Mosque Silhouettes", "Elegant Typography"],
      image: "/images/premium7.jpg",
    },
    {
      id: "christian",
      name: "Christian Wedding",
      description: "Classic Christian wedding invitations with crosses, florals, and timeless elegance",
      icon: Church,
      count: "45+ templates",
      color: "from-blue-500 via-indigo-500 to-purple-500",
      features: ["Cross Designs", "Floral Elements", "Classic Elegance", "Romantic Themes"],
      image: "/images/premium5.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D4A574]">
      {/* Navigation Bar */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="relative py-24 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm tracking-wide">
              EXPLORE BY RELIGION
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Wedding Invitation
            <br />
            <span className="text-yellow-300">Categories</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Choose from our collection of beautifully crafted templates designed specifically for your religious and
            cultural traditions
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link key={category.id} href={`/templates?category=${category.id}`} className="group">
                  <div
                    className="bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Category Image Preview */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-white/90" strokeWidth={1.5} />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                          {category.count}
                        </span>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#8B4513] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-[#8B4513] font-semibold group-hover:text-[#A0522D] transition-colors">
                          Browse Templates
                        </span>
                        <span
                          className={`text-2xl group-hover:translate-x-2 transition-transform bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#654321] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/wedify-removebg-preview.png"
                  alt="Wedify Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Create stunning wedding invitations with our beautiful templates and easy-to-use editor.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-white/70 hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-white/70 hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-white/70 text-sm mb-4">Subscribe to get special offers and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-brown-900 font-semibold">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Wedify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

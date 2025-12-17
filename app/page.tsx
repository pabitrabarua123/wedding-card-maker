"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import {
  Sparkles,
  Palette,
  Download,
  Share2,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  Heart,
  MousePointerClick,
  Wand2,
  Send,
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFAF5] to-[#FFF5F0]">
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsMenuOpen(true)}
          size="lg"
          className="bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#8B4513] to-[#D4AF37] flex items-center justify-center animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute top-6 left-6">
            <img
              src="/images/wedify-removebg-preview.png"
              alt="Wedify"
              className="w-24 h-24 object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Menu Items */}
          <nav className="text-center space-y-6">
            <Link
              href="/templates"
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl md:text-6xl font-serif font-bold text-white hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Templates
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl md:text-6xl font-serif font-bold text-white hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Categories
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl md:text-6xl font-serif font-bold text-white hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl md:text-6xl font-serif font-bold text-white hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              onClick={() => setIsMenuOpen(false)}
              className="block text-4xl md:text-5xl font-serif font-bold text-white/80 hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsMenuOpen(false)}
              className="block text-4xl md:text-5xl font-serif font-bold text-white/80 hover:text-[#FFB6C1] transition-colors duration-300 hover:scale-105 transform"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFB6C1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FFB6C1]/20 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#8B4513]">Wedding Invitation Designer</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#8B4513] mb-6 leading-tight">
                Your Love Story,
                <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] to-[#FFB6C1] bg-clip-text text-transparent">
                  Beautifully Designed 1
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#8B4513]/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Create stunning, personalized wedding invitations in minutes. Choose from exquisite templates, customize
                every detail, and share your special moment with the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Link href="/templates">
                  <Button
                    size="lg"
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Start Designing Free
                  </Button>
                </Link>
                <Link href="/templates">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-10 py-6 text-lg rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Browse Templates
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center text-sm text-[#8B4513]/60">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="font-medium">5.0 rating</span>
                </div>
                <div className="h-4 w-px bg-[#8B4513]/20"></div>
                <span className="font-medium">10,000+ couples</span>
                <div className="h-4 w-px bg-[#8B4513]/20"></div>
                <span className="font-medium">No credit card required</span>
              </div>
            </div>

            {/* Right side - Logo & Visual */}
            <div className="relative">
              {/* Main logo */}
              <div className="relative z-10 mx-auto max-w-md lg:max-w-lg">
                <img
                  src="/images/wedify-removebg-preview.png"
                  alt="Wedify - Wedding Organizer"
                  className="w-full h-auto drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]"
                />
              </div>

              {/* Floating decoration cards */}
              <div className="absolute top-10 -left-10 lg:left-0 z-0 opacity-80 animate-[float_4s_ease-in-out_infinite]">
                <Card className="p-4 bg-white shadow-xl border-0 rotate-[-8deg] w-32 h-40">
                  <div className="w-full h-full bg-gradient-to-br from-[#FFB6C1]/30 to-[#D4AF37]/30 rounded flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </Card>
              </div>

              <div className="absolute bottom-10 -right-10 lg:right-0 z-0 opacity-80 animate-[float_5s_ease-in-out_infinite]">
                <Card className="p-4 bg-white shadow-xl border-0 rotate-[12deg] w-32 h-40">
                  <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/30 to-[#FFB6C1]/30 rounded flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#FFB6C1] fill-[#FFB6C1]" />
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mt-20 opacity-30">
            <svg width="100%" height="60" viewBox="0 0 800 60" className="mx-auto">
              <path d="M0 30 Q 200 10, 400 30 T 800 30" stroke="#D4AF37" fill="none" strokeWidth="2" />
              <circle cx="400" cy="30" r="6" fill="#D4AF37" />
              <circle cx="200" cy="20" r="4" fill="#FFB6C1" />
              <circle cx="600" cy="20" r="4" fill="#FFB6C1" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFB6C1]/20 text-[#D4AF37]">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#8B4513]">Drag & Drop Editor</h3>
              <p className="text-[#8B4513]/70 text-sm leading-relaxed">
                Easily customize text and layout with our intuitive editor
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFB6C1]/20 text-[#D4AF37]">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#8B4513]">Indian & Modern Templates</h3>
              <p className="text-[#8B4513]/70 text-sm leading-relaxed">
                Traditional and contemporary designs for every style
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFB6C1]/20 text-[#D4AF37]">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#8B4513]">Download PDF / Image</h3>
              <p className="text-[#8B4513]/70 text-sm leading-relaxed">
                High-quality print-ready formats for your invitations
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFB6C1]/20 text-[#D4AF37]">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#8B4513]">Share on WhatsApp</h3>
              <p className="text-[#8B4513]/70 text-sm leading-relaxed">Instant sharing with family & friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#8B4513] mb-4">
              Beautiful Wedding Invitation Templates
            </h2>
            <p className="text-[#8B4513]/70 text-lg">Choose from our curated collection of elegant designs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Indian Floral Premium",
                category: "Hindu",
                image: "/images/premium1.jpg",
                id: "indian-floral-premium",
              },
              {
                name: "Rose Garden Wreath",
                category: "Christian",
                image: "/images/premium2.jpg",
                id: "rose-garden-wreath-premium",
              },
              {
                name: "Indian Celebration",
                category: "Hindu",
                image: "/images/premium3.jpg",
                id: "indian-celebration-premium",
              },
              {
                name: "Mehndi Celebration",
                category: "Hindu",
                image: "/images/premium4.jpg",
                id: "mehndi-celebration-premium",
              },
              {
                name: "Garden Romance",
                category: "Christian",
                image: "/images/premium5.jpg",
                id: "garden-romance-premium",
              },
              { name: "Elegant Couple", category: "Muslim", image: "/images/premium6.jpg", id: "elegant-couple" },
            ].map((template, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <Link href={`/editor?template=${template.id}`}>
                      <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full">Edit Template</Button>
                    </Link>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#8B4513]">
                      {template.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-semibold text-lg text-[#8B4513]">{template.name}</h4>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/templates">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-10 py-6 text-lg rounded-full shadow-lg"
              >
                View All Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FFB6C1]/10 to-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#8B4513] mb-4">How It Works</h2>
            <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
              Create your perfect wedding invitation in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30"></div>

            {/* Step 1 */}
            <div className="relative">
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#D4AF37] flex items-center justify-center shadow-lg">
                    <MousePointerClick className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white font-bold text-xl flex items-center justify-center shadow-md">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#8B4513] mb-4">Choose Template</h3>
                <p className="text-[#8B4513]/70 leading-relaxed">
                  Browse through our beautiful collection of wedding invitation templates and select your favorite
                  design
                </p>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFB6C1] flex items-center justify-center shadow-lg">
                    <Wand2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white font-bold text-xl flex items-center justify-center shadow-md">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#8B4513] mb-4">Customize Details</h3>
                <p className="text-[#8B4513]/70 leading-relaxed">
                  Personalize your invitation with names, dates, venue details, and custom messages using our easy
                  editor
                </p>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#D4AF37] flex items-center justify-center shadow-lg">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white font-bold text-xl flex items-center justify-center shadow-md">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#8B4513] mb-4">Download & Share</h3>
                <p className="text-[#8B4513]/70 leading-relaxed">
                  Download your invitation as PDF or image, and share it instantly on WhatsApp, email, or social media
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/templates">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#FFFAF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#8B4513] mb-4">Loved by Couples</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Rahul",
                quote:
                  "The templates are absolutely stunning! We created our dream wedding invitation in just 10 minutes.",
                avatar: "P",
              },
              {
                name: "Sarah & Michael",
                quote: "So easy to use and customize. Our guests loved the personalized touch on our invitations.",
                avatar: "S",
              },
              {
                name: "Anjali & Arjun",
                quote: "Perfect blend of traditional and modern designs. Highly recommend for Indian weddings!",
                avatar: "A",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#D4AF37] flex items-center justify-center text-white font-semibold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B4513]">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#8B4513]/70 leading-relaxed italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#8B4513] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8B4513]/70 text-lg">
              Everything you need to know about creating your wedding invitation
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is Wedify completely free to use?",
                answer:
                  "Yes! You can create, customize, and download your wedding invitations completely free. No hidden charges or credit card required.",
              },
              {
                question: "Can I customize the templates?",
                answer:
                  "All our templates are fully customizable. You can edit text, change colors, adjust fonts, and personalize every detail to match your wedding theme.",
              },
              {
                question: "What formats can I download my invitation in?",
                answer:
                  "You can download your wedding invitation as a high-quality PDF for printing or as an image (PNG/JPG) for digital sharing on WhatsApp, email, and social media.",
              },
              {
                question: "Do you have templates for Indian weddings?",
                answer:
                  "Yes! We offer a beautiful collection of traditional Indian wedding templates including Mehndi, Sangeet, and Hindu ceremony designs with cultural motifs and colors.",
              },
              {
                question: "Can I save my work and edit it later?",
                answer:
                  "Yes, your designs are automatically saved in your browser. You can return anytime to continue editing your invitation from where you left off.",
              },
              {
                question: "Is there a limit to how many invitations I can create?",
                answer:
                  "No limits! Create as many different wedding invitations as you want. Perfect if you need separate cards for different ceremonies or events.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:border-l-4 hover:border-l-[#D4AF37]"
              >
                <h3 className="text-xl font-semibold text-[#8B4513] mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB6C1]/20 text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-[#8B4513]/70 leading-relaxed pl-11">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-[#FFB6C1]/20 to-[#D4AF37]/20 border-0 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-[#8B4513] mb-3">Still have questions?</h3>
              <p className="text-[#8B4513]/70 mb-6">We're here to help! Reach out to our support team anytime.</p>
              <Link href="/contact">
                <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all">
                  Contact Support
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Wedify</h3>
              <p className="text-white/70 text-sm leading-relaxed">Create beautiful wedding invitations with ease</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/templates" className="text-white/70 hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2025 Wedify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

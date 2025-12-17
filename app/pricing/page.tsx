import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles, Crown, Zap } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out our service",
      icon: Zap,
      features: [
        "Access to 6 free templates",
        "Basic customization",
        "Standard quality download",
        "Watermark on downloads",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$19",
      period: "one-time",
      description: "Best value for your special day",
      icon: Crown,
      features: [
        "Access to all premium templates",
        "Advanced customization options",
        "High-resolution downloads",
        "No watermarks",
        "Priority email support",
        "Unlimited downloads for 30 days",
        "Save your designs",
      ],
      cta: "Get Premium",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For event planners & businesses",
      icon: Sparkles,
      features: [
        "Everything in Premium",
        "Custom template design",
        "Bulk invitation creation",
        "White-label option",
        "Dedicated account manager",
        "API access",
        "Lifetime access",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D4A574]">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ${
                    plan.popular ? "ring-4 ring-[#FFB6C1] scale-105" : "hover:-translate-y-2"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] text-white text-center py-2 text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B4513] to-[#D4A574] rounded-full mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-center mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                    <div className="text-center mb-6">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-2">/ {plan.period}</span>}
                    </div>
                    <Button
                      className={`w-full mb-8 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#8B4513] to-[#D4A574] hover:from-[#7A3A0F] hover:to-[#C4956A]"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee if you're not satisfied with your purchase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you offer discounts for bulk orders?</h3>
              <p className="text-gray-600">Yes! Contact us for custom pricing on Enterprise plans for bulk orders.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

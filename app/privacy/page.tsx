import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 16, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Name and email address when you create an account</li>
              <li>Payment information when you make a purchase</li>
              <li>Design preferences and template customizations</li>
              <li>Communications you send to us</li>
              <li>Usage data and analytics information</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Provide personalized content and recommendations</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraud and abuse</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information in the
              following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>With service providers who help us operate our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction. However, no Internet or email transmission
              is ever fully secure or error-free.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities.
              You can control cookies through your browser settings and other tools. However, if you block certain
              cookies, you may not be able to access all features of our service.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Access and update your account information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have data protection laws that are different from the laws of your country.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700">
              Email: privacy@wedify.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: San Francisco, CA
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

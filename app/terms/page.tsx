import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 16, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Wedify, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Wedify's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
              a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on Wedify's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">3. Premium Templates</h2>
            <p className="text-gray-700 mb-4">
              Premium templates are available for purchase. Once purchased, you may use these templates for personal
              use. Commercial use requires an Enterprise license. All downloads are final and non-refundable after 7
              days from purchase date.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">4. User Account</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept
              responsibility for any and all activities or actions that occur under your account.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All templates, designs, graphics, and content available on Wedify are the property of Wedify or its
              content suppliers and are protected by intellectual property laws. Unauthorized use or distribution is
              prohibited.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">6. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on Wedify's website are provided on an 'as is' basis. Wedify makes no warranties, expressed
              or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">7. Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Wedify or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Wedify's website.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">8. Modifications</h2>
            <p className="text-gray-700 mb-4">
              Wedify may revise these terms of service for its website at any time without notice. By using this website
              you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: support@wedify.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

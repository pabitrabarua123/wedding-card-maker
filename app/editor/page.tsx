"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { TemplateEditor } from "@/components/template-editor"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

function EditorContent() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")

  if (!templateId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif font-semibold text-gray-800">No Template Selected</h1>
          <p className="text-gray-600">Please select a template to edit.</p>
          <Link href="/templates">
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Templates
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <TemplateEditor templateId={templateId} onBack={() => window.history.back()} />
    </div>
  )
}

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading editor...</p>
          </div>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  )
}

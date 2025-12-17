"use client"

import { useState } from "react"
import { templates } from "./wedding-templates"
import { TemplateSelector } from "./template-selector"
import { TemplateEditor } from "./template-editor"

export function CardEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)
    setIsEditing(true)
  }

  const handleBack = () => {
    setIsEditing(false)
    setSelectedTemplate(null)
  }

  if (isEditing && selectedTemplate) {
    return <TemplateEditor templateId={selectedTemplate} onBack={handleBack} />
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-semibold text-foreground mb-4">Wedding Invitation Maker</h1>
          <p className="text-lg text-muted-foreground">
            Choose a beautiful template and customize it with your details
          </p>
        </div>

        <TemplateSelector
          templates={templates}
          selectedTemplate={selectedTemplate}
          onSelectTemplate={handleSelectTemplate}
        />
      </div>
    </div>
  )
}

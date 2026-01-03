"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, Share2 } from "lucide-react"
import { ArrowLeft } from 'lucide-react';
import { templates } from "./wedding-templates"
import { PublishDialog } from "./publish-dialog"
import domtoimage from "dom-to-image"

type TemplateEditorProps = {
  templateId: string
  onBack: () => void
}

export function TemplateEditor({ templateId, onBack }: TemplateEditorProps) {
  const template = templates.find((t) => t.id === templateId)
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {}
    template?.fields.forEach((field) => {
      initialData[field.id] = field.defaultValue || ""
    })
    return initialData
  })
  const [showPublishDialog, setShowPublishDialog] = useState(false)
  const [exportedImage, setExportedImage] = useState<string | null>(null)
  const [isExporting, setIsExporting] = useState(false)

  if (!template) {
    return <div>Template not found</div>
  }

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
  }

  const waitForImagesToLoad = (element: HTMLElement): Promise<void> => {
    const images = element.querySelectorAll("img")
    const imagePromises = Array.from(images).map((img) => {
      if (img.complete) {
        return Promise.resolve()
      }
      return new Promise<void>((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = () => resolve() // Resolve anyway to prevent hanging
        // Set a timeout in case image never loads
        setTimeout(() => resolve(), 5000)
      })
    })
    return Promise.all(imagePromises).then(() => undefined)
  }

  const handleExport = async () => {
    const element = document.getElementById("template-canvas")
    if (!element) return

    setIsExporting(true)
    try {
      await waitForImagesToLoad(element)
      await new Promise((resolve) => setTimeout(resolve, 200))

      // Get the exact dimensions of the card
      const rect = element.getBoundingClientRect()

      const dataUrl = await domtoimage.toPng(element, {
        quality: 1,
        width: rect.width * 2, // 2x for high quality
        height: rect.height * 2,
        style: {
          transform: "scale(2)", // Scale up for higher resolution
          transformOrigin: "top left",
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        },
      })

      const link = document.createElement("a")
      link.download = `wedding-invitation-${template.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Export failed:", error)
      alert("Failed to export image. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  const handlePublish = async () => {
    const element = document.getElementById("template-canvas")
    if (!element) return

    setIsExporting(true)
    try {
      await waitForImagesToLoad(element)
      await new Promise((resolve) => setTimeout(resolve, 200))

      const rect = element.getBoundingClientRect()

      const dataUrl = await domtoimage.toPng(element, {
        quality: 1,
        width: rect.width * 2,
        height: rect.height * 2,
        style: {
          transform: "scale(2)",
          transformOrigin: "top left",
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        },
      })

      setExportedImage(dataUrl)
      setShowPublishDialog(true)
    } catch (error) {
      console.error("Publish failed:", error)
      alert("Failed to prepare image for publishing. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar with form fields */}
      <div className="w-96 border-r border-border bg-card overflow-y-auto">
        <div className="p-6 border-b border-border">
          <Button size="sm" variant="outline" onClick={onBack} className="mb-4">
            {/* ArrowLeft icon removed as per updates */}
             <ArrowLeft/> Change Template
          </Button>
          <h2 className="text-2xl font-semibold text-foreground">{template.name}</h2>
          <p className={`text-sm text-muted-foreground mt-1`}>{template.description}Pabitra</p>
        </div>

        <div className="p-6 space-y-6">
          {template.fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input
                id={field.id}
                value={formData[field.id] || ""}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main canvas area */}
      <div className="flex-1 flex flex-col">
        <div className="h-16 py-4 border-b border-border bg-card flex items-center justify-end px-6 gap-2">
          <Button variant="outline" size="sm" onClick={handleExport} disabled={isExporting}>
            <Download className="w-4 h-4 mr-2" />
            {isExporting ? "Exporting..." : "Download"}
          </Button>
          <Button size="sm" onClick={handlePublish} disabled={isExporting}>
            <Share2 className="w-4 h-4 mr-2" />
            {isExporting ? "Preparing..." : "Publish"}
          </Button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 bg-muted/30 overflow-y-scroll mt-0 pt-[227px]">
          <Card
            id="template-canvas"
            className="shadow-2xl"
            style={{
              width: "600px",
              height: "800px",
              overflow: "visible",
            }}
          >
            {template.renderTemplate(formData)}
          </Card>
        </div>
      </div>

      <PublishDialog
        open={showPublishDialog}
        onOpenChange={setShowPublishDialog}
        imageUrl={exportedImage}
        invitationData={formData}
      />
    </div>
  )
}

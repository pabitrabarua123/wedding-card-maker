"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown } from "lucide-react"
import type { Template } from "./wedding-templates"

type TemplateSelectorProps = {
  templates: Template[]
  selectedTemplate: string | null
  onSelectTemplate: (templateId: string) => void
}

export function TemplateSelector({ templates, selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  const freeTemplates = templates.filter((t) => !t.isPremium)
  const premiumTemplates = templates.filter((t) => t.isPremium)

  return (
    <div className="space-y-8">
      {/* Free Templates Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">Free Templates</h3>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Free
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {freeTemplates.map((template) => (
            <Card
              key={template.id}
              className={`relative cursor-pointer transition-all hover:shadow-lg ${
                selectedTemplate === template.id ? "ring-2 ring-ring" : ""
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                <img
                  src={template.thumbnail || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-ring/20 flex items-center justify-center">
                    <div className="bg-ring text-primary-foreground rounded-full p-2">
                      <Check className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">{template.name}</h3>
                <p className="text-xs text-muted-foreground">{template.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">Premium Templates</h3>
          <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-0">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {premiumTemplates.map((template) => (
            <Card
              key={template.id}
              className={`relative cursor-pointer transition-all hover:shadow-lg border-2 ${
                selectedTemplate === template.id ? "ring-2 ring-amber-500 border-amber-400" : "border-amber-200"
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                <img
                  src={template.thumbnail || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-0">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                    <div className="bg-amber-500 text-white rounded-full p-2">
                      <Check className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">{template.name}</h3>
                <p className="text-xs text-muted-foreground">{template.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

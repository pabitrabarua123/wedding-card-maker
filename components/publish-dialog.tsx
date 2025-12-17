"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check, Mail, MessageSquare } from "lucide-react"

type PublishDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  imageUrl: string | null
  invitationData: Record<string, string>
}

export function PublishDialog({ open, onOpenChange, imageUrl }: PublishDialogProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl] = useState(`https://wedding-invitation.example.com/${Math.random().toString(36).substr(2, 9)}`)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareEmail = () => {
    const subject = encodeURIComponent("You're Invited to Our Wedding!")
    const body = encodeURIComponent(`View our wedding invitation: ${shareUrl}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`You're invited! View our wedding invitation: ${shareUrl}`)
    window.open(`https://wa.me/?text=${text}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">Publish Your Invitation</DialogTitle>
          <DialogDescription>Share your beautiful wedding invitation with your guests</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {imageUrl && (
            <div className="border border-border rounded-lg overflow-hidden">
              <img src={imageUrl || "/placeholder.svg"} alt="Invitation preview" className="w-full" />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="share-link" className="text-sm font-medium">
              Share Link
            </Label>
            <div className="flex gap-2">
              <Input id="share-link" value={shareUrl} readOnly className="font-mono text-sm" />
              <Button variant="outline" size="icon" onClick={handleCopyLink}>
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Share Via</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={handleShareEmail}>
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" onClick={handleShareWhatsApp}>
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Your invitation has been saved. Share the link with your guests to view the beautiful invitation you
              created!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

import { ExternalLink, Instagram } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export const InstagramFeeds = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground mb-6">Ikuti perkembangan project terbaru kami di Instagram</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Instagram className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium text-secondary">@digitalcraft.agency</span>
          </div>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-background rounded-lg p-8 text-center border border-border">
            <Instagram className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="font-space-grotesk text-2xl font-bold text-secondary mb-4">Instagram Feed Integration</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Fitur ini akan menampilkan feed Instagram terbaru dari @digitalcraft.agency secara real-time.
              Integration akan ditambahkan menggunakan Instagram Basic Display API.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-muted-foreground" />
                </div>
              ))}
            </div>
            <Button variant="outline" className="bg-transparent">
              <Instagram className="mr-2 h-4 w-4" />
              Follow @digitalcraft.agency
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

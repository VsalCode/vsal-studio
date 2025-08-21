import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'

interface HeaderSectionProps {
  chip: string
  title1: string
  title2: string
  desc: string
  showBackButton?: boolean
  backHref?: string
  backText?: string
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ 
  chip, 
  title1, 
  title2, 
  desc,
  showBackButton = true,
  backHref = "/",
  backText = "Back to Home"
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <>
              <Link
                href={backHref}
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backText}
              </Link>
              <br />
            </>
          )}
          
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            {chip}
          </Badge>
          
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-secondary mb-6">
            {title1}
            <span className="text-primary block">{title2}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  )
}
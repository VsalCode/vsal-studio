import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { Badge } from "./ui/badge"

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
  backText = "Back to Home",
}) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary via-accent to-secondary overflow-hidden text-center">
      {/* Background patterns */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(23,204,161,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,204,161,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-secondary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {showBackButton && (
            <>
              <Link
                href={backHref}
                className="inline-flex items-center text-white/70 hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backText}
              </Link>
              <br />
            </>
          )}

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">{chip}</Badge>

          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-white mb-6">
            {title1}
            <span className="text-primary block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {title2}
            </span>
          </h1>

          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">{desc}</p>
        </div>
      </div>
    </section>
  )
}

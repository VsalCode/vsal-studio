"use client"
import React from "react"
import {
  Award,
  Globe,
  Users,
  Shield,
  Zap,
  Briefcase,
  Clock,
  DollarSign,
  Palette,
  Brush,
  Layers,
  Eye,
  LucideIcon,
} from "lucide-react"

const iconsMap: Record<string, LucideIcon> = {
  award: Award,
  globe: Globe,
  users: Users,
  shield: Shield,
  zap: Zap,
  briefcase: Briefcase,
  clock: Clock,
  dollarSign: DollarSign,
  palette: Palette,
  brush: Brush,
  layers: Layers,
  eye: Eye,
}

interface WhyUsItem {
  icon: string | LucideIcon
  title: string
  description: string
  color?: string
  bgColor?: string
}

interface WhyUsProps {
  title: string
  subtitle: string
  items: WhyUsItem[]
  columns?: number
  className?: string
  itemClassName?: string
  centerText?: boolean
  showConnectors?: boolean
  variant?: 'default' | 'minimal' | 'card'
}

export const WhyUs: React.FC<WhyUsProps> = ({
  title,
  subtitle,
  items,
  columns = 4,
  className = "",
  itemClassName = "",
  centerText = true,
  showConnectors = false,
  variant = 'default'
}) => {
  const gridClass = `grid grid-cols-1 ${columns >= 2 ? 'sm:grid-cols-2' : ''} ${columns >= 3 ? 'md:grid-cols-3' : ''} ${columns >= 4 ? 'lg:grid-cols-4' : ''} gap-6`
  
  const textAlignment = centerText ? "text-center" : "text-left"
  
  const variantStyles = {
    default: "bg-gray-dark p-6 rounded-2xl shadow-lg hover:shadow-xl border border-white/10 transition-all duration-300 hover:scale-105",
    minimal: "p-6 border-l-4 border-primary transition-all duration-300 hover:bg-white/5",
    card: "bg-gradient-to-br from-gray-dark to-black p-6 rounded-xl shadow-lg border border-white/5 transition-all duration-300 hover:border-primary/30"
  }

  return (
    <section className={`py-20 bg-black ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className={`${textAlignment} font-space-grotesk text-4xl font-bold text-primary mb-4`}>
          {title}
        </h2>
        <p className={`${textAlignment} text-white/70 mb-12 max-w-2xl mx-auto`}>
          {subtitle}
        </p>

        <div className={`${gridClass} relative`}>
          {showConnectors && (
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
              <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>
          )}
          
          {items.map((item, i) => {
            const IconComponent = typeof item.icon === 'string' 
              ? iconsMap[item.icon] 
              : item.icon;
              
            return (
              <div
                key={i}
                className={`${variantStyles[variant]} ${itemClassName} ${textAlignment} flex flex-col h-full`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-primary mx-auto mb-6 ${
                    item.bgColor || "bg-secondary"
                  }`}
                  style={item.color ? { backgroundColor: item.color } : undefined}
                >
                  {IconComponent ? (
                    <IconComponent className="w-7 h-7" />
                  ) : (
                    <div className="w-7 h-7 bg-white/30 rounded" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm flex-grow">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
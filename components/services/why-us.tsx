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
} from "lucide-react"

const iconsMap: Record<string, React.ElementType> = {
  award: Award,
  globe: Globe,
  users: Users,
  shield: Shield,
  zap: Zap,
  briefcase: Briefcase,
  clock: Clock,
  dollarSign: DollarSign,
}

interface WhyUsItem {
  icon: string
  title: string
  description: string
  color?: string // warna fix, biar ga random
}

interface WhyUsProps {
  title: string
  subtitle: string
  items: WhyUsItem[]
}

export const WhyUs: React.FC<WhyUsProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-space-grotesk text-4xl font-bold text-primary mb-4">
          {title}
        </h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconsMap[item.icon]
            return (
              <div
                key={i}
                className="bg-gray-dark p-6 rounded-2xl shadow-lg hover:shadow-xl 
                           border border-white/10 transition-all duration-300 text-center hover:scale-105"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-primary mx-auto mb-6 ${
                    item.color ?? "bg-secondary"
                  }`}
                >
                  {Icon ? (
                    <Icon className="w-7 h-7" />
                  ) : (
                    <div className="w-7 h-7 bg-white/30 rounded" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

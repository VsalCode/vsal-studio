"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features: ServiceFeature[]
  popular?: boolean
}

export default function ServiceCard({ title, description, price, features, popular = false }: ServiceCardProps) {
  return (
    <Card className={`relative h-full ${popular ? "border-primary shadow-lg" : ""}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="font-space-grotesk text-2xl text-secondary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {feature.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-6">{feature.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
      </CardContent>
    </Card>
  )
}

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqCategories } from '@/data/faq'


export const Categories = () => {

  return (
    <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="font-space-grotesk text-3xl font-bold text-white">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-primary rounded-lg px-6 bg-black/40 backdrop-blur-xl shadow-lg"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                        <span className="font-medium text-white pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80 leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

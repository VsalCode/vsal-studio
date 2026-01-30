import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 font-montserrat">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className=" text-4xl font-semibold text-secondary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            wujudkan ide Anda jadi kenyataan. Diskusikan proyek Anda bersama kami dan dapatkan konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6281399090477" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-secondary font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>

  )
}

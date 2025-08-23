import { Banner } from "@/components/homepage/banner"
import { AboutUs } from "@/components/homepage/about-us"
import { Clients } from "@/components/homepage/clients"
import { Services } from "@/components/homepage/services"
// import { Testimonials } from "@/components/homepage/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {

  return (
    <main className="min-h-screen bg-background">
      <Banner/>
      <AboutUs/>
      <Clients/>
      {/* <Testimonials/> */}
      <Services/>
      <CTA/>
    </main>
  )
}

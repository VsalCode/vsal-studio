import { Bundling } from "@/components/services/bundling"
import { Website } from "@/components/services/website"
import { Design } from "@/components/services/design"
import { CTA } from "@/components/cta"
import { HeaderSection } from "@/components/header-section"

export default function ServicesPage() {



  return (
    <main className="min-h-screen bg-background">

      <HeaderSection
        chip="Our Services"
        title1="Complete Digital"
        title2="Solutions"
        desc="Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Dari startup hingga enterprise, kami punya solusinya."
      />

      <Bundling />
      <Website />
      <Design />
      <CTA />

    </main>
  )
}

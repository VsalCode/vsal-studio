import { HeaderSection } from "@/components/header-section"
// import { PortoGrid } from "@/components/portfolio/porto-grid"
import { StatsPorto } from "@/components/portfolio/stats-porto"
import { CTA } from "@/components/cta"
import { InstagramFeeds } from "@/components/portfolio/instagram-feeds"
// import { PortoFilter } from "@/components/portfolio/porto-filter"

export default function PortfolioPage() {


  // const categories = ["All", "Branding", "Website", "E-commerce", "Web Application"]

  return (
    <main className="min-h-screen bg-background">

      <HeaderSection
        chip="Our Portfolio"
        title1="Our Latest"
        title2="Work"
        desc="Lihat hasil karya terbaik kami dan bagaimana kami membantu klien mencapai tujuan digital mereka"
      />
      <InstagramFeeds/>
      <StatsPorto />
      <CTA />

    </main>
  )
}

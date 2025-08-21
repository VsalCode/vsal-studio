import { HeaderSection } from "@/components/header-section"
import { Categories } from "@/components/faq/categories"
import { Contact } from "@/components/faq/contact"

export default function FAQPage() {
  
  return (
    <main className="min-h-screen bg-background">
      <HeaderSection
      chip="Frequently Asked Questions"
      title1="Got"
      title2="Questions?"
      desc="Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang layanan dan proses kerja kami"
      />
      <Categories/>
      <Contact/>
    </main>
  )
}

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Clock, CreditCard, Palette, Code, Users } from "lucide-react"


export const Categories = () => {

  const faqCategories = [
      {
        title: "General Questions",
        icon: MessageCircle,
        questions: [
          {
            question: "Apa itu Vsal Studio dan layanan apa yang ditawarkan?",
            answer:
              "Vsal Studio adalah digital agency yang menyediakan layanan lengkap mulai dari website development, logo design, branding, hingga social media content management. Kami membantu bisnis membangun dan mengembangkan presence digital mereka dengan solusi yang profesional dan hasil yang terukur.",
          },
          {
            question: "Bagaimana cara memulai project dengan Vsal Studio?",
            answer:
              "Sangat mudah! Anda bisa menghubungi kami melalui website, email, atau WhatsApp untuk konsultasi gratis. Tim kami akan membantu menganalisis kebutuhan bisnis Anda dan merekomendasikan paket atau layanan yang paling sesuai dengan budget dan tujuan Anda.",
          },
          {
            question: "Apakah Vsal Studio melayani klien dari luar kota atau luar negeri?",
            answer:
              "Ya, tentu saja! Kami melayani klien dari seluruh Indonesia bahkan internasional. Semua komunikasi dan koordinasi project dapat dilakukan secara online melalui video call, email, dan project management tools yang memudahkan kolaborasi jarak jauh.",
          },
          {
            question: "Berapa lama pengalaman tim Vsal Studio di industri digital?",
            answer:
              "Tim Vsal Studio memiliki pengalaman lebih dari 5 tahun di industri digital dengan portfolio 500+ project yang telah diselesaikan. Kami terdiri dari designer, developer, dan digital marketer berpengalaman yang selalu mengikuti perkembangan teknologi terbaru.",
          },
        ],
      },
      {
        title: "Pricing & Packages",
        icon: CreditCard,
        questions: [
          {
            question: "Apa perbedaan antara Paket Perintis, Ambisius, dan Pesugihan?",
            answer:
              "Paket Perintis (1.5 jt) cocok untuk startup dengan kebutuhan basic: landing page, logo sederhana, dan social media setup. Paket Ambisius (2.9 jt) untuk bisnis berkembang dengan website multi-page, branding premium, dan SEO. Paket Pesugihan (5 jt) untuk enterprise dengan custom web app, complete branding, dan digital marketing suite lengkap.",
          },
          {
            question: "Apakah ada sistem pembayaran cicilan atau bertahap?",
            answer:
              "Ya, kami menyediakan sistem pembayaran bertahap untuk memudahkan cash flow bisnis Anda. Biasanya dibagi menjadi 3 tahap: 50% di awal, 30% saat development, dan 20% saat project selesai. Untuk project besar, kami juga bisa mengatur skema pembayaran yang lebih fleksibel.",
          },
          {
            question: "Apakah harga sudah termasuk maintenance dan support?",
            answer:
              "Untuk Paket Ambisius dan Pesugihan, maintenance 3-12 bulan sudah included. Paket Perintis mendapat support 1 bulan gratis. Setelah periode tersebut, kami menyediakan paket maintenance mulai dari 100k/bulan yang mencakup update, backup, security monitoring, dan technical support.",
          },
          {
            question: "Bisakah saya customize paket sesuai kebutuhan spesifik?",
            answer:
              "Tentu saja! Selain paket bundling, kami juga menyediakan layanan individual dan custom quote. Tim kami akan membantu merancang solusi yang tepat sesuai kebutuhan dan budget Anda. Konsultasi untuk custom package ini gratis dan tanpa komitmen.",
          },
        ],
      },
      {
        title: "Timeline & Process",
        icon: Clock,
        questions: [
          {
            question: "Berapa lama waktu pengerjaan untuk setiap jenis project?",
            answer:
              "Timeline bervariasi tergantung kompleksitas: Landing page (1-7 hari), Static website (1 minggu), E-commerce (4-6 minggu), Custom web app (tergantung). Logo design (3-5 hari), Complete branding (1-7 hari). Paket bundling biasanya 1-2 minggu tergantung scope project.",
          },
          {
            question: "Bagaimana proses development dan komunikasi selama project?",
            answer:
              "Kami menggunakan metodologi agile dengan milestone-based development. Klien akan mendapat update progress mingguan, preview demo setiap milestone, dan akses ke project management dashboard. Komunikasi dilakukan via WhatsApp, email, dan weekly video call untuk review progress.",
          },
          {
            question: "Apakah saya bisa request revisi selama proses development?",
            answer:
              "Ya, revisi adalah bagian normal dari proses development. Setiap paket sudah termasuk unlimited minor revisions dan 2-3 major revisions. Kami akan memastikan hasil akhir sesuai dengan ekspektasi Anda sebelum project dinyatakan selesai.",
          },
          {
            question: "Apa yang terjadi jika project melebihi timeline yang disepakati?",
            answer:
              "Jika keterlambatan disebabkan oleh faktor internal kami, tidak ada biaya tambahan dan kami akan memberikan kompensasi berupa extended support. Jika karena perubahan scope dari klien, kami akan diskusikan adjustment timeline dan budget secara transparan.",
          },
        ],
      },
      {
        title: "Design & Branding",
        icon: Palette,
        questions: [
          {
            question: "Bagaimana proses pembuatan logo dan branding?",
            answer:
              "Proses dimulai dengan brand research dan competitor analysis, kemudian kami buat 3-5 konsep logo berbeda. Setelah klien pilih konsep favorit, kami lakukan refinement hingga sempurna. Package lengkap termasuk brand guidelines, color palette, typography guide, dan file dalam berbagai format.",
          },
          {
            question: "Apakah saya mendapat hak kepemilikan penuh atas design yang dibuat?",
            answer:
              "Ya, 100%! Setelah pembayaran lunas, semua hak kepemilikan intellectual property akan sepenuhnya menjadi milik klien. Kami akan menyerahkan semua source file, dokumentasi, dan sertifikat transfer ownership untuk memastikan kepemilikan yang sah.",
          },
          {
            question: "Bisakah menggunakan design/branding yang sudah ada sebagai referensi?",
            answer:
              "Tentu saja! Kami sering membantu klien yang sudah punya brand identity untuk dikembangkan atau di-refresh. Tim kami akan menganalisis existing brand assets dan memberikan rekomendasi improvement yang selaras dengan brand personality yang sudah ada.",
          },
          {
            question: "Apakah tersedia layanan rebranding untuk bisnis yang sudah berjalan?",
            answer:
              "Ya, kami memiliki pengalaman luas dalam rebranding. Prosesnya meliputi audit brand existing, market research, competitor analysis, dan strategy development. Kami pastikan transisi rebranding berjalan smooth tanpa mengganggu operasional bisnis yang sedang berjalan.",
          },
        ],
      },
      {
        title: "Technical & Development",
        icon: Code,
        questions: [
          {
            question: "Teknologi apa yang digunakan untuk website development?",
            answer:
              "Kami menggunakan teknologi modern dan terpercaya: React/Next.js untuk frontend, Node.js untuk backend, database PostgreSQL/MongoDB, hosting di cloud platform seperti Vercel/AWS. Semua website responsive, SEO-optimized, dan mengikuti best practices untuk performance dan security.",
          },
          {
            question: "Apakah website yang dibuat mobile-friendly dan SEO optimized?",
            answer:
              "Semua website yang kami buat menggunakan responsive design yang perfect di semua device. SEO optimization sudah included dengan proper meta tags, structured data, sitemap, dan page speed optimization. Kami juga setup Google Analytics dan Search Console untuk monitoring.",
          },
          {
            question: "Bisakah website di-integrate dengan sistem existing perusahaan?",
            answer:
              "Ya, kami berpengalaman dalam API integration dan system integration. Bisa connect dengan CRM, ERP, payment gateway, inventory system, atau third-party services lainnya. Tim technical kami akan assess compatibility dan merancang integration architecture yang optimal.",
          },
          {
            question: "Bagaimana dengan security dan backup website?",
            answer:
              "Security adalah prioritas utama kami. Semua website dilengkapi SSL certificate, regular security updates, malware protection, dan automated backup harian. Untuk e-commerce dan web app, kami implement additional security layers seperti two-factor authentication dan data encryption.",
          },
        ],
      },
      {
        title: "Support & Maintenance",
        icon: Users,
        questions: [
          {
            question: "Apa saja yang termasuk dalam layanan maintenance?",
            answer:
              "Maintenance package mencakup: regular updates (CMS, plugins, security patches), daily automated backup, uptime monitoring, performance optimization, technical support via WhatsApp/email, dan monthly report. Untuk e-commerce, termasuk juga inventory sync dan payment gateway monitoring.",
          },
          {
            question: "Bagaimana cara menghubungi support jika ada masalah urgent?",
            answer:
              "Kami menyediakan multiple channel support: WhatsApp untuk urgent issues (response <2 jam), email untuk general inquiries (response <24 jam), dan dedicated phone line untuk enterprise clients. Untuk critical issues, kami punya emergency response team yang standby 24/7.",
          },
          {
            question: "Apakah tim Vsal Studio bisa training cara menggunakan website/CMS?",
            answer:
              "Ya, kami provide comprehensive training untuk semua klien. Training mencakup cara update content, upload gambar, manage products (untuk e-commerce), dan basic troubleshooting. Training bisa dilakukan via video call atau on-site visit (untuk klien Jakarta area).",
          },
          {
            question: "Bagaimana jika saya ingin upgrade atau menambah fitur di kemudian hari?",
            answer:
              "Kami selalu siap membantu development berkelanjutan! Semua website kami buat dengan scalable architecture yang mudah di-upgrade. Untuk existing clients, kami berikan special rate untuk additional features atau enhancement. Konsultasi upgrade selalu gratis untuk existing clients.",
          },
        ],
      },
    ]

  return (
    <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="bg-white/30 p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-space-grotesk text-3xl font-bold text-white">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-background/90 border border-primary rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                        <span className="font-medium text-secondary pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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

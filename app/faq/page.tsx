import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, ArrowRight, MessageCircle, Clock, CreditCard, Palette, Code, Users } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: MessageCircle,
      questions: [
        {
          question: "Apa itu vsal Studio dan layanan apa yang ditawarkan?",
          answer:
            "vsal Studio adalah digital agency yang menyediakan layanan lengkap mulai dari website development, logo design, branding, hingga social media content management. Kami membantu bisnis membangun dan mengembangkan presence digital mereka dengan solusi yang profesional dan hasil yang terukur.",
        },
        {
          question: "Bagaimana cara memulai project dengan vsal Studio?",
          answer:
            "Sangat mudah! Anda bisa menghubungi kami melalui website, email, atau WhatsApp untuk konsultasi gratis. Tim kami akan membantu menganalisis kebutuhan bisnis Anda dan merekomendasikan paket atau layanan yang paling sesuai dengan budget dan tujuan Anda.",
        },
        {
          question: "Apakah vsal Studio melayani klien dari luar kota atau luar negeri?",
          answer:
            "Ya, tentu saja! Kami melayani klien dari seluruh Indonesia bahkan internasional. Semua komunikasi dan koordinasi project dapat dilakukan secara online melalui video call, email, dan project management tools yang memudahkan kolaborasi jarak jauh.",
        },
        {
          question: "Berapa lama pengalaman tim vsal Studio di industri digital?",
          answer:
            "Tim vsal Studio memiliki pengalaman lebih dari 5 tahun di industri digital dengan portfolio 500+ project yang telah diselesaikan. Kami terdiri dari designer, developer, dan digital marketer berpengalaman yang selalu mengikuti perkembangan teknologi terbaru.",
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
            "Paket Perintis ($1,999) cocok untuk startup dengan kebutuhan basic: landing page, logo sederhana, dan social media setup. Paket Ambisius ($3,999) untuk bisnis berkembang dengan website multi-page, branding premium, dan SEO. Paket Pesugihan ($7,999) untuk enterprise dengan custom web app, complete branding, dan digital marketing suite lengkap.",
        },
        {
          question: "Apakah ada sistem pembayaran cicilan atau bertahap?",
          answer:
            "Ya, kami menyediakan sistem pembayaran bertahap untuk memudahkan cash flow bisnis Anda. Biasanya dibagi menjadi 3 tahap: 50% di awal, 30% saat development, dan 20% saat project selesai. Untuk project besar, kami juga bisa mengatur skema pembayaran yang lebih fleksibel.",
        },
        {
          question: "Apakah harga sudah termasuk maintenance dan support?",
          answer:
            "Untuk Paket Ambisius dan Pesugihan, maintenance 3-12 bulan sudah included. Paket Perintis mendapat support 1 bulan gratis. Setelah periode tersebut, kami menyediakan paket maintenance mulai dari $99/bulan yang mencakup update, backup, security monitoring, dan technical support.",
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
            "Timeline bervariasi tergantung kompleksitas: Landing page (1-2 minggu), Static website (2-3 minggu), E-commerce (4-6 minggu), Custom web app (6-12 minggu). Logo design (1 minggu), Complete branding (2-3 minggu). Paket bundling biasanya 4-8 minggu tergantung scope project.",
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
          question: "Apakah tim vsal Studio bisa training cara menggunakan website/CMS?",
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-space-grotesk text-2xl font-bold text-secondary">
              vsal Studio
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/faq" className="text-primary font-medium">
                FAQ
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <br />
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Frequently Asked Questions</Badge>
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-secondary mb-6">
              Got
              <span className="text-primary block">Questions?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang layanan dan proses kerja kami
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-space-grotesk text-3xl font-bold text-secondary">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-background border border-border rounded-lg px-6"
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

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-grotesk text-3xl font-bold text-secondary mb-6">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu Anda dengan konsultasi gratis dan tanpa
              komitmen.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background rounded-lg p-6 border border-border">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">Chat langsung dengan tim support kami</p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Start Chat
                </Button>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Hubungi kami via WhatsApp</p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  +62 812-3456-7890
                </Button>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Kirim pertanyaan detail via email</p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  hello@vsal Studio.com
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-space-grotesk text-2xl font-bold mb-4">vsal Studio</div>
              <p className="text-accent-foreground/80 mb-4">
                Creating digital experiences that drive results and inspire growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Website Development</li>
                <li>Logo Design</li>
                <li>Social Media</li>
                <li>Bundling Packages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/portfolio">Our Work</Link>
                </li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>hello@vsal Studio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 vsal Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

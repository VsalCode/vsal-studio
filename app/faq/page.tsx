import { HeaderSection } from "@/components/header-section";
import { Categories } from "@/components/faq/categories";
import { Contact } from "@/components/faq/contact";

export default function FAQPage() {
  return (
    <>
      <main className=" min-h-screen bg-gradient-to-br from-secondary via-accent to-secondary overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(23,204,161,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,204,161,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-secondary/20" />
        </div>

        <HeaderSection
          chip="Frequently Asked Questions"
          title1="Got"
          title2="Questions?"
          desc="Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang layanan dan proses kerja kami"
        />
        <Categories />
        <Contact />
      </main>
    </>
  );
}

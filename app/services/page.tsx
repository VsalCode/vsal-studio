import { Bundling } from "@/components/services/bundling";
import { Website } from "@/components/services/website";
import { Design } from "@/components/services/design";
import { CTA } from "@/components/cta";
import { HeaderSection } from "@/components/header-section";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-secondary via-accent to-secondary overflow-hidden">
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
  );
}

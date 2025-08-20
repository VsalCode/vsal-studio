import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-space-grotesk text-2xl font-bold mb-4 block">
              DigitalCraft
            </Link>
            <p className="text-accent-foreground/80 mb-4">
              Creating digital experiences that drive results and inspire growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <Link href="/services#bundling" className="hover:text-accent-foreground transition-colors">
                  Bundling Packages
                </Link>
              </li>
              <li>
                <Link href="/services#website" className="hover:text-accent-foreground transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:text-accent-foreground transition-colors">
                  Design Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <Link href="/" className="hover:text-accent-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>hello@digitalcraft.com</li>
              <li>+1 (555) 123-4567</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
          <p>&copy; 2024 Vsal Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

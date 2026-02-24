import Link from "next/link";
import { categories } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our story</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Discover / Categories */}
          <div className="col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Discover</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/70">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`#category-${cat.slug}`} className="hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Help center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community guidelines</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Creator handbook</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Trust & safety</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of use</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} MyManifest. Crowdfunding for what matters.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

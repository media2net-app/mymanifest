import Link from "next/link";
import { headerCategories } from "@/lib/header-categories";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 py-10 sm:px-6 sm:py-12">
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
            <ul className="space-y-2 text-sm text-foreground/70">
              {headerCategories.map((main) => (
                <li key={main.name}>
                  <Link
                    href={main.slug ? `/#category-${main.slug}` : `/#category-${main.sub[0]?.slug ?? ""}`}
                    className="hover:text-primary transition-colors"
                  >
                    {main.name}
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
        <div className="mt-10 pt-8 border-t border-border/60" />
      </div>
      <div className="bg-primary-darker py-6 text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6">
          <p className="text-white/80">© {new Date().getFullYear()} MyManifest. Crowdfunding for what matters.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">Twitter</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

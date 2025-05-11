import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">TC</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Turkish Cheng Zhang Songting</p>
              <p className="text-xs text-muted-foreground">Industrial College</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">27, Bestekar Caddesi, Ankara, 06680, Turkey</p>
          <p className="text-sm text-muted-foreground">Türkiye Cheng Zhang Songting Endüstri Enstitüsü</p>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-border px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Turkish Cheng Zhang Songting Industrial College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

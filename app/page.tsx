import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Jingname Khamoo Nangrong</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors hover:text-primary">
              Menu
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/reservation">Make a Reservation</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Thai cuisine"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 md:px-6">
            <div className="flex flex-col items-start gap-4 max-w-xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Authentic Thai Cuisine in Nangrong
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                Experience the rich flavors and traditional recipes of Thailand at Jingname Khamoo Nangrong.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/menu">View Our Menu</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/reservation">Make a Reservation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Specialties</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Discover our most popular dishes, prepared with authentic Thai recipes and the freshest ingredients.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Khamoo dish" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Khamoo Special</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our signature dish featuring slow-cooked pork in a rich, aromatic sauce with Thai herbs and spices.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-amber-600 font-semibold">฿280</span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Tom Yum soup" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Tom Yum Goong</h3>
                  <p className="mt-2 text-muted-foreground">
                    Hot and sour soup with shrimp, lemongrass, galangal, and fresh Thai chilies.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-amber-600 font-semibold">฿220</span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Pad Thai" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Pad Thai</h3>
                  <p className="mt-2 text-muted-foreground">
                    Stir-fried rice noodles with eggs, tofu, bean sprouts, and our special tamarind sauce.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-amber-600 font-semibold">฿180</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/menu">
                  View Full Menu
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Jingname Khamoo Nangrong</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Founded in 2005, our restaurant brings the authentic flavors of Thailand to Nangrong. Our recipes have
                  been passed down through generations, preserving the traditional taste of Thai cuisine.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  We source the freshest ingredients locally and import special herbs and spices directly from Thailand
                  to ensure the most authentic flavors in every dish.
                </p>
                <Button asChild className="mt-6 self-start">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative h-72 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-amber-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Location</h3>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-300" />
                  <p>123 Main Street, Nangrong, Buriram Province, Thailand 31110</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Hours</h3>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 shrink-0 text-amber-300" />
                  <div>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact</h3>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 text-amber-300" />
                  <div>
                    <p>Phone: +66 123 456 789</p>
                    <p>Email: info@jingnamekhamoo.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-white hover:text-amber-300">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-amber-300">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-sm text-muted-foreground">© 2023 Jingname Khamoo Nangrong. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Story</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Learn about the history and passion behind Jingname Khamoo Nangrong.
              </p>
            </div>

            <div className="grid gap-12 mt-12 md:grid-cols-2 md:gap-16">
              <div className="relative h-72 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Restaurant founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Our Beginning</h2>
                <p className="mt-4 text-muted-foreground">
                  Jingname Khamoo Nangrong was founded in 2005 by Chef Somchai, who grew up in a small village near
                  Nangrong. His passion for cooking began at an early age, learning traditional recipes from his
                  grandmother.
                </p>
                <p className="mt-4 text-muted-foreground">
                  After studying culinary arts in Bangkok and working in several prestigious restaurants, Chef Somchai
                  returned to his hometown to open Jingname Khamoo Nangrong, with the mission of sharing authentic Thai
                  cuisine with locals and visitors alike.
                </p>
              </div>
            </div>

            <div className="grid gap-12 mt-16 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-2xl font-bold">Our Philosophy</h2>
                <p className="mt-4 text-muted-foreground">
                  At Jingname Khamoo Nangrong, we believe that food is more than just sustenance—it's a way to connect
                  with our culture and share our heritage with others. We are committed to preserving traditional Thai
                  recipes while adding our own creative touch.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We source the freshest ingredients locally and import special herbs and spices directly from Thailand
                  to ensure the most authentic flavors in every dish. Our commitment to quality and authenticity has
                  made us a beloved destination for Thai food enthusiasts.
                </p>
              </div>
              <div className="relative h-72 overflow-hidden rounded-lg order-1 md:order-2 md:h-auto">
                <Image src="/placeholder.svg?height=600&width=800" alt="Chef cooking" fill className="object-cover" />
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-4 p-6 text-center border rounded-lg">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Chef Somchai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Chef Somchai</h3>
                  <p className="text-sm text-muted-foreground">Founder & Head Chef</p>
                  <p className="text-sm">
                    With over 20 years of culinary experience, Chef Somchai brings his passion for traditional Thai
                    cuisine to every dish.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 text-center border rounded-lg">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Malai" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Malai</h3>
                  <p className="text-sm text-muted-foreground">Sous Chef</p>
                  <p className="text-sm">
                    Malai specializes in creating the perfect balance of flavors that Thai cuisine is known for.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 text-center border rounded-lg">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Pranee" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Pranee</h3>
                  <p className="text-sm text-muted-foreground">Restaurant Manager</p>
                  <p className="text-sm">
                    Pranee ensures that every guest has an exceptional dining experience from the moment they walk in.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-amber-50 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Awards & Recognition</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-2 p-4 text-center">
                  <div className="text-amber-600 text-4xl font-bold">2022</div>
                  <h3 className="font-semibold">Best Thai Restaurant</h3>
                  <p className="text-sm text-muted-foreground">Buriram Food Awards</p>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 text-center">
                  <div className="text-amber-600 text-4xl font-bold">2020</div>
                  <h3 className="font-semibold">Excellence in Authentic Cuisine</h3>
                  <p className="text-sm text-muted-foreground">Thailand Culinary Association</p>
                </div>

                <div className="flex flex-col items-center gap-2 p-4 text-center">
                  <div className="text-amber-600 text-4xl font-bold">2018</div>
                  <h3 className="font-semibold">Top 10 Local Restaurants</h3>
                  <p className="text-sm text-muted-foreground">Thailand Tourism Board</p>
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


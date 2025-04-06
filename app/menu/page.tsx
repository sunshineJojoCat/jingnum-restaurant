import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Menu</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Explore our authentic Thai dishes, prepared with traditional recipes and the freshest ingredients.
              </p>
            </div>

            <Tabs defaultValue="appetizers" className="mt-12">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
                  <TabsTrigger value="soups">Soups</TabsTrigger>
                  <TabsTrigger value="main">Main Dishes</TabsTrigger>
                  <TabsTrigger value="desserts">Desserts</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="appetizers" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Spring Rolls"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Spring Rolls</h3>
                    <p className="text-sm text-muted-foreground">
                      Crispy spring rolls filled with vegetables, served with sweet chili sauce.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿120</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Satay" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Chicken Satay</h3>
                    <p className="text-sm text-muted-foreground">
                      Grilled chicken skewers marinated in Thai spices, served with peanut sauce.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿150</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Tod Mun" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Tod Mun</h3>
                    <p className="text-sm text-muted-foreground">
                      Thai fish cakes with red curry paste, served with cucumber relish.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿160</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="soups" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Tom Yum" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Tom Yum Goong</h3>
                    <p className="text-sm text-muted-foreground">
                      Hot and sour soup with shrimp, lemongrass, galangal, and fresh Thai chilies.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿220</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Tom Kha" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Tom Kha Gai</h3>
                    <p className="text-sm text-muted-foreground">
                      Coconut soup with chicken, galangal, lemongrass, and lime leaves.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿200</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Gaeng Jued"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Gaeng Jued</h3>
                    <p className="text-sm text-muted-foreground">Clear soup with vegetables, tofu, and minced pork.</p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿180</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="main" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Khamoo" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Khamoo Special</h3>
                    <p className="text-sm text-muted-foreground">
                      Our signature dish featuring slow-cooked pork in a rich, aromatic sauce with Thai herbs and
                      spices.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿280</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Pad Thai" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Pad Thai</h3>
                    <p className="text-sm text-muted-foreground">
                      Stir-fried rice noodles with eggs, tofu, bean sprouts, and our special tamarind sauce.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿180</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Green Curry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Green Curry</h3>
                    <p className="text-sm text-muted-foreground">
                      Spicy green curry with your choice of protein, bamboo shoots, eggplant, and Thai basil.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿220</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Basil Stir Fry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Pad Kra Pao</h3>
                    <p className="text-sm text-muted-foreground">
                      Stir-fried meat with holy basil, chili, and garlic, served with rice and a fried egg.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿200</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Pineapple Fried Rice"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Pineapple Fried Rice</h3>
                    <p className="text-sm text-muted-foreground">
                      Fried rice with pineapple, cashew nuts, raisins, and your choice of protein.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿220</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Massaman Curry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Massaman Curry</h3>
                    <p className="text-sm text-muted-foreground">
                      Rich, mild curry with potatoes, onions, peanuts, and your choice of protein.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿240</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="desserts" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Mango Sticky Rice"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Mango Sticky Rice</h3>
                    <p className="text-sm text-muted-foreground">
                      Sweet sticky rice with fresh mango and coconut cream.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿150</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Coconut Ice Cream"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Coconut Ice Cream</h3>
                    <p className="text-sm text-muted-foreground">
                      Homemade coconut ice cream with sticky rice and peanuts.
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿120</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-6 border rounded-lg">
                    <div className="relative h-40 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Tub Tim Krob"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Tub Tim Krob</h3>
                    <p className="text-sm text-muted-foreground">Water chestnuts in coconut milk with crushed ice.</p>
                    <div className="mt-auto pt-4">
                      <span className="text-amber-600 font-semibold">฿130</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                All dishes can be adjusted for spice level according to your preference. Please inform our staff of any
                allergies or dietary restrictions.
              </p>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/reservation">Make a Reservation</Link>
              </Button>
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


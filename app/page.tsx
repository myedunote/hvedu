import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewsCard from "@/components/news-card"
import ImageGallery from "@/components/image-gallery"

const campusImages = [
  {
    src: "/images/placeholder.png",
    alt: "Main campus building",
    caption: "Main Administration Building",
  },
  {
    src: "/images/placeholder.png",
    alt: "University library",
    caption: "University Library",
  },
  {
    src: "/images/placeholder.png",
    alt: "Engineering building",
    caption: "College of Engineering",
  },
  {
    src: "/images/placeholder.png",
    alt: "Sports facilities",
    caption: "Sports Complex",
  },
  {
    src: "/images/placeholder.png",
    alt: "Student center",
    caption: "Student Center",
  },
  {
    src: "/images/placeholder.png",
    alt: "Research laboratories",
    caption: "Research Laboratories",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Turkish Cheng Zhang Songting Industrial College
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            A comprehensive university with a primary focus on engineering and coordinated development of multiple
            disciplines.
          </p>
          <div className="mt-10 flex gap-x-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">University at a Glance</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our commitment to innovation and excellence in education
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">2,400</h3>
                <p className="mt-1 text-base text-muted-foreground text-center">Faculty and Staff</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">10</h3>
                <p className="mt-1 text-base text-muted-foreground text-center">Teaching Colleges</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">2.8M+</h3>
                <p className="mt-1 text-base text-muted-foreground text-center">Library Books</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold">3,853.7</h3>
                <p className="mt-1 text-base text-muted-foreground text-center">Campus Area (acres)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Campus Life</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our beautiful campuses and state-of-the-art facilities
            </p>
          </div>
          <div className="mt-16">
            <ImageGallery images={campusImages} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Our University</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Turkish Cheng Zhang Songting Industrial College is committed to innovation and open development, with a
                strong industrial foundation and distinctive packaging characteristics.
              </p>
              <div className="mt-8 max-w-xl space-y-8 text-base leading-7 text-muted-foreground">
                <div className="relative pl-10">
                  <div className="font-semibold text-foreground">Comprehensive Education</div>
                  <p className="mt-2">
                    We are a comprehensive university with a primary focus on engineering and coordinated development of
                    multiple disciplines including science, management, literature, economics, law, agriculture,
                    education, and art.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="font-semibold text-foreground">Modern Facilities</div>
                  <p className="mt-2">
                    Our university features advanced computer network service systems, standard sports facilities
                    including plastic track and field, gymnasium, and various sports venues.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="font-semibold text-foreground">Global Connections</div>
                  <p className="mt-2">
                    We maintain extensive research collaborations and academic exchange relationships with international
                    universities and research institutions across the United States, United Kingdom, Australia, Germany,
                    South Korea, Japan, Malaysia, Tanzania, Hong Kong, and Macau.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/about" className="flex items-center gap-x-2">
                    Learn more about us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <Image
                src="/images/placeholder.png"
                alt="Campus view"
                width={800}
                height={600}
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <Image
                src="/images/placeholder.png"
                alt="Library interior"
                width={800}
                height={600}
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest News</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest happenings at our university
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <NewsCard
              title="New Research Partnership with University of Arizona"
              date="May 10, 2025"
              description="Our university has established a new research partnership with the University of Arizona focusing on sustainable engineering solutions."
              href="/news/1"
              imageSrc="/images/placeholder.png"
            />
            <NewsCard
              title="Student Team Wins International Engineering Competition"
              date="May 5, 2025"
              description="A team of our mechanical engineering students has won first place at the International Engineering Design Competition held in Berlin."
              href="/news/2"
              imageSrc="/images/placeholder.png"
            />
            <NewsCard
              title="New Digital Media Arts Center Opening"
              date="April 28, 2025"
              description="The university is proud to announce the opening of our new state-of-the-art Digital Media Arts Center, enhancing our offerings in digital media technology and art."
              href="/news/3"
              imageSrc="/images/placeholder.png"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/news" className="flex items-center gap-x-2 mx-auto">
                View all news
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-primary px-8 py-16 text-center sm:py-20 lg:mx-0 lg:max-w-none lg:flex lg:items-center lg:justify-between lg:px-16">
            <div className="lg:max-w-xl lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to join our community?</h2>
              <p className="mt-4 text-lg text-white/90">
                Discover our diverse range of programs and apply today to start your journey with Turkish Cheng Zhang
                Songting Industrial College.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 lg:mt-0 lg:flex-shrink-0">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

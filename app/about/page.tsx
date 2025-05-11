import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageGallery from "@/components/image-gallery"
import StatsCard from "@/components/stats-card"

const facilityImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Library exterior",
    caption: "University Library - 55,430.29 square meters",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Library interior",
    caption: "Library collection of over 2.8484 million books",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Computer lab",
    caption: "Advanced computer network with 8,297 digital terminals",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Research equipment",
    caption: "Teaching and research equipment valued at 463 million yuan",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sports track",
    caption: "Standard plastic track and field",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Gymnasium",
    caption: "Modern gymnasium and sports facilities",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Our University</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Turkish Cheng Zhang Songting Industrial College is a comprehensive university with a primary focus on
              engineering and coordinated development of multiple disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our History and Mission</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Turkish Cheng Zhang Songting Industrial College is committed to innovation and open development, with a
                strong industrial foundation and distinctive packaging characteristics.
              </p>
              <div className="mt-8 max-w-xl space-y-8 text-base leading-7 text-muted-foreground">
                <p>
                  Our university spans two campuses with a total area of 3853.7 acres, providing ample space for
                  academic and extracurricular activities. The library covers 55430.29 square meters and houses a
                  collection of over 2.8484 million books, serving as a comprehensive resource for our students and
                  faculty.
                </p>
                <p>
                  With teaching and research equipment valued at 463 million yuan and 8297 digital terminals, we provide
                  cutting-edge facilities for our academic community. Our advanced computer network service system
                  supports the technological needs of modern education.
                </p>
                <p>
                  The university boasts standard sports facilities, including a plastic track and field, gymnasium, and
                  various sports venues, promoting physical well-being alongside academic excellence.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="University campus"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Facilities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our state-of-the-art facilities that support academic excellence and student life
            </p>
          </div>
          <div className="mt-16">
            <ImageGallery images={facilityImages} />
          </div>
        </div>
      </section>

      {/* Faculty and Staff Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Faculty and Staff</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our university is home to a diverse and accomplished academic community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <StatsCard title="Total Faculty and Staff" value="2,400" />
            <StatsCard title="Full-time Teachers" value="1,835" />
            <StatsCard title="Professors" value="200" />
            <StatsCard title="Associate Professors" value="441" />
            <StatsCard title="Graduate Supervisors" value="552" />
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight">Teaching Colleges</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Our university is organized into 10 teaching colleges, each dedicated to excellence in their respective
              fields.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Engineering</h4>
                <p className="mt-2 text-muted-foreground">
                  Focusing on mechanical, electrical, and civil engineering disciplines.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Science</h4>
                <p className="mt-2 text-muted-foreground">Dedicated to mathematics, physics, chemistry, and biology.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Management</h4>
                <p className="mt-2 text-muted-foreground">
                  Specializing in business administration and management sciences.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Arts</h4>
                <p className="mt-2 text-muted-foreground">
                  Offering programs in visual arts, design, and digital media.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Economics</h4>
                <p className="mt-2 text-muted-foreground">
                  Focusing on economic theory, international trade, and finance.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Law</h4>
                <p className="mt-2 text-muted-foreground">Providing education in legal studies and jurisprudence.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Agriculture</h4>
                <p className="mt-2 text-muted-foreground">
                  Specializing in agricultural sciences and sustainable farming.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Education</h4>
                <p className="mt-2 text-muted-foreground">Training future educators and educational researchers.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Digital Media</h4>
                <p className="mt-2 text-muted-foreground">Focusing on digital media technology and applications.</p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="text-lg font-semibold">College of Materials Science</h4>
                <p className="mt-2 text-muted-foreground">Researching advanced materials and their applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Achievements</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our university has made significant strides in teaching and research.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Reform</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>10 national teaching reform projects</li>
                    <li>235 provincial/ministerial teaching reform projects</li>
                    <li>1 national teaching achievement award</li>
                    <li>41 provincial teaching achievement awards</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Research Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>15,140 published academic research papers</li>
                    <li>1,823 papers indexed by SCI, EI, and ISTP</li>
                    <li>Numerous patents and innovations</li>
                    <li>Significant contributions to industry standards</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>International Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Extensive research collaborations and academic exchange relationships with universities worldwide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      United States: University of Arizona, State University of New York, California State University,
                      University of Akron
                    </li>
                    <li>United Kingdom: University of Derby, University of Lincoln</li>
                    <li>Australia: Macquarie University, University of New South Wales</li>
                    <li>And many more across Germany, South Korea, Japan, Malaysia, Tanzania, Hong Kong, and Macau</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Global Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We collaborate with prestigious institutions around the world
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="University of Arizona"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">University of Arizona</h3>
                <p className="text-white/80">United States</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="University of Derby"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">University of Derby</h3>
                <p className="text-white/80">United Kingdom</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Macquarie University"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Macquarie University</h3>
                <p className="text-white/80">Australia</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Stuttgart University of Applied Sciences"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Stuttgart University of Applied Sciences</h3>
                <p className="text-white/80">Germany</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="University of Suwon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">University of Suwon</h3>
                <p className="text-white/80">South Korea</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="City University of Hong Kong"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">City University of Hong Kong</h3>
                <p className="text-white/80">Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

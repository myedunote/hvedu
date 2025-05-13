import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StatsCard from "@/components/stats-card"
import ImageGallery from "@/components/image-gallery"

const facultyImages = [
  {
    src: "/images/faculty/facilities-computer-lab-01.jpg?height=600&width=800",
    alt: "Faculty meeting",
    caption: "Faculty collaboration session",
  },
  {
    src: "/images/faculty/facilities-computer-lab-02.jpg?height=600&width=800",
    alt: "Professor teaching",
    caption: "Interactive teaching methods",
  },
  {
    src: "/images/faculty/facilities-computer-lab-03.jpg?height=600&width=800",
    alt: "Research laboratory",
    caption: "Advanced research facilities",
  },
  {
    src: "/images/faculty/facilities-science-laboratory-01.jpg?height=600&width=800",
    alt: "Faculty awards ceremony",
    caption: "Recognizing academic excellence",
  },
  {
    src: "/images/faculty/facilities-science-laboratory-02.jpg?height=600&width=800",
    alt: "International conference",
    caption: "Faculty presenting at international conferences",
  },
  {
    src: "/images/faculty/facilities-library-interior-01.jpg?height=600&width=800",
    alt: "Student mentoring",
    caption: "Faculty mentoring graduate students",
  },
]

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Faculty and Staff</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Meet the dedicated professionals who make our university a center of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Academic Community</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Turkish Cheng Zhang Songting Industrial College is home to a diverse and accomplished faculty dedicated
                to excellence in teaching, research, and service.
              </p>
              <div className="mt-8 max-w-xl space-y-8 text-base leading-7 text-muted-foreground">
                <p>
                  Our university boasts a total of 2,400 faculty and staff members, including 1,835 full-time teachers.
                  Among our distinguished faculty are 200 professors and 441 associate professors, bringing a wealth of
                  expertise and experience to our academic programs.
                </p>
                <p>
                  We take pride in our 552 graduate supervisors who mentor and guide the next generation of scholars and
                  professionals. Our faculty members are not only dedicated educators but also active researchers,
                  contributing to advancements in their respective fields through innovative research and scholarly
                  publications.
                </p>
                <p>
                  Our discipline system emphasizes engineering as the core, with coordinated development in science,
                  management, literature, economics, law, agriculture, education, and art. This interdisciplinary
                  approach allows us to provide a comprehensive education that prepares students for the complex
                  challenges of the modern world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Faculty members in discussion"
                width={800}
                height={600}
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professor teaching in classroom"
                width={800}
                height={600}
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Faculty in Action</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our faculty members are dedicated to excellence in teaching, research, and service
            </p>
          </div>
          <div className="mt-16">
            <ImageGallery images={facultyImages} />
          </div>
        </div>
      </section>

      {/* Faculty Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Faculty by the Numbers</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Our academic community in figures</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <StatsCard title="Total Faculty and Staff" value="2,400" />
            <StatsCard title="Full-time Teachers" value="1,835" />
            <StatsCard title="Professors" value="200" />
            <StatsCard title="Associate Professors" value="441" />
            <StatsCard title="Graduate Supervisors" value="552" />
            <StatsCard title="Published Research Papers" value="15,140" />
            <StatsCard title="Papers Indexed by SCI, EI, and ISTP" value="1,823" />
            <StatsCard title="Teaching Colleges" value="10" />
          </div>
        </div>
      </section>

      {/* Teaching Colleges Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Teaching Colleges</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our university is organized into 10 teaching colleges, each dedicated to excellence in their respective
              fields.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="arts">Arts</TabsTrigger>
                <TabsTrigger value="other">Other Colleges</TabsTrigger>
              </TabsList>
              <TabsContent value="engineering" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Engineering</CardTitle>
                      <CardDescription>Established 1985</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Engineering is our flagship college, focusing on mechanical, electrical, civil,
                        and packaging engineering disciplines.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">320</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">45</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Centers</p>
                          <p className="text-muted-foreground">12</p>
                        </div>
                        <div>
                          <p className="font-medium">Laboratories</p>
                          <p className="text-muted-foreground">28</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Materials Science</CardTitle>
                      <CardDescription>Established 1992</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Materials Science specializes in the study of materials properties, processing,
                        and applications, with a focus on new energy materials and devices.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">180</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">22</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Centers</p>
                          <p className="text-muted-foreground">8</p>
                        </div>
                        <div>
                          <p className="font-medium">Laboratories</p>
                          <p className="text-muted-foreground">15</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="science" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Science</CardTitle>
                      <CardDescription>Established 1985</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Science is dedicated to mathematics, physics, chemistry, and biology, providing a
                        strong foundation for scientific research and applications.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">210</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">28</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Centers</p>
                          <p className="text-muted-foreground">9</p>
                        </div>
                        <div>
                          <p className="font-medium">Laboratories</p>
                          <p className="text-muted-foreground">22</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="management" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Management</CardTitle>
                      <CardDescription>Established 1988</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Management specializes in business administration, international economics and
                        trade, and management sciences.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">175</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">18</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Centers</p>
                          <p className="text-muted-foreground">6</p>
                        </div>
                        <div>
                          <p className="font-medium">Case Study Rooms</p>
                          <p className="text-muted-foreground">12</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Economics</CardTitle>
                      <CardDescription>Established 1990</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Economics focuses on economic theory, international trade, and finance, preparing
                        students for careers in global business.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">150</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">16</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Centers</p>
                          <p className="text-muted-foreground">5</p>
                        </div>
                        <div>
                          <p className="font-medium">International Partners</p>
                          <p className="text-muted-foreground">18</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="arts" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Arts</CardTitle>
                      <CardDescription>Established 1995</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Arts offers programs in visual arts, design, and digital media, fostering
                        creativity and innovation.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">160</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">15</p>
                        </div>
                        <div>
                          <p className="font-medium">Studios</p>
                          <p className="text-muted-foreground">20</p>
                        </div>
                        <div>
                          <p className="font-medium">Exhibition Spaces</p>
                          <p className="text-muted-foreground">8</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Digital Media</CardTitle>
                      <CardDescription>Established 2005</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Digital Media focuses on digital media technology and applications, preparing
                        students for careers in the rapidly evolving digital landscape.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">140</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">12</p>
                        </div>
                        <div>
                          <p className="font-medium">Media Labs</p>
                          <p className="text-muted-foreground">15</p>
                        </div>
                        <div>
                          <p className="font-medium">Industry Partners</p>
                          <p className="text-muted-foreground">25</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Law</CardTitle>
                      <CardDescription>Established 1998</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Law provides education in legal studies and jurisprudence, preparing students for
                        careers in law and related fields.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">120</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">14</p>
                        </div>
                        <div>
                          <p className="font-medium">Moot Court Rooms</p>
                          <p className="text-muted-foreground">4</p>
                        </div>
                        <div>
                          <p className="font-medium">Legal Clinics</p>
                          <p className="text-muted-foreground">6</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>College of Education</CardTitle>
                      <CardDescription>Established 1992</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The College of Education trains future educators and educational researchers, with a focus on
                        innovative teaching methods and educational theory.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p className="text-muted-foreground">130</p>
                        </div>
                        <div>
                          <p className="font-medium">Professors</p>
                          <p className="text-muted-foreground">15</p>
                        </div>
                        <div>
                          <p className="font-medium">Teaching Labs</p>
                          <p className="text-muted-foreground">10</p>
                        </div>
                        <div>
                          <p className="font-medium">Partner Schools</p>
                          <p className="text-muted-foreground">30</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Admissions</h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join our diverse academic community and embark on a journey of discovery and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Admission Categories</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer various admission pathways to accommodate different backgrounds and talents.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>General Admission</CardTitle>
                <CardDescription>Standard entry pathway for most students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Based on academic performance and entrance examination results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Open to all qualified applicants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Comprehensive evaluation of academic potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Arts Admission</CardTitle>
                <CardDescription>For students with artistic talents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Portfolio submission required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Practical examination in relevant artistic field</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Interview with faculty members</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sports Admission</CardTitle>
                <CardDescription>For athletically talented students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Athletic performance evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Sports achievements and records considered</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Physical fitness assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ankara High School Teachers</CardTitle>
                <CardDescription>Special pathway for teaching professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>For current high school teachers in Ankara</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Professional experience evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Teaching qualification assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>High-Level Sports Teams</CardTitle>
                <CardDescription>For elite athletes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>National or international level sports achievements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Recommendation from sports associations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Commitment to university sports representation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Students</CardTitle>
                <CardDescription>For overseas applicants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>For overseas Chinese, Hong Kong, Macao, and Taiwan students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>International qualification evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Language proficiency requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Available Programs</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our diverse range of academic programs designed to prepare you for success.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="arts">Arts & Design</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
              <TabsContent value="engineering" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Packaging Engineering"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Packaging Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Study the design, development, and production of packaging solutions for various industries,
                        with a focus on sustainability and innovation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Materials Science and Engineering"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Materials Science and Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Explore the properties, processing, and applications of materials, from traditional to
                        cutting-edge, with emphasis on industrial applications.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Mechanical Design, Manufacturing, and Automation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Mechanical Design, Manufacturing, and Automation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Learn about the design, production, and automation of mechanical systems, preparing for careers
                        in manufacturing and industrial automation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="arts" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Visual Communication Design"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Visual Communication Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Develop skills in visual storytelling, graphic design, and communication strategies for various
                        media platforms.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Digital Media Art"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Digital Media Art</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Combine artistic creativity with digital technologies to create innovative visual and
                        interactive experiences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="business" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="International Economics and Trade"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>International Economics and Trade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Study global economic systems, international trade policies, and cross-border business
                        operations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="technology" className="mt-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Digital Media Technology"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Digital Media Technology</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Focus on the technical aspects of digital media, including software development, multimedia
                        systems, and interactive technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="New Energy Materials and Devices"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>New Energy Materials and Devices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Research and develop materials and technologies for renewable energy generation, storage, and
                        utilization.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Application Process</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Follow these steps to apply to Turkish Cheng Zhang Songting Industrial College
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <ol className="relative border-l border-muted-foreground/20">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                  <span className="text-primary-foreground font-bold">1</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">Review Admission Requirements</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  Check the specific requirements for your chosen program and admission category.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                  <span className="text-primary-foreground font-bold">2</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">Prepare Required Documents</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  Gather academic transcripts, identification documents, recommendation letters, and any
                  category-specific materials.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                  <span className="text-primary-foreground font-bold">3</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">Complete Online Application</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  Fill out the application form on our admissions portal, providing all required information.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                  <span className="text-primary-foreground font-bold">4</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">Pay Application Fee</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  Submit the non-refundable application fee to process your application.
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
                  <span className="text-primary-foreground font-bold">5</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">Await Decision</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  Applications are reviewed by the admissions committee, and decisions are typically communicated within
                  4-6 weeks.
                </p>
              </li>
            </ol>
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="#" className="flex items-center gap-x-2">
                Start Your Application
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Take a Virtual Tour</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our campus facilities from the comfort of your home
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Main Campus Tour" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Main Campus
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Engineering Facilities Tour"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Engineering Facilities
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Student Life Tour"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Student Life
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

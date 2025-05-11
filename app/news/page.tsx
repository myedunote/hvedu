import NewsCard from "@/components/news-card"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">University News</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Stay updated with the latest happenings at Turkish Cheng Zhang Songting Industrial College
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <NewsCard
              title="New Research Partnership with University of Arizona"
              date="May 10, 2025"
              description="Our university has established a new research partnership with the University of Arizona focusing on sustainable engineering solutions. This collaboration will enable joint research projects, faculty exchanges, and student mobility opportunities."
              href="/news/1"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="Student Team Wins International Engineering Competition"
              date="May 5, 2025"
              description="A team of our mechanical engineering students has won first place at the International Engineering Design Competition held in Berlin. Their innovative design for a sustainable water filtration system impressed the judges and earned them the top prize."
              href="/news/2"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="New Digital Media Arts Center Opening"
              date="April 28, 2025"
              description="The university is proud to announce the opening of our new state-of-the-art Digital Media Arts Center, enhancing our offerings in digital media technology and art. The center features cutting-edge equipment and studios for students and faculty."
              href="/news/3"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="Faculty Member Receives National Research Award"
              date="April 15, 2025"
              description="Professor Mehmet Yilmaz from our Materials Science Department has been awarded the National Research Excellence Award for his groundbreaking work on sustainable packaging materials. This prestigious recognition highlights our university's commitment to innovation."
              href="/news/4"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="International Conference on Packaging Innovation"
              date="April 3, 2025"
              description="Our university will host the International Conference on Packaging Innovation next month, bringing together researchers, industry professionals, and students from around the world to discuss the latest developments in packaging technology and sustainability."
              href="/news/5"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="New Scholarship Program for International Students"
              date="March 22, 2025"
              description="We are pleased to announce a new scholarship program specifically designed for international students. The program aims to attract talented students from diverse backgrounds and provide them with financial support for their studies at our university."
              href="/news/6"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="University Library Expands Digital Collection"
              date="March 10, 2025"
              description="Our university library has significantly expanded its digital collection, adding over 50,000 new e-books and digital resources. This expansion enhances our academic resources and provides students and faculty with greater access to research materials."
              href="/news/7"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="New Exchange Program with University of Derby"
              date="February 28, 2025"
              description="We have established a new student exchange program with the University of Derby in the United Kingdom. This partnership will allow students from both institutions to experience international education and cultural exchange."
              href="/news/8"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <NewsCard
              title="Campus Sustainability Initiative Launched"
              date="February 15, 2025"
              description="The university has launched a comprehensive sustainability initiative aimed at reducing our carbon footprint and promoting environmental responsibility. The initiative includes energy efficiency measures, waste reduction programs, and sustainability education."
              href="/news/9"
              imageSrc="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  date: string
  description: string
  href: string
  imageSrc: string
}

export default function NewsCard({ title, date, description, href, imageSrc }: NewsCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-0 shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-col flex-1 p-6">
        <div className="text-sm text-muted-foreground">{date}</div>
        <h3 className="mt-3 text-xl font-semibold leading-6">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Link href={href} className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

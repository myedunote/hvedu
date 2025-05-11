"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images?: {
    src: string
    alt: string
    caption?: string
  }[]
  className?: string
}

export default function ImageGallery({ images: providedImages, className = "" }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  // Generate random campus landscape images if none provided
  const defaultImages = [
    // Main Buildings
    {
      src: "/placeholder.svg?height=600&width=800&text=Campus+Main+Building",
      alt: "Campus Main Building",
      caption: "Main Administration Building",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=University+Library",
      alt: "University Library",
      caption: "Central Library",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Engineering+Building",
      alt: "Engineering Building",
      caption: "College of Engineering",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Arts+Building",
      alt: "Arts Building",
      caption: "College of Arts and Design",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Science+Building",
      alt: "Science Building",
      caption: "Science and Research Building",
    },

    // Outdoor Spaces
    {
      src: "/placeholder.svg?height=600&width=800&text=Campus+Garden",
      alt: "Campus Garden",
      caption: "Beautiful Campus Garden",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Campus+Lake",
      alt: "Campus Lake",
      caption: "Scenic Campus Lake",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Central+Square",
      alt: "Central Square",
      caption: "Campus Central Square",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Botanical+Garden",
      alt: "Botanical Garden",
      caption: "University Botanical Garden",
    },

    // Sports Facilities
    {
      src: "/placeholder.svg?height=600&width=800&text=Sports+Field",
      alt: "Sports Field",
      caption: "University Sports Field",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Gymnasium",
      alt: "Gymnasium",
      caption: "Modern Gymnasium",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Swimming+Pool",
      alt: "Swimming Pool",
      caption: "Olympic-sized Swimming Pool",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Tennis+Courts",
      alt: "Tennis Courts",
      caption: "Campus Tennis Courts",
    },

    // Student Life
    {
      src: "/placeholder.svg?height=600&width=800&text=Student+Center",
      alt: "Student Center",
      caption: "Student Activity Center",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Dormitories",
      alt: "Student Dormitories",
      caption: "Student Residence Halls",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Cafeteria",
      alt: "University Cafeteria",
      caption: "Campus Dining Hall",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Student+Lounge",
      alt: "Student Lounge",
      caption: "Relaxation Area for Students",
    },

    // Research Facilities
    {
      src: "/placeholder.svg?height=600&width=800&text=Research+Labs",
      alt: "Research Laboratories",
      caption: "Advanced Research Laboratories",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Innovation+Center",
      alt: "Innovation Center",
      caption: "Center for Innovation and Entrepreneurship",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Technology+Hub",
      alt: "Technology Hub",
      caption: "Campus Technology Hub",
    },

    // Seasonal Views
    {
      src: "/placeholder.svg?height=600&width=800&text=Spring+Campus",
      alt: "Spring Campus",
      caption: "Campus in Spring Bloom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Autumn+Campus",
      alt: "Autumn Campus",
      caption: "Beautiful Fall Colors on Campus",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Winter+Campus",
      alt: "Winter Campus",
      caption: "Snow-covered Campus",
    },

    // Special Views
    {
      src: "/placeholder.svg?height=600&width=800&text=Aerial+View",
      alt: "Aerial View",
      caption: "Aerial View of the Entire Campus",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Night+View",
      alt: "Night View",
      caption: "Campus at Night",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Historical+Building",
      alt: "Historical Building",
      caption: "Historic Campus Building",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Campus+Entrance",
      alt: "Campus Entrance",
      caption: "Main Entrance Gate",
    },
  ]

  // Use provided images or default random campus images
  const images = providedImages || defaultImages

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setCurrentImageIndex(null)
  }

  const goToPrevious = () => {
    if (currentImageIndex === null) return
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (currentImageIndex === null) return
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={images[currentImageIndex].src || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            {images[currentImageIndex].caption && (
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-white text-center">
                {images[currentImageIndex].caption}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  )
}

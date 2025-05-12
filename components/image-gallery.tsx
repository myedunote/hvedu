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
      src: "/images/placeholder.png",
      alt: "Campus Main Building",
      caption: "Main Administration Building",
    },
    {
      src: "/images/placeholder.png",
      alt: "University Library",
      caption: "Central Library",
    },
    {
      src: "/images/placeholder.png",
      alt: "Engineering Building",
      caption: "College of Engineering",
    },
    {
      src: "/images/placeholder.png",
      alt: "Arts Building",
      caption: "College of Arts and Design",
    },
    {
      src: "/images/placeholder.png",
      alt: "Science Building",
      caption: "Science and Research Building",
    },

    // Outdoor Spaces
    {
      src: "/images/placeholder.png",
      alt: "Campus Garden",
      caption: "Beautiful Campus Garden",
    },
    {
      src: "/images/placeholder.png",
      alt: "Campus Lake",
      caption: "Scenic Campus Lake",
    },
    {
      src: "/images/placeholder.png",
      alt: "Central Square",
      caption: "Campus Central Square",
    },
    {
      src: "/images/placeholder.png",
      alt: "Botanical Garden",
      caption: "University Botanical Garden",
    },

    // Sports Facilities
    {
      src: "/images/placeholder.png",
      alt: "Sports Field",
      caption: "University Sports Field",
    },
    {
      src: "/images/placeholder.png",
      alt: "Gymnasium",
      caption: "Modern Gymnasium",
    },
    {
      src: "/images/placeholder.png",
      alt: "Swimming Pool",
      caption: "Olympic-sized Swimming Pool",
    },
    {
      src: "/images/placeholder.png",
      alt: "Tennis Courts",
      caption: "Campus Tennis Courts",
    },

    // Student Life
    {
      src: "/images/placeholder.png",
      alt: "Student Center",
      caption: "Student Activity Center",
    },
    {
      src: "/images/placeholder.png",
      alt: "Student Dormitories",
      caption: "Student Residence Halls",
    },
    {
      src: "/images/placeholder.png",
      alt: "University Cafeteria",
      caption: "Campus Dining Hall",
    },
    {
      src: "/images/placeholder.png",
      alt: "Student Lounge",
      caption: "Relaxation Area for Students",
    },

    // Research Facilities
    {
      src: "/images/placeholder.png",
      alt: "Research Laboratories",
      caption: "Advanced Research Laboratories",
    },
    {
      src: "/images/placeholder.png",
      alt: "Innovation Center",
      caption: "Center for Innovation and Entrepreneurship",
    },
    {
      src: "/images/placeholder.png",
      alt: "Technology Hub",
      caption: "Campus Technology Hub",
    },

    // Seasonal Views
    {
      src: "/images/placeholder.png",
      alt: "Spring Campus",
      caption: "Campus in Spring Bloom",
    },
    {
      src: "/images/placeholder.png",
      alt: "Autumn Campus",
      caption: "Beautiful Fall Colors on Campus",
    },
    {
      src: "/images/placeholder.png",
      alt: "Winter Campus",
      caption: "Snow-covered Campus",
    },

    // Special Views
    {
      src: "/images/placeholder.png",
      alt: "Aerial View",
      caption: "Aerial View of the Entire Campus",
    },
    {
      src: "/images/placeholder.png",
      alt: "Night View",
      caption: "Campus at Night",
    },
    {
      src: "/images/placeholder.png",
      alt: "Historical Building",
      caption: "Historic Campus Building",
    },
    {
      src: "/images/placeholder.png",
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
              src={image.src || "/images/placeholder.png"}
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
              src={images[currentImageIndex].src || "/images/placeholder.png"}
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

import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 w-12 relative border rounded-md overflow-hidden focus:border-black"
              onClick={() => {
                handleScrollTo(image.id)
              }}
            >
              <span className="sr-only">Go to image {index + 1}</span>
              <Image
                src={image.url}
                className="absolute inset-0"
                alt="Thumbnail"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </button>
          )
        })}
      </div>
      <div className="flex flex-col flex-1 items-center small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <div
              ref={(image) => imageRefs.current.push(image)}
              key={image.id}
              className="relative aspect-[29/34] w-full max-w-2xl"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 rounded-xl"
                alt={`Product image ${index + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery

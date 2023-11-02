import React from "react"
import Image from "next/image"
import { Text } from "@medusajs/ui"
import { Avatar } from "@medusajs/ui"
import StarRating from "./star-rating"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  title: string
  content: string
  images: string[]
}

interface ProductReviewProps {
  reviews: Review[]
}

const ProductReview: React.FC<ProductReviewProps> = ({ reviews }) => {
  return (
    <>
      {reviews?.map((review) => (
        <div
          key={review.id}
          className="border border-solid border-gray-200 p-2 rounded-xl mb-3"
        >
          <div className="flex gap-3">
            <Avatar
              src="https://avatars.githubusercontent.com/u/10656202?v=4"
              fallback="M"
              size="large"
            />
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <Text size="xlarge" weight="plus">
                  {review.author}
                </Text>
                <div className="flex gap-1">
                  <StarRating rating={review.rating} />
                </div>
                <Text>Reviewed on {review.date}</Text>
              </div>

              <div className="flex flex-col gap-1">
                <Text size="large" weight="plus">
                  {review.title}
                </Text>
                <Text>{review.content}</Text>
              </div>

              <div className="flex gap-2">
                {review.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Image Description"
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductReview

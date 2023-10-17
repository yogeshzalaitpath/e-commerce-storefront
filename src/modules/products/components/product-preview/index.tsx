import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Badge } from "@medusajs/ui"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isPopular,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div>
        <Thumbnail thumbnail={thumbnail} size="full" />
        <div className="flex justify-between items-start mt-2">
          <div className="text-base-regular">
            <span>{title}</span>
            <div className="flex items-center gap-x-2 mt-1">
              {price ? (
                <>
                  {price.price_type === "sale" && (
                    <span className="line-through text-gray-500">
                      {price.original_price}
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
          {isPopular && <Badge className="bg-black text-white">Popular</Badge>}
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview

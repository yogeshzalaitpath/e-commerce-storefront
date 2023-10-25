import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Badge } from "@medusajs/ui"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo } from "react"
import { Product } from "types/medusa"

type ProductActionsProps = {
  product: PricedProduct & {
    is_popular?:boolean
  }
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  console.log("🚀 ~ file: index.tsx:17 ~ product:", product)
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl-regular">{product.title}</h3>
        {product.is_popular && (
          <Badge className="bg-black text-white">Popular</Badge>
        )}

        {/* {product.collection && (
          <Link
            href={`/collections/${product?.collection?.handle}`}
            className="text-small-regular text-gray-700"
          >
            
          </Link>
        )} */}
      </div>

      <p className="text-base-regular">{product.description}</p>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {(product.options || []).map((option) => {
            const defaultSelectedOption =
              options[option.id] || option.values[0].value
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={defaultSelectedOption}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Original: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Button onClick={addToCart}>
        {!inStock ? "Out of stock" : "Add to cart"}
      </Button>
    </div>
  )
}

export default ProductActions

import React from "react"
import { Text } from "@medusajs/ui"
import { StarIcon } from "@heroicons/react/24/solid"

interface ProgressbarProps {
  number: number
  value: string
  total: string
}

const Progressbar: React.FC<ProgressbarProps> = ({ number, value, total }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <Text>{number}</Text>
        <StarIcon
          className={"w-5 h-5 text-yellow-500"}
        />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className="bg-green-600 h-2 rounded-full dark:bg-green-500"
          style={{ width: value }}
        ></div>
      </div>
      <div>
        <Text>{total}</Text>
      </div>
    </div>
  )
}

export default Progressbar

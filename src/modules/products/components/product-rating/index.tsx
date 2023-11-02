import React, { useState } from "react"
import Progressbar from "./progressbar"
import { Text } from "@medusajs/ui"
import { StarIcon } from "@heroicons/react/24/solid"
import Modal from "@modules/common/components/modal"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"

const ProductRating = () => {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false)

  const openRatingModal = () => {
    setIsRatingModalOpen(true)
  }

  const closeRatingModal = () => {
    setIsRatingModalOpen(false)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div>
            <StarIcon className={"w-5 h-5 text-yellow-500"} />
          </div>
          <div>
            <Text>4.2 out of 5</Text>
            <Text>Based on 23,122 ratings</Text>
          </div>
        </div>
        <div>
          <Button variant="primary" onClick={openRatingModal}>
            Add Rating
          </Button>
          <Modal
            isOpen={isRatingModalOpen}
            close={closeRatingModal}
            size="small"
          >
            <Modal.Title>Add Product Review</Modal.Title>
            <Modal.Body>
            <div className="grid grid-cols-1 gap-y-2">
              <Input label="Title" name={""} />
              <Input label="Description" name={""} />
            </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Progressbar number={5} value="40%" total="4000" />
        <Progressbar number={4} value="30%" total="3000" />
        <Progressbar number={3} value="10%" total="1000" />
        <Progressbar number={2} value="5%" total="500" />
        <Progressbar number={1} value="15%" total="1500" />
      </div>
    </div>
  )
}

export default ProductRating

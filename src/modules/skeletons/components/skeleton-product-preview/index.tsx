const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[29/34] w-full bg-gray-100 rounded-xl"></div>
      <div className="text-base-regular mt-2">
        <div className="flex justify-between">
          <div className="w-2/4 h-6 bg-gray-100 rounded-md"></div>
          <div className="w-1/4 h-6 bg-gray-100 rounded-md"></div>
        </div>
        <div className="w-2/5 h-6 bg-gray-100 mt-2  rounded-md"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview


const HomeShimmerUI = () => {
  return (
    <div className="p-4 border border-gray-300 rounded animate-pulse">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-300 rounded"></div>

      {/* Content Placeholder */}
      <div className="p-3 mt-2 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>

        <div className="mt-2 flex justify-between text-xs">
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )
}

export default HomeShimmerUI
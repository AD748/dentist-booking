export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white p-4 rounded-xl shadow">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 mt-3 w-3/4"></div>
      <div className="h-3 bg-gray-300 mt-2 w-1/2"></div>
      <div className="h-8 bg-gray-300 mt-4"></div>
    </div>
  );
}
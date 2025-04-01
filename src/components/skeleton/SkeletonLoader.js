export default function SkeletonLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="animate-bounce text-center">
        <div className="w-30 md:w-40 h-30 md:h-40 bg-gray-300 rounded-full mb-4"></div>
      </div>
    </div>
  );
}

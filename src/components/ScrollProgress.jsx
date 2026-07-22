import { useScrollProgress } from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 !z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-700 to-blue-950 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

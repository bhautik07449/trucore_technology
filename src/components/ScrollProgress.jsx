import { useScrollProgress } from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-gray-100 !z-[9999]">
      <div
        className="h-full transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #1e68ff 0%, #0d1b3e 100%)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;


import React, { Suspense, lazy } from 'react';

// Explicitly handle the dynamic import to ensure the default export is correctly passed to React.lazy
const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => ({ default: module.default }))
);

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  // Ensure we provide a solid fallback and handle the case where className might be undefined
  const safeClassName = className || "";

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-gray-900/10 text-white ${safeClassName}`}>
          <div className="flex flex-col items-center gap-4">
            <svg className="animate-spin h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400/50">Initializing Whobee...</span>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={safeClassName} 
      />
    </Suspense>
  );
}

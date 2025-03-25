import React, { useState, useEffect, Suspense } from "react";
import { SplashScreen } from "@/components/splash-screen";
import Landing from './landing/index'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={
          <div className="landing-loader"></div>}
        >
          <Landing />
        </Suspense>
      )}
    </>
  );
}
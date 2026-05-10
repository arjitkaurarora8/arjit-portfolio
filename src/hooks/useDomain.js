import { useState, useEffect } from "react";

export function useDomain() {
  const [isArjitXyz, setIsArjitXyz] = useState(false);

  useEffect(() => {
    setIsArjitXyz(!window.location.hostname.endsWith("arjitkaurarora.com"));
  }, []);

  return isArjitXyz;
}

import { useState, useEffect } from "react";

export function useDomain() {
  const [isArjitXyz, setIsArjitXyz] = useState(false);

  useEffect(() => {
    setIsArjitXyz(window.location.hostname !== "arjitkaurarora.com");
  }, []);

  return isArjitXyz;
}

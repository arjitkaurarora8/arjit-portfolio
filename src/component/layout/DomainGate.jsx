"use client";

import { useDomain } from "@/hooks/useDomain";

export default function DomainGate({ children }) {
  const isArjitXyz = useDomain();
  return isArjitXyz ? children : null;
}

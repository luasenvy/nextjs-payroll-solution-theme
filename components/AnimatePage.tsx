"use client";

import { useEffect } from "react";
import { useAnimateReady, useScrollAnimate } from "@/hooks/use-animate";

export function AnimatePage() {
  useEffect(() => useAnimateReady(), []);
  useEffect(() => useScrollAnimate(), []);

  return null;
}

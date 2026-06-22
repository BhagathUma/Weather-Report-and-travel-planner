"use client";

import { useEffect, useState } from "react";

import { loadingMessages } from "@/lib/constants/loadingMessages";

export function useLoadingSequence(
  active: boolean
) {
  const [messageIndex, setMessageIndex] =
    useState(0);

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    if (!active) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) =>
        prev >= 95 ? prev : prev + 5
      );
    }, 300);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) =>
        (prev + 1) % loadingMessages.length
      );
    }, 1200);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, [active]);

  return {
    progress,
    message:
      loadingMessages[messageIndex],
  };
}
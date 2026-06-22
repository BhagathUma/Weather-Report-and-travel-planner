"use client";

import { useEffect, useState } from "react";

import { aiLoadingMessages }
from "@/lib/constants/aiLoadingMessages";

export function useLoadingSequence(
  active: boolean
) {

  const [progress,
    setProgress] =
    useState(0);

  const [index,
    setIndex] =
    useState(0);

  useEffect(() => {

    if (!active) return;

    const progressTimer =
      setInterval(() => {

        setProgress(
          (prev) =>
            prev >= 95
              ? prev
              : prev + 4
        );

      }, 300);

    const messageTimer =
      setInterval(() => {

        setIndex(
          (prev) =>
            (
              prev + 1
            ) %
            aiLoadingMessages.length
        );

      }, 1500);

    return () => {

      clearInterval(
        progressTimer
      );

      clearInterval(
        messageTimer
      );

    };

  }, [active]);

  return {
    progress,

    message:
      aiLoadingMessages[index]
  };
}
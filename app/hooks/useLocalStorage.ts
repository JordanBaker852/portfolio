"use client"

import { useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    const stored = localStorage.getItem(key) as T
    return stored ?? initialValue
  });

  return [value, setValue] as const
};
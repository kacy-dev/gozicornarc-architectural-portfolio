// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md shadow-md rounded-full text-black hover:bg-gray-100 transition block lg:hidden"
    >
      <ArrowLeftCircle className="w-5 h-5" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}

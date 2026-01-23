// app/admin/page.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRoot() {
  const router = useRouter();

  useEffect(() => {
    // Redirect root admin path to dashboard
    router.replace("/admin/dashboard");
  }, [router]);

  return null; // or a loading spinner
}

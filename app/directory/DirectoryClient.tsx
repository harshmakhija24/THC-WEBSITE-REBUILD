"use client";

import { useSearchParams } from "next/navigation";
import DirectoryPreview from "@/components/DirectoryPreview";
import type { DirectoryProfile } from "@/lib/types";

type DirectoryClientProps = {
  profiles: DirectoryProfile[];
};

export default function DirectoryClient({ profiles }: DirectoryClientProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";

  return <DirectoryPreview profiles={profiles} initialQuery={query} />;
}

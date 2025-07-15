"use client";

import { SiX } from "@icons-pack/react-simple-icons";
import { Link as LinkIcon } from "lucide-react";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface ShareArticleProps {
  title: string;
}

export function ShareArticle2({ title }: ShareArticleProps) {
  const pathname = usePathname();

  const shareUrl = useMemo(
    () => "undefined" !== typeof window && pathname && new URL(pathname, window.origin).toString(),
    [pathname],
  );

  return (
    <div className="mt-12 border-gray-200 border-t pt-8 lg:hidden">
      <h3 className="mb-4 font-semibold text-lg">Share Article</h3>
      <div className="flex space-x-4" role="group" aria-label="Share article">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          aria-label="Share on Twitter"
        >
          <SiX className="size-6" aria-hidden="true" />
        </a>
        <button
          className="rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          id="copy-link-mobile"
          aria-label="Copy link to article"
        >
          <LinkIcon className="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

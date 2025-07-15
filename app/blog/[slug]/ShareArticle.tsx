"use client";

import { SiX } from "@icons-pack/react-simple-icons";
import { Link as LinkIcon } from "lucide-react";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export interface ShareArticleProps {
  title: string;
}

export function ShareArticle({ title }: ShareArticleProps) {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState<string>("");
  useEffect(() => {
    setShareUrl(new URL(pathname, window.origin).toString());
  }, []);

  return (
    <div className="mt-8 hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:block">
      <h3 className="mb-4 font-semibold text-lg">Share Article</h3>
      <div className="flex flex-col space-y-4">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-smp-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          aria-label="Share on Twitter"
        >
          <SiX className="mr-3 size-5" aria-hidden="true" />
          <span className="text-sm">Share on Twitter</span>
        </a>
        <button
          id="copy-link"
          className="flex items-center rounded-smp-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          aria-label="Copy link to article"
        >
          <LinkIcon className="mr-3 size-5" aria-hidden="true" />
          <span className="text-sm">Copy Link</span>
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export function PostApp() {
  useEffect(() => {
    const progressBar = document.getElementById("reading-progress");
    const article = document.querySelector("article");

    if (progressBar && article) {
      const updateProgress = () => {
        const scrolled = window.scrollY;
        const articleHeight = article.clientHeight - window.innerHeight;
        const progress = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute("aria-valuenow", progress.toString());
      };

      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress(); // Initial call
    }

    // Copy Link Functionality
    const copyLink = document.getElementById("copy-link");
    const copyLinkMobile = document.getElementById("copy-link-mobile");
    const url = window.location.href;

    [copyLink, copyLinkMobile].forEach((button) => {
      if (button) {
        button.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(url);
            const spanElement = button.querySelector("span");
            const icon = button.querySelector("svg");
            const originalText = spanElement?.textContent || "Copy Link";

            if (icon) {
              icon.style.color = "#7928CA";
            }

            if (spanElement) {
              spanElement.textContent = "Copied!";
              // Announce to screen readers
              const announcement = document.createElement("div");
              announcement.setAttribute("aria-live", "polite");
              announcement.setAttribute("aria-atomic", "true");
              announcement.className = "sr-only";
              announcement.textContent = "Link copied to clipboard";
              document.body.appendChild(announcement);

              setTimeout(() => {
                spanElement.textContent = originalText;
                if (icon) {
                  icon.style.color = "";
                }
                document.body.removeChild(announcement);
              }, 2000);
            }
          } catch (err) {
            console.error("Failed to copy URL:", err);
          }
        });
      }
    });
  }, []);

  return null;
}

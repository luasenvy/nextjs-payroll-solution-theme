"use client";

import { useEffect } from "react";

export function BlogApp() {
  useEffect(() => {
    // Tag filtering functionality
    const filterTags = document.querySelectorAll<HTMLButtonElement>(".filter-tag");
    const postCards = document.querySelectorAll<HTMLElement>(".blog-post-card");
    const noResults = document.getElementById("no-results");

    filterTags.forEach((tag) => {
      tag.addEventListener("click", () => {
        const selectedTag = tag.getAttribute("data-tag");

        // Update active state
        filterTags.forEach((t) => {
          t.classList.remove("bg-payflo-purple", "text-white");
          t.classList.add("bg-white", "text-gray-700");
          t.setAttribute("aria-pressed", "false");
        });

        tag.classList.remove("bg-white", "text-gray-700");
        tag.classList.add("bg-payflo-purple", "text-white");
        tag.setAttribute("aria-pressed", "true");

        // Filter posts
        let visibleCount = 0;

        postCards.forEach((card) => {
          const cardTags = card.getAttribute("data-tags")?.split(",") || [];

          if (selectedTag && (selectedTag === "all" || cardTags.includes(selectedTag))) {
            card.style.display = "block";
            card.style.animation = "fadeIn 0.3s ease-in-out";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        // Show/hide no results message
        if (noResults) {
          if (visibleCount === 0) {
            noResults.classList.remove("hidden");
          } else {
            noResults.classList.add("hidden");
          }
        }

        // Announce to screen readers
        const announcement = document.createElement("div");
        announcement.setAttribute("aria-live", "polite");
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = `Showing ${visibleCount} article${visibleCount !== 1 ? "s" : ""} for ${selectedTag === "all" ? "all topics" : selectedTag}`;
        document.body.appendChild(announcement);

        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      });
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('form[role="form"]');
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
        const submitButton = newsletterForm.querySelector(
          'button[type="submit"]',
        ) as HTMLButtonElement;

        if (emailInput && submitButton) {
          const originalText = submitButton.textContent;
          submitButton.textContent = "Subscribing...";
          submitButton.disabled = true;

          // Simulate API call (replace with actual implementation)
          setTimeout(() => {
            submitButton.textContent = "Subscribed!";
            emailInput.value = "";

            // Announce success to screen readers
            const announcement = document.createElement("div");
            announcement.setAttribute("aria-live", "polite");
            announcement.setAttribute("aria-atomic", "true");
            announcement.className = "sr-only";
            announcement.textContent = "Successfully subscribed to newsletter";
            document.body.appendChild(announcement);

            setTimeout(() => {
              submitButton.textContent = originalText;
              submitButton.disabled = false;
              if (announcement.parentNode) {
                document.body.removeChild(announcement);
              }
            }, 2000);
          }, 1000);
        }
      });
    }
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export function BookDemoApp() {
  useEffect(() => {
    const form = document.getElementById("demo-form") as HTMLFormElement | null;
    const steps = document.querySelectorAll<HTMLElement>(".step-content");
    const progressSteps = document.querySelectorAll<HTMLElement>("#progress-steps > div");
    const prevButton = document.getElementById("prev-step") as HTMLButtonElement | null;
    const nextButton = document.getElementById("next-step") as HTMLButtonElement | null;
    const submitButton = document.getElementById("submit-form") as HTMLButtonElement | null;
    let currentStep = 1;

    function updateSteps() {
      if (!prevButton || !nextButton || !submitButton) return;

      steps.forEach((step, index) => {
        if (index + 1 === currentStep) {
          step.classList.remove("hidden");
        } else {
          step.classList.add("hidden");
        }
      });

      progressSteps.forEach((step, index) => {
        const stepCircle = step.querySelector("div");
        if (!stepCircle) return;

        if (index + 1 === currentStep) {
          step.classList.add("bg-payflo-purple/5");
          stepCircle.classList.remove("bg-gray-200", "text-gray-600");
          stepCircle.classList.add("bg-payflo-purple", "text-white");
        } else if (index + 1 < currentStep) {
          step.classList.add("bg-payflo-purple/5");
          stepCircle.classList.remove("bg-gray-200", "text-gray-600");
          stepCircle.classList.add("bg-payflo-purple", "text-white");
        } else {
          step.classList.remove("bg-payflo-purple/5");
          stepCircle.classList.add("bg-gray-200", "text-gray-600");
          stepCircle.classList.remove("bg-payflo-purple", "text-white");
        }
      });

      prevButton.style.display = currentStep === 1 ? "none" : "block";
      nextButton.style.display = currentStep === 3 ? "none" : "block";
      submitButton.style.display = currentStep === 3 ? "block" : "none";
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        if (currentStep > 1) {
          currentStep--;
          updateSteps();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (currentStep < 3) {
          currentStep++;
          updateSteps();
        }
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert("Thanks for scheduling a demo! This is a demo, so no actual booking was made.");
      });
    }

    // Form validation
    function validateStep(step: number): boolean {
      if (step === 1) {
        const company = (document.getElementById("company") as HTMLInputElement)?.value;
        const website = (document.getElementById("website") as HTMLInputElement)?.value;
        const companySize = (document.getElementById("company-size") as HTMLSelectElement)?.value;
        const industry = (document.getElementById("industry") as HTMLSelectElement)?.value;

        if (!company || !website || !companySize || !industry) {
          const missingFields = [];
          if (!company) missingFields.push("Company Name");
          if (!website) missingFields.push("Company Website");
          if (!companySize) missingFields.push("Company Size");
          if (!industry) missingFields.push("Industry");

          alert(`Please fill in the following required fields:\n${missingFields.join("\n")}`);
          return false;
        }

        // Validate website URL
        try {
          new URL(website);
        } catch {
          alert("Please enter a valid website URL (e.g., https://example.com)");
          return false;
        }

        return true;
      }

      if (step === 2) {
        const firstName = (document.getElementById("first-name") as HTMLInputElement)?.value;
        const lastName = (document.getElementById("last-name") as HTMLInputElement)?.value;
        const email = (document.getElementById("work-email") as HTMLInputElement)?.value;
        const jobTitle = (document.getElementById("job-title") as HTMLInputElement)?.value;

        if (!firstName || !lastName || !email || !jobTitle) {
          const missingFields = [];
          if (!firstName) missingFields.push("First Name");
          if (!lastName) missingFields.push("Last Name");
          if (!email) missingFields.push("Work Email");
          if (!jobTitle) missingFields.push("Job Title");

          alert(`Please fill in the following required fields:\n${missingFields.join("\n")}`);
          return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid work email address");
          return false;
        }

        return true;
      }

      if (step === 3) {
        const selectedDate = document.querySelector("[data-date].border-payflo-purple");
        const timezone = (document.getElementById("timezone") as HTMLSelectElement)?.value;

        if (!selectedDate || !timezone) {
          const missingFields = [];
          if (!selectedDate) missingFields.push("Preferred Demo Date");
          if (!timezone) missingFields.push("Timezone");

          alert(`Please fill in the following required fields:\n${missingFields.join("\n")}`);
          return false;
        }

        return true;
      }

      return true;
    }

    // Next button click handler
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (validateStep(currentStep)) {
          currentStep++;
          updateSteps();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    // Previous button click handler
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        if (currentStep > 1) {
          currentStep--;
          updateSteps();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    // Form submission handler
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
          // Here you would typically send the form data to your backend
          alert("Thanks for scheduling a demo! This is a demo, so no actual booking was made.");
          form.reset();
          currentStep = 1;
          updateSteps();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    // Initialize dropdowns with native select behavior
    const dropdowns = document.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("change", () => {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        if (selectedOption.value) {
          dropdown.classList.add("text-gray-900");
        } else {
          dropdown.classList.remove("text-gray-900");
        }
      });
    });

    // Date selection
    const dateButtons = document.querySelectorAll<HTMLButtonElement>("[data-date]");
    dateButtons.forEach((button) => {
      button.addEventListener("click", () => {
        dateButtons.forEach((btn) => {
          btn.classList.remove("border-payflo-purple", "bg-payflo-purple/5");
        });
        button.classList.add("border-payflo-purple", "bg-payflo-purple/5");
      });
    });
  }, []);

  return null;
}

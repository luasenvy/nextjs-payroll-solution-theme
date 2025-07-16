import { Post } from "@/lib/schema/post";
import AvatarJuan from "@/public/avatar-juan.webp";
import AvatarMarcus from "@/public/avatar-marcus.webp";
import AvatarPriya from "@/public/avatar-priya.webp";
import AvatarSophia from "@/public/avatar-sophia.webp";

import PostImageBuildingPayroll from "@/public/blog/building-payroll.webp";
import PostImageCompliance from "@/public/blog/compliance.webp";
import PostImageFuturePayroll from "@/public/blog/future-payroll.webp";
import PostImageIntroducingPayflo from "@/public/blog/introducing-payflo.webp";

export const posts: Array<Post> = [
  {
    title: "Support MDX in Blog Posts",
    slug: "support-mdx-in-blog-posts",
    date: "Jul 16, 2025",
    author: "Priya Patel",
    authorRole: "Head of Compliance",
    authorAvatar: AvatarPriya.src,
    excerpt: "Learn how to use MDX in your blog posts to enhance content with React components.",
    content: `# Welcome to my MDX page!

## This is a heading

### This is a subheading

This is some **bold** and _italics_ text.
 
This is a list in markdown:
 
- One
- Two
- Three

\`\`\`tsx:example.tsx

export default function Example() {
  return (
    <div>
      <h1>Hello, MDX!</h1>
      <p>This is an example of using MDX in a blog post.</p>
    </div>
  );
}`,
    image: PostImageBuildingPayroll.src,
    tags: ["Engineering", "Product", "Security"],
  },
  {
    title: "Building Payroll for Modern Work",
    slug: "building-payroll-for-modern-work",
    date: "April 10, 2025",
    author: "Sophia Chen",
    authorRole: "CTO",
    authorAvatar: AvatarSophia.src,
    excerpt: "How we designed a payroll infrastructure that meets the needs of today's workforce.",
    content: `The world of work has changed dramatically in recent years. Remote work, flexible arrangements, and the gig economy have transformed how people work and get paid. However, most payroll systems were designed for a 9-to-5 world where everyone works full-time for a single employer.

At Payflo, we've built our payroll infrastructure from the ground up to support the modern workforce. Here's how we're addressing the challenges of modern work:

Flexibility First
-----------------

Modern work requires flexible payment options. Our system supports various payment schedules, from traditional bi-weekly payroll to daily payouts for gig workers. We've designed our APIs to accommodate all kinds of work arrangements, ensuring that everyone gets paid accurately and on time.

Multi-Entity Support
--------------------

Many modern workers have multiple income sources. Our infrastructure makes it easy to manage payments across different entities, whether they're full-time employees, contractors, or hybrid workers.

Real-Time Processing
--------------------

> In today's fast-paced world, waiting two weeks for a paycheck isn't always feasible. Our system supports real-time payment processing, allowing for on-demand payments when needed.

Compliance Across Borders
-------------------------

Remote work means that employers and employees may be in different jurisdictions. Our compliance engine handles the complexity of multi-state and multi-country regulations, ensuring that payments are always compliant with local laws.

Data Security
-------------

With increased focus on data privacy and security, we've built our infrastructure with security at its core. We use bank-level encryption and adhere to strict compliance standards to protect sensitive information.

By addressing these challenges, we're creating a payroll infrastructure that supports the way people work today and will work in the future.

If you're building tools for the modern workforce, we'd love to show you how Payflo can help you offer payroll capabilities to your customers.

[Book a Demo](/book-demo)`,
    image: PostImageBuildingPayroll.src,
    tags: ["Engineering", "Product", "Security"],
  },
  {
    title: "The Future of Embedded Payroll",
    slug: "future-of-embedded-payroll",
    date: "April 5, 2025",
    author: "Marcus Johnson",
    authorRole: "Head of Product",
    authorAvatar: AvatarMarcus.src,
    excerpt: "How embedded payroll is changing the game for SaaS platforms and their customers.",
    content: `The landscape of SaaS platforms is evolving rapidly, and embedded payroll is at the forefront of this transformation. As platforms seek to provide more value to their customers, the ability to offer seamless payroll functionality has become a game-changer.

Embedded payroll isn't just about adding another feature—it's about creating a comprehensive solution that makes your platform indispensable to your customers.

The Rise of Embedded Solutions
------------------------------

Just as embedded payments revolutionized e-commerce and embedded banking transformed financial services, **embedded payroll** is set to reshape how businesses handle their workforce compensation. This shift is driven by a simple truth: businesses want integrated solutions that work seamlessly together.

> The future of software isn't about standalone solutions—it's about creating ecosystems where everything works together seamlessly.

Why Platforms Are Embracing Payroll
-----------------------------------

### Increased Revenue

Adding payroll capabilities opens up new revenue streams through processing fees and premium features.

### Customer Retention

Platforms that handle payroll become deeply integrated into their customers' operations.

### Market Differentiation

Offering payroll capabilities sets platforms apart in increasingly competitive markets.

### Data Insights

Access to payroll data enables platforms to provide valuable insights to their customers.

The Path Forward
----------------

The next generation of SaaS platforms will be defined by their ability to provide comprehensive solutions. Embedded payroll is becoming a crucial part of this evolution, enabling platforms to offer more value while maintaining focus on their core competencies.

As we look to the future, it's clear that embedded payroll will become a standard feature for platforms serving businesses. The question isn't whether to add payroll capabilities, but when and how to implement them most effectively.

Want to learn how you can stay ahead of the curve by adding payroll to your platform? Let's discuss how Payflo can help you implement embedded payroll effectively.

[Book a Demo](/book-demo)`,
    image: PostImageFuturePayroll.src,
    tags: ["Product", "Future of Work", "Platform Strategy"],
  },
  {
    title: "Introducing Payflo: Modern Payroll Infrastructure",
    slug: "introducing-payflo",
    date: "April 15, 2025",
    author: "Juan Rodriguez",
    authorRole: "Founder & CEO",
    authorAvatar: AvatarJuan.src,
    excerpt:
      "Today, we're excited to introduce Payflo, a modern payroll infrastructure designed for developers.",
    content: `Today, we're excited to introduce Payflo, a modern payroll infrastructure designed for developers. Our mission is to make it fast and easy for SaaS platforms to build and embed payroll using our infrastructure, APIs, and UI components.

For too long, payroll has been one of the most challenging aspects of building HR and workforce management software. Legacy systems are complex, hard to integrate with, and were designed in an era before modern APIs.

Why We Built Payflo
-------------------

Our team has spent years working on payroll systems at companies like **Intuit**, **Gusto**, and **Xero**. We've experienced firsthand the challenges of building and maintaining payroll infrastructure, and we knew there had to be a better way.

> With Payflo, we're providing the building blocks that allow any software platform to offer payroll capabilities to their customers, without having to build everything from scratch.

Key Features
------------

### Flexible APIs

Our RESTful and GraphQL APIs are designed to be easy to use and integrate with.

### UI Components

Ready-to-use components that you can customize to match your brand.

### Tax Compliance

We handle all the complex tax calculations, filings, and payments.

### White-Label Solution

Offer a seamless payroll experience that feels like a native part of your platform.

We've built Payflo with modern development practices in mind, focusing on developer experience, reliability, and scalability. Our infrastructure is designed to grow with your business, whether you're serving small startups or enterprise customers.

Get Started Today
-----------------

We're launching Payflo in the U.S. and Canada, with plans to expand to more countries in the coming months. If you're interested in adding payroll to your platform, we'd love to chat.

[Book a Demo](/book-demo)`,
    image: PostImageIntroducingPayflo.src,
    tags: ["Product", "Announcement", "Infrastructure"],
  },
  {
    title: "Navigating Payroll Compliance Across Borders",
    slug: "payroll-compliance-across-borders",
    date: "March 30, 2025",
    author: "Priya Patel",
    authorRole: "Head of Compliance",
    authorAvatar: AvatarPriya.src,
    excerpt: "A guide to maintaining compliance when processing payroll in multiple jurisdictions.",
    content: `In today's global economy, managing payroll across multiple jurisdictions has become increasingly common. However, with this opportunity comes the challenge of maintaining compliance with various regulatory frameworks.

Compliance isn't just about following rules—it's about building trust with your employees and protecting your business from potential risks.

Understanding Multi-Jurisdiction Compliance
-------------------------------------------

Each jurisdiction has its own set of rules and regulations governing payroll. These can include different tax rates, reporting requirements, payment schedules, and employee classifications. Understanding these differences is crucial for maintaining compliance.

Key Compliance Challenges
-------------------------

### Tax Calculations

Managing different tax rates and requirements across jurisdictions.

### Reporting Requirements

Meeting various filing deadlines and documentation standards.

### Currency Management

Handling multiple currencies and exchange rate fluctuations.

### Data Privacy

Ensuring compliance with data protection regulations in each jurisdiction.

Best Practices for Compliance
-----------------------------

Implement robust systems and processes that can adapt to changing regulations. Regular audits and updates ensure continued compliance across all jurisdictions.

> The key to successful multi-jurisdiction payroll is having systems that can automatically adapt to different regulatory requirements while maintaining accuracy and efficiency.

With the right infrastructure in place, managing payroll across multiple jurisdictions doesn't have to be overwhelming. Modern solutions can automate much of the compliance work, reducing risk and saving time.

Learn how Payflo can help you maintain compliance while processing payroll across multiple jurisdictions. Our platform is designed to handle the complexities of global payroll, so you can focus on growing your business.

[Book a Demo](/book-demo)`,
    image: PostImageCompliance.src,
    tags: ["Compliance", "Global Payroll", "Best Practices"],
  },
].toSorted(({ date: a }, { date: b }) => new Date(b).getTime() - new Date(a).getTime());

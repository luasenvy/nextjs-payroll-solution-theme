---

import { getCollection } from "astro:content";
import { Icon } from "astro-icon/components";
import Layout from "../../layouts/Layout.astro";

interface Heading {
  title: string;
  id: string;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h2>(.*?)<\/h2>/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    headings.push({
      title: match[1],
      id: match[1]
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
    });
  }
  return headings;
}

export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");

  return blogPosts.map((post) => {
    const relatedPosts = blogPosts
      .filter((p) => p.id !== post.id)
      .map((p) => ({
        slug: p.id,
        title: p.data.title,
        excerpt: p.data.excerpt,
        image: p.data.image,
        date: p.data.date,
        tags: p.data.tags,
      }));

    return {
      params: { slug: post.id },
      props: {
        ...post.data,
        relatedPosts,
      },
    };
  });
}

const {
  title,
  date,
  author,
  authorRole,
  authorAvatar,
  excerpt,
  content,
  image,
  tags,
  relatedPosts,
} = Astro.props;
const readingTime = calculateReadingTime(content);
const headings = extractHeadings(content);

// Process content to add IDs to h2 tags for table of contents
const processedContent = content.replace(
  /<h2>(.*?)<\/h2>/g,
  (match: string, heading: string) =>
    `<h2 id="${heading
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}">${heading}</h2>`,
);

const shareUrl = new URL(Astro.url.pathname, Astro.site).toString();
---

<Layout title={`${title} - Payflo Blog`} description={excerpt}>
  <!-- Reading Progress Bar -->
  <div className="fixed top-0 left-0 z-50 h-1 w-full">
    <div id="reading-progress" className="h-full w-0 bg-gradient-to-r from-payflo-purple to-payflo-blue transition-all duration-100" role="progressbar" aria-label="Reading progress"></div>
  </div>

  <!-- Hero Section -->
  <section className="relative overflow-hidden bg-gradient-to-b from-payflo-gray/50 to-white py-20 md:py-32">
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" aria-hidden="true"></div>
    <div className="container-custom relative">
      <div className="mx-auto max-w-4xl">
        <!-- Tags -->
        <div className="mb-8 flex animate-on-scroll flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span className="rounded-full bg-payflo-purple/10 px-3 py-1 font-medium text-payflo-purple text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <!-- Title -->
        <h1 className="mb-8 animate-on-scroll font-bold text-4xl leading-tight delay-1 md:text-6xl">
          {title}
        </h1>
        
        <!-- Author & Meta -->
        <div className="mb-12 flex animate-on-scroll flex-wrap items-center gap-6 delay-2">
          <div className="flex items-center">
            <img 
              src={authorAvatar} 
              alt={`${author}, ${authorRole}`} 
              className="mr-4 h-12 w-12 rounded-full border-2 border-white shadow-md"
            />
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-gray-600 text-sm">{authorRole}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Icon name="ph:calendar-duotone" className="mr-2 h-5 w-5" aria-hidden="true" />
            <time datetime={date}>{date}</time>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Icon name="ph:clock-duotone" className="mr-2 h-5 w-5" aria-hidden="true" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        
        <!-- Featured Image -->
        <div className="animate-on-scroll overflow-hidden rounded-2xl shadow-2xl delay-3">
          <img 
            src={image} 
            alt={`Featured image for ${title}`} 
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  </section>

  <section className="py-16">
    <div className="container-custom">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <!-- Table of Contents Sidebar -->
        <aside className="order-2 h-fit lg:sticky lg:top-24 lg:order-1 lg:col-span-3">
          <nav className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm" aria-labelledby="toc-heading">
            <h2 id="toc-heading" className="mb-4 font-semibold text-lg">Table of Contents</h2>
            <ul className="space-y-3" role="list">
              {headings.map((heading: Heading) => (
                <li>
                  <a 
                    href={`#${heading.id}`}
                    className="block rounded text-gray-600 text-sm transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                  >
                    {heading.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <!-- Floating Share Bar -->
          <div className="mt-8 hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:block">
            <h3 className="mb-4 font-semibold text-lg">Share Article</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                aria-label="Share on Twitter"
              >
                <Icon name="ph:twitter-logo-duotone" className="mr-3 h-5 w-5" aria-hidden="true" />
                <span className="text-sm">Share on Twitter</span>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                aria-label="Share on LinkedIn"
              >
                <Icon name="ph:linkedin-logo-duotone" className="mr-3 h-5 w-5" aria-hidden="true" />
                <span className="text-sm">Share on LinkedIn</span>
              </a>
              <button
                id="copy-link"
                className="flex items-center rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                aria-label="Copy link to article"
              >
                <Icon name="ph:link-duotone" className="mr-3 h-5 w-5" aria-hidden="true" />
                <span className="text-sm">Copy Link</span>
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main className="order-1 lg:order-2 lg:col-span-9">
          <article className="prose prose-lg max-w-none">
            <Fragment set:html={processedContent} />
          </article>
          
          <!-- Mobile Share Bar -->
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
                <Icon name="ph:twitter-logo-duotone" className="h-6 w-6" aria-hidden="true" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                aria-label="Share on LinkedIn"
              >
                <Icon name="ph:linkedin-logo-duotone" className="h-6 w-6" aria-hidden="true" />
              </a>
              <button
                className="rounded p-1 text-gray-600 transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                id="copy-link-mobile"
                aria-label="Copy link to article"
              >
                <Icon name="ph:link-duotone" className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          
          <!-- Related Posts -->
          <section className="mt-16 border-gray-200 border-t pt-8">
            <h2 className="mb-8 font-bold text-2xl">Related Articles</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2" role="list">
              {relatedPosts.map((post: any) => (
                <article role="listitem">
                  <a 
                    href={`/blog/${post.slug}`}
                    className="group hover:-translate-y-1 focus:-translate-y-1 block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={`Featured image for ${post.title}`}
                        className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <span className="rounded-full bg-payflo-purple/10 px-2 py-1 text-payflo-purple text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-semibold text-lg transition-colors duration-200 group-hover:text-payflo-purple group-focus:text-payflo-purple">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-gray-600 text-sm">{post.excerpt}</p>
                      <time className="mt-4 block text-gray-500 text-sm" datetime={post.date}>{post.date}</time>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
          
          <div className="mt-16 border-gray-200 border-t pt-8">
            <a 
              href="/blog" 
              className="group flex items-center rounded font-medium text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
            >
              <Icon name="ph:arrow-left-duotone" className="group-hover:-translate-x-1 group-focus:-translate-x-1 mr-2 h-5 w-5 transition-transform duration-200" aria-hidden="true" />
              Back to Blog
            </a>
          </div>
        </main>
      </div>
    </div>
  </section>
</Layout>

<script>
  // Reading Progress Bar
  document.addEventListener('astro:page-load', () => {
    const progressBar = document.getElementById('reading-progress');
    const article = document.querySelector('article');
    
    if (progressBar && article) {
      const updateProgress = () => {
        const scrolled = window.scrollY;
        const articleHeight = article.clientHeight - window.innerHeight;
        const progress = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress.toString());
      };

      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress(); // Initial call
    }

    // Copy Link Functionality
    const copyLink = document.getElementById('copy-link');
    const copyLinkMobile = document.getElementById('copy-link-mobile');
    const url = window.location.href;

    [copyLink, copyLinkMobile].forEach(button => {
      if (button) {
        button.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(url);
            const spanElement = button.querySelector('span');
            const icon = button.querySelector('svg');
            const originalText = spanElement?.textContent || 'Copy Link';
            
            if (icon) {
              icon.style.color = '#7928CA';
            }
            
            if (spanElement) {
              spanElement.textContent = 'Copied!';
              // Announce to screen readers
              const announcement = document.createElement('div');
              announcement.setAttribute('aria-live', 'polite');
              announcement.setAttribute('aria-atomic', 'true');
              announcement.className = 'sr-only';
              announcement.textContent = 'Link copied to clipboard';
              document.body.appendChild(announcement);
              
              setTimeout(() => {
                spanElement.textContent = originalText;
                if (icon) {
                  icon.style.color = '';
                }
                document.body.removeChild(announcement);
              }, 2000);
            }
          } catch (err) {
            console.error('Failed to copy URL:', err);
          }
        });
      }
    });
  });
</script>

<style>
  /* Add smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
  }
  
  /* Style the table of contents */
  .prose h2 {
    scroll-margin-top: 2rem;
  }

  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Enhance typography */
  .prose {
    --tw-prose-body: theme('colors.gray.600');
    --tw-prose-headings: theme('colors.gray.900');
    --tw-prose-links: theme('colors.payflo-purple');
    --tw-prose-bold: theme('colors.gray.900');
    --tw-prose-quotes: theme('colors.gray.900');
    --tw-prose-code: theme('colors.payflo-purple');
    --tw-prose-hr: theme('colors.gray.200');
    --tw-prose-th-borders: theme('colors.gray.200');
  }

  .prose :where(h2):not(:where([class~="not-prose"] *)) {
    margin-top: 2.5em;
    margin-bottom: 1em;
    font-size: 1.75em;
  }

  .prose :where(p):not(:where([class~="not-prose"] *)) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    line-height: 1.8;
  }

  .prose :where(ul > li):not(:where([class~="not-prose"] *)) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  /* Line clamp utility */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

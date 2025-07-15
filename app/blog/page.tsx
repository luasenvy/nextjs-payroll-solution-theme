import "./blog.css";

import { ArrowRight, Calendar1, Clock3, FileSearch } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { BlogApp } from "@/app/blog/BlogApp";
import { AnimatePage } from "@/components/AnimatePage";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog - Payflo",
  description:
    "Insights, updates, and thought leadership from the Payflo team on payroll, embedded finance, and the future of work.",
};

// Calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default async function BlogPage() {
  // Get featured post (most recent)
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const allTags = Array.from(new Set(posts.flatMap(({ tags }) => tags))).toSorted();

  return (
    <>
      <AnimatePage />
      <BlogApp />

      <section className="relative overflow-hidden bg-gradient-to-b from-payflo-gray/50 to-white py-20 md:py-32">
        <div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"
          aria-hidden="true"
        ></div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 animate-on-scroll font-bold text-4xl leading-tight md:text-6xl">
              The Payflo <span className="gradient-text">Blog</span>
            </h1>
            <p className="mx-auto max-w-2xl animate-on-scroll text-gray-600 text-xl delay-1">
              Insights, updates, and thought leadership from our team on payroll, embedded finance,
              and the future of work.
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="mb-4 animate-on-scroll font-bold text-2xl">Featured Article</h2>
            </div>

            <article className="grid animate-on-scroll grid-cols-1 items-center gap-12 delay-1 lg:grid-cols-2">
              <div className="hover-zoom overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={featuredPost.image}
                  alt={`Featured image for ${featuredPost.title}`}
                  className="h-auto w-full transition-all duration-500"
                />
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag: string, index) => (
                    <span
                      key={`tag-${index}`}
                      className="rounded-full bg-payflo-purple/10 px-3 py-1 font-medium text-payflo-purple text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-4 font-bold text-3xl leading-tight md:text-4xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="rounded-smtransition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-4"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="mb-6 text-gray-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>

                <div className="mb-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={`${featuredPost.author}, ${featuredPost.authorRole}`}
                      className="mr-3 h-10 w-10 rounded-full border-2 border-white shadow-md"
                    />
                    <div>
                      <p className="font-semibold text-sm">{featuredPost.author}</p>
                      <p className="text-gray-600 text-xs">{featuredPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar1 className="mr-2 size-4" aria-hidden="true" />
                    <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock3 className="mr-2 size-4" aria-hidden="true" />
                    <span>{calculateReadingTime(featuredPost.content)} min read</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="btn btn-primary group inline-flex items-center focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                  aria-label={`Read full article: ${featuredPost.title}`}
                >
                  Read Full Article
                  <ArrowRight
                    className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1 group-focus:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="border-gray-200 border-t bg-payflo-gray/50 py-8">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-gray-700 text-sm">Filter by topic:</span>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter articles by topic"
            >
              <button
                className="filter-tag rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700 text-sm transition-all duration-200 hover:bg-payflo-purple hover:text-white focus:bg-payflo-purple focus:text-white focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                data-tag="all"
                aria-pressed="true"
              >
                All Posts
              </button>
              {allTags.map((tag: string, index) => (
                <button
                  key={`btag-${index}`}
                  className="filter-tag rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700 text-sm transition-all duration-200 hover:bg-payflo-purple hover:text-white focus:bg-payflo-purple focus:text-white focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                  data-tag={tag.toLowerCase()}
                  aria-pressed="false"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-4 animate-on-scroll font-bold text-2xl">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="posts-grid">
            {otherPosts.map((post, index) => (
              <article
                key={`opost-${index}`}
                className={`blog-post-card group animate-on-scroll delay-${Math.min(index + 1, 5)}`}
                data-tags={post.tags.map((tag) => tag.toLowerCase()).join(",")}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:-translate-y-1 focus:-translate-y-1 block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={`Featured image for ${post.title}`}
                      className="size-full transform object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag: string, index) => (
                        <span
                          key={`stag-${index}`}
                          className="rounded-full bg-payflo-purple/10 px-2 py-1 font-medium text-payflo-purple text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-3 line-clamp-2 font-semibold text-lg transition-colors duration-200 group-hover:text-payflo-purple group-focus:text-payflo-purple">
                      {post.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 text-gray-600 text-sm">{post.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs">
                      <div className="flex items-center">
                        <img
                          src={post.authorAvatar}
                          alt={`${post.author}, ${post.authorRole}`}
                          className="mr-2 size-6 rounded-full"
                          loading="lazy"
                        />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center">
                        <Calendar1 className="mr-1 size-3" aria-hidden="true" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>

                      <div className="flex items-center">
                        <Clock3 className="mr-1 size-3" aria-hidden="true" />
                        <span>{calculateReadingTime(post.content)} min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div id="no-results" className="hidden py-16 text-center">
            <div className="mx-auto max-w-md">
              <FileSearch className="mx-auto mb-4 size-16 text-gray-400" aria-hidden="true" />
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">No articles found</h3>
              <p className="text-gray-600">Try selecting a different topic or view all posts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-payflo-purple to-payflo-blue py-20">
        <div className="container-custom text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 animate-on-scroll font-bold text-3xl text-white md:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 animate-on-scroll text-white/90 text-xl delay-1">
              Get the latest insights on payroll, embedded finance, and the future of work delivered
              to your inbox.
            </p>

            <form
              className="mx-auto flex max-w-md animate-on-scroll flex-col gap-4 delay-2 sm:flex-row"
              role="form"
              aria-label="Newsletter signup"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-0 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-payflo-purple"
                required
                aria-required="true"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 font-medium text-payflo-purple transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-payflo-purple"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 animate-on-scroll text-sm text-white/70 delay-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import "./post.css";

import { ArrowLeft, Calendar1, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { ShareArticle } from "@/app/blog/[slug]/ShareArticle";
import { ShareArticle2 } from "@/app/blog/[slug]/ShareArticle2";
import { AnimatePage } from "@/components/AnimatePage";
import { posts } from "@/lib/posts";
import { Post } from "@/lib/schema/post";
import { PostApp } from "./PostApp";

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

interface PostReadProps {
  params: Promise<{ slug: Post["slug"] }>;
}

export async function generateMetadata({ params }: PostReadProps) {
  const { slug } = await params;

  const post = posts.find(({ slug: _slug }) => slug === _slug);

  if (!post) return { title: "Post Not Found" };

  return { title: `${post.title} - Payflo Blog`, description: post.excerpt };
}

export default async function PostRead({ params }: PostReadProps) {
  const { slug: _slug } = await params;

  const post = posts.find(({ slug }) => slug === _slug);

  if (!post) return notFound();

  const { slug, excerpt, content, title, tags, author, authorAvatar, authorRole, date, image } =
    post;

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

  const relatedPosts = posts.filter(({ slug: fslug }) => slug !== fslug);

  return (
    <>
      <AnimatePage />
      <PostApp />

      <div className="fixed top-0 left-0 z-50 h-1 w-full">
        <div
          id="reading-progress"
          className="h-full w-0 bg-gradient-to-r from-payflo-purple to-payflo-blue transition-all duration-100"
          role="progressbar"
          aria-label="Reading progress"
        ></div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-b from-payflo-gray/50 to-white py-20 md:py-32">
        <div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"
          aria-hidden="true"
        ></div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex animate-on-scroll flex-wrap gap-2">
              {tags.map((tag: string, i) => (
                <span
                  key={`mtag-${i}`}
                  className="rounded-full bg-payflo-purple/10 px-3 py-1 font-medium text-payflo-purple text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-8 animate-on-scroll font-bold text-4xl leading-tight delay-1 md:text-6xl">
              {title}
            </h1>

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
                <Calendar1 className="mr-2 size-5" aria-hidden="true" />
                <time dateTime={date}>{date}</time>
              </div>

              <div className="flex items-center text-gray-600 text-sm">
                <Clock3 className="mr-2 size-5" aria-hidden="true" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            <div className="animate-on-scroll overflow-hidden rounded-2xl shadow-2xl delay-3">
              <img src={image} alt={`Featured image for ${title}`} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <aside className="order-2 h-fit lg:sticky lg:top-24 lg:order-1 lg:col-span-3">
              <nav
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                aria-labelledby="toc-heading"
              >
                <h2 id="toc-heading" className="mb-4 font-semibold text-lg">
                  Table of Contents
                </h2>
                <ul className="space-y-3" role="list">
                  {headings.map((heading: Heading, i) => (
                    <li key={`heading-${i}`}>
                      <a
                        href={`#${heading.id}`}
                        className="block rounded-smtext-gray-600 text-sm transition-colors duration-200 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                      >
                        {heading.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <ShareArticle title={title} />
            </aside>

            <main className="order-1 lg:order-2 lg:col-span-9">
              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              <ShareArticle2 title={title} />

              <section className="mt-16 border-gray-200 border-t pt-8">
                <h2 className="mb-8 font-bold text-2xl">Related Articles</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2" role="list">
                  {relatedPosts.map((post: Post, i) => (
                    <article key={`listitem-${i}`} role="listitem">
                      <a
                        href={`/blog/${slug}`}
                        className="group hover:-translate-y-1 focus:-translate-y-1 block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={image}
                            alt={`Featured image for ${title}`}
                            className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex flex-wrap gap-2">
                            {tags.map((tag: string, i) => (
                              <span
                                key={`posttags-${i}`}
                                className="rounded-full bg-payflo-purple/10 px-2 py-1 text-payflo-purple text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-semibold text-lg transition-colors duration-200 group-hover:text-payflo-purple group-focus:text-payflo-purple">
                            {title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-gray-600 text-sm">{excerpt}</p>
                          <time className="mt-4 block text-gray-500 text-sm" dateTime={date}>
                            {date}
                          </time>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-16 border-gray-200 border-t pt-8">
                <a
                  href="/blog"
                  className="group flex items-center rounded-smfont-medium text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
                >
                  <ArrowLeft
                    className="group-hover:-translate-x-1 group-focus:-translate-x-1 mr-2 size-5 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  Back to Blog
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

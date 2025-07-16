import LanguageBash from "highlight.js/lib/languages/bash";
import LanguageCSS from "highlight.js/lib/languages/css";
import LanguageDockerfile from "highlight.js/lib/languages/dockerfile";
import LanguageJava from "highlight.js/lib/languages/java";
import LanguageJavascript from "highlight.js/lib/languages/javascript";
import LanguageJson from "highlight.js/lib/languages/json";
import LanguagePlaintext from "highlight.js/lib/languages/plaintext";
import LanguageSql from "highlight.js/lib/languages/sql";
import LanguageTypescript from "highlight.js/lib/languages/typescript";
import LanguageXml from "highlight.js/lib/languages/xml";

import kebabcase from "lodash.kebabcase";
import { Pilcrow } from "lucide-react";

import Link, { type LinkProps } from "next/link";
import type { SerializeOptions } from "next-mdx-remote/dist/types";

import rehypeHighlight, { Options as HighlightOptions } from "rehype-highlight";
import rehypeHighlightCodeLines, { HighlightLinesOptions } from "rehype-highlight-code-lines";
import remarkFlexibleCodeTitles from "remark-flexible-code-titles";

import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export function getId(text?: string) {
  return kebabcase(text?.replace(/\\s+/g, " ").trim() || "");
}

export function getTocId(text: string) {
  if ("string" === typeof text) return `#toc-${getId(text)}`;
  return "";
}

export const components = {
  Link,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h2 {...props}>
        <a href={getTocId(children as string)} className="no-underline hover:underline">
          {children}
        </a>

        <Pilcrow className="ml-2 inline size-4 text-foreground/60" />
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h3 {...props}>
        <a href={getTocId(children as string)} className="no-underline hover:underline">
          {children}
        </a>

        <Pilcrow className="ml-2 inline size-4 text-foreground/60" />
      </h3>
    );
  },
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h4 {...props}>
        <a href={getTocId(children as string)} className="no-underline hover:underline">
          {children}
        </a>

        <Pilcrow className="ml-2 inline size-4 text-foreground/60" />
      </h4>
    );
  },
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h5 {...props}>
        <a href={getTocId(children as string)} className="no-underline hover:underline">
          {children}
        </a>

        <Pilcrow className="ml-2 inline size-4 text-foreground/60" />
      </h5>
    );
  },
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h6 {...props}>
        <a href={getTocId(children as string)} className="no-underline hover:underline">
          {children}
        </a>

        <Pilcrow className="ml-2 inline size-4 text-foreground/60" />
      </h6>
    );
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (props.href?.startsWith("#")) return <a {...props} />;
    return <Link {...(props as LinkProps)} />;
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} loading="lazy" />;
  },
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => {
    return (
      <div className="mt-8 max-h-96 overflow-auto rounded-lg border px-2 py-1">
        <table className="m-0" {...props} />
      </div>
    );
  },
};

export const mdxOptions: SerializeOptions["mdxOptions"] = {
  remarkPlugins: [
    remarkGfm,
    [remarkHeadingId, { defaults: true, uniqueDefaults: false }],
    remarkFrontmatter,
    remarkFlexibleCodeTitles,
    [remarkMdxFrontmatter, { name: "metadata" }],
  ],
  rehypePlugins: [
    [
      rehypeHighlight,
      {
        languages: {
          dockerfile: LanguageDockerfile,
          bash: LanguageBash,
          css: LanguageCSS,
          java: LanguageJava,
          javascript: LanguageJavascript,
          json: LanguageJson,
          plaintext: LanguagePlaintext,
          sql: LanguageSql,
          typescript: LanguageTypescript,
          xml: LanguageXml,
        },
      } as HighlightOptions,
    ],
    [rehypeHighlightCodeLines, { showLineNumbers: true } as HighlightLinesOptions],
  ],
};

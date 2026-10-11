"use client";

import katex from "katex";
import { useMemo } from "react";
import { cn } from "cn";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMarkup(source: string): string {
  const parts: string[] = [];
  const pattern = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    const index = match.index ?? 0;
    parts.push(escapeHtml(source.slice(last, index)).replaceAll("\n", "<br />"));
    const display = match[1];
    const inline = match[2];
    const tex = display ?? inline ?? "";
    parts.push(
      katex.renderToString(tex, {
        throwOnError: false,
        displayMode: display !== undefined,
        output: "html",
        strict: "ignore",
      }),
    );
    last = index + match[0].length;
  }
  parts.push(escapeHtml(source.slice(last)).replaceAll("\n", "<br />"));
  return parts.join("");
}

export function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const html = useMemo(() => renderMarkup(text), [text]);
  const inline = className?.split(/\s+/).includes("inline");
  const Tag = inline ? "span" : "div";
  return (
    <Tag
      className={cn("rich-text leading-relaxed", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

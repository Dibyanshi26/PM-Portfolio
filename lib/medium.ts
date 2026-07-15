import { mediumFallbackPosts } from "@/lib/data";

export type WritingPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

const MEDIUM_USERNAME = "dibyanshisingh611";
const FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function estimateReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getWritingPosts(): Promise<
  (WritingPost & { readingTime: number })[]
> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Medium feed responded ${res.status}`);
    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("Unexpected Medium feed shape");
    }

    return data.items.slice(0, 6).map((item: any) => {
      const description = stripHtml(item.description || "").slice(0, 180);
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "",
        description: description + (description.length === 180 ? "…" : ""),
        thumbnail: item.thumbnail || "/images/writing/medium-placeholder.svg",
        readingTime: estimateReadingTime(stripHtml(item.description || "")),
      };
    });
  } catch {
    // Medium's feed occasionally rate-limits or the proxy is unavailable —
    // fall back to a static, hand-curated list rather than showing nothing.
    return mediumFallbackPosts.map((p) => ({ ...p, readingTime: 4 }));
  }
}

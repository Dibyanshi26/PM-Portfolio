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

// Medium's RSS rarely sets a proper thumbnail field, but the article body
// almost always opens with a cover image — pull that out directly instead.
function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Medium's content often opens with an image caption ("Photo by X on
// Unsplash") and a repeated byline ("By Dibyanshi Singh") before the real
// article text starts — strip those so the excerpt reads cleanly.
function cleanExcerpt(text: string) {
  return text
    .replace(/^Photo by .+? on Unsplash\s*/i, "")
    .replace(/^By\s+[A-Z][a-zA-Z.\s]{2,40}\s+/, "")
    .trim();
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
      const rawHtml = item.content || item.description || "";
      const plainText = cleanExcerpt(stripHtml(item.description || ""));
      const description = plainText.slice(0, 180) + (plainText.length > 180 ? "…" : "");
      const thumbnail = item.thumbnail || extractFirstImage(rawHtml) || "/images/writing/medium-cover.png";

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
        description,
        thumbnail,
        readingTime: estimateReadingTime(plainText),
      };
    });
  } catch {
    // Medium's feed occasionally rate-limits or the proxy is unavailable —
    // fall back to a static, hand-curated list rather than showing nothing.
    return mediumFallbackPosts.map((p) => ({ ...p, readingTime: 4 }));
  }
}

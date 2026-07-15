import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWritingPosts } from "@/lib/medium";

export async function Writing() {
  const posts = await getWritingPosts();

  return (
    <section id="writing" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-clay font-medium mb-4">Writing</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
            Notes from the work.
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Thoughts on AI, product thinking, transformation, and the systems behind useful technology.
          </p>
        </div>

        <div className="divide-y divide-line border-t border-b border-line">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row gap-6 py-8 hover:bg-surface/60 transition-colors duration-300 -mx-4 px-4"
            >
              <div className="relative w-full sm:w-40 h-28 shrink-0 rounded-xl overflow-hidden bg-sand">
                <Image
                  src={post.thumbnail || "/images/writing/medium-placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-stone mb-2">
                  {post.pubDate && <span>{post.pubDate}</span>}
                  {post.pubDate && <span>·</span>}
                  <span>{post.readingTime} min read</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink leading-snug group-hover:text-clay transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed max-w-2xl">{post.description}</p>
              </div>
              <div className="hidden sm:flex items-center text-stone group-hover:text-clay group-hover:translate-x-1 transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

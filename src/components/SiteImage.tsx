import Image from "next/image";
import { images, type ImageKey } from "@/lib/images";

/**
 * Optimized image via next/image, sourced from the central registry so alt
 * text and dimensions stay consistent. Override `alt` for context when useful.
 */
export function SiteImage({
  name,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  caption,
}: {
  name: ImageKey;
  alt?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  caption?: string;
}) {
  const img = images[name];
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        <Image
          src={img.src}
          alt={alt ?? img.alt}
          width={img.width}
          height={img.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

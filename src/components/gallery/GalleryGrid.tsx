import Image from "next/image";

export type GalleryItem = { id: string; src: string; alt: string; category?: string; width: number; height: number };

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <figure className="surface-card overflow-hidden" key={item.id}><div className="relative aspect-[4/3]"><Image alt={item.alt} className="object-contain" fill loading="lazy" sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 30vw" src={item.src} /></div>{item.category ? <figcaption className="px-4 py-3 text-sm font-semibold text-[var(--color-muted)]">{item.category}</figcaption> : null}</figure>)}</div>;
}

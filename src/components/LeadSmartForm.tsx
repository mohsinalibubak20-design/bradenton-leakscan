/**
 * LeadSmart lead-capture form — HTTPS iframe integration only.
 *
 * No document.write, no legacy JavaScript embed, no malformed div snippet.
 * The external LeadSmart funnel is rendered in a responsive, full-width iframe
 * inside a rounded, subtly-shadowed card.
 *
 * Reuse the exported `leadSmartUrl(funnel)` helper for CTA buttons that should
 * open a specific funnel directly.
 */

const LEADSMART_BASE_URL = "https://leads.leadsmartinc.com/";
const LEADSMART_API_KEY = "eb7353a561f876a7c03543787a0cd05ac8a926d3";
const LEADSMART_AFFILIATE_SOURCE = "mdrufi1";
const LEADSMART_CATEGORY = "1";

/** Build the HTTPS LeadSmart URL for a given funnel (e.g. 4 for the hero). */
export function leadSmartUrl(funnel: number): string {
  const params = new URLSearchParams({
    api_key: LEADSMART_API_KEY,
    affiliate_source: LEADSMART_AFFILIATE_SOURCE,
    funnel: String(funnel),
    category: LEADSMART_CATEGORY,
    step: "1",
    buttons: "btn-success",
  });
  return `${LEADSMART_BASE_URL}?${params.toString()}`;
}

export function LeadSmartForm({
  funnel,
  title,
  height = 620,
  className = "shadow-lg ring-1 ring-slate-200/70",
  priority = false,
}: {
  /** LeadSmart funnel id (4 = homepage hero, 3 = contact page). */
  funnel: number;
  /** Accessible iframe title. */
  title: string;
  /** Iframe height in px (default 620). */
  height?: number;
  /** Wrapper card classes (defaults to a subtle shadow + ring). */
  className?: string;
  /**
   * Set true for above-the-fold forms so the iframe loads eagerly.
   * Leave false (default) to lazy-load forms below the fold.
   */
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-white ${className}`}>
      <iframe
        src={leadSmartUrl(funnel)}
        title={title}
        loading={priority ? "eager" : "lazy"}
        className="block w-full border-0"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}

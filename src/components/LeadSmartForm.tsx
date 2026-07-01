import { ContactForm } from "@/components/ContactForm";

/**
 * LeadSmart lead-capture card body.
 *
 * When a LeadSmart embed URL is configured via `NEXT_PUBLIC_LEADSMART_URL`,
 * the external form is rendered in a responsive, generously-sized iframe.
 * Until then it gracefully falls back to the native `ContactForm` (which posts
 * to /api/contact) so the card is always functional — never a blank or cramped
 * iframe and never broken spacing.
 *
 * To go live with LeadSmart, add to `.env.local`:
 *   NEXT_PUBLIC_LEADSMART_URL="https://app.leadsmart.example/form/xxxx"
 */
const LEADSMART_URL = process.env.NEXT_PUBLIC_LEADSMART_URL;

export function LeadSmartForm() {
  if (LEADSMART_URL) {
    return (
      <iframe
        src={LEADSMART_URL}
        title="Request a free leak detection quote"
        loading="lazy"
        className="block h-[560px] w-full rounded-xl border-0 bg-white sm:h-[600px]"
      />
    );
  }

  return <ContactForm />;
}

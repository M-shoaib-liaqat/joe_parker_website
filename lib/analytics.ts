// GA4 scaffolding. GA_MEASUREMENT_ID is a placeholder until the client generates a
// real property — swap this one value (or set VITE_GA_MEASUREMENT_ID) and every
// event below starts flowing, no other code changes needed.
export const GA_MEASUREMENT_ID: string =
  (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXX';

const isConfigured = () => /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== 'G-XXXXXXXXX';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let initialized = false;

/** Injects gtag.js and wires up window.gtag. No-ops until a real measurement ID is set. */
export function initGA(): void {
  if (initialized || typeof window === 'undefined' || !isConfigured()) return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

export type ConversionEvent = 'click_call' | 'click_whatsapp' | 'form_submit';

/** Fires a GA4 event tagged with the current page path. No-ops until GA is configured. */
export function trackEvent(name: ConversionEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  if (!isConfigured() || typeof window.gtag !== 'function') {
    // Keep a visible trail in dev/staging so the wiring can be verified before go-live.
    console.debug(`[analytics] ${name}`, { page_path: window.location.pathname, ...params });
    return;
  }
  window.gtag('event', name, { page_path: window.location.pathname, ...params });
}

/**
 * Sanitizes user input string:
 * - Trims whitespace
 * - Strips HTML tags and script attempts
 * - Enforces max length (50 characters)
 * - Retains alphanumeric, unicode letters (Urdu, Arabic, Latin, accents, spaces)
 */
export function sanitizeName(input: string): string {
  if (!input) return '';
  
  // Remove any HTML tags
  let cleaned = input.replace(/<[^>]*>?/gm, '');
  
  // Remove control characters and unsafe punctuation
  cleaned = cleaned.replace(/[<>'"`;=(){}\[\]\\\/]/g, '');
  
  // Trim and limit to 50 characters
  cleaned = cleaned.trim().slice(0, 50);
  
  return cleaned;
}

/**
 * Checks if text contains Arabic/Urdu unicode characters
 */
export function isUrduOrArabic(text: string): boolean {
  if (!text) return false;
  // Arabic & Urdu Unicode blocks: 0600-06FF, 0750-077F, FB50-FDFF, FE70-FEFF
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
}

/**
 * Gets query param from current window location safely
 */
export function getQueryParam(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(key);
    return value ? sanitizeName(value) : null;
  } catch {
    return null;
  }
}

/**
 * Generates personalized shareable link for a given name
 */
export function generateShareUrl(name: string): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.href);
  url.searchParams.set('name', name);
  return url.toString();
}

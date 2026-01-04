import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitizes an HTML string using DOMPurify.
 * @param html - The potentially unsafe HTML string.
 * @returns The sanitized HTML string.
 */
export const sanitizeHTML = (html: string): string => {
  try {
    return DOMPurify.sanitize(html);
  } catch (error) {
    console.error('DOMPurify sanitization error:', error);
    return '';
  }
};

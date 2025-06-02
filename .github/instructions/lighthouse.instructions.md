GitHub Copilot: # Lighthouse CI Issues Todo List (Ordered by Complexity)

## Quick Fixes (Low Complexity)

1. **Add width and height attributes to images (unsized-images)**

   - Find all `<img>` elements missing explicit dimensions
   - Add appropriate `width` and `height` attributes to prevent layout shifts
   - Impact: Improves Cumulative Layout Shift (CLS) metric

2. **Fix heading hierarchy (heading-order)**

   - Review page structure and ensure headings follow a logical sequence (h1 → h2 → h3, etc.)
   - Avoid skipping heading levels (e.g., h1 followed directly by h3)
   - Impact: Improves accessibility and SEO

3. **Fix incorrect ARIA roles (aria-allowed-role)**

   - Identify elements with improper ARIA role assignments
   - Remove invalid roles or replace elements with semantically appropriate ones
   - Impact: Critical for screen reader users and accessibility compliance

4. **Add preconnect hints (uses-rel-preconnect)**

   - Add `<link rel="preconnect" href="https://domain.com">` for third-party domains
   - Target domains that serve critical resources
   - Impact: Reduces connection setup time, improving performance

5. **Fix image aspect ratios (image-aspect-ratio)**
   - Identify images displayed with incorrect proportions
   - Adjust CSS or image dimensions to maintain proper ratios
   - Impact: Improves visual quality and professionalism

## Medium Complexity

6. **Fix console errors (errors-in-console)**

   - Identify and resolve JavaScript errors in browser console logs
   - Systematically address each error starting with the most frequent ones
   - Impact: Improves stability and prevents potential functionality issues

7. **Increase touch target sizes (target-size)**

   - Ensure interactive elements (buttons, links) are at least 44×44px
   - Add padding to small elements or increase their size
   - Impact: Improves mobile usability significantly

8. **Preload Largest Contentful Paint image (prioritize-lcp-image)**

   - Identify your page's LCP element (usually hero image)
   - Add `<link rel="preload" as="image" href="path/to/image">` in `<head>`
   - Impact: Improves perceived loading performance

9. **Convert images to modern formats (modern-image-formats)**

   - Convert JPG/PNG images to WebP format
   - Implement fallbacks for browsers without WebP support
   - Impact: Reduces image file sizes while maintaining quality

10. **Address Chrome DevTools issues (inspector-issues)**
    - Run Chrome DevTools and check the Issues panel
    - Fix each reported issue according to recommendations
    - Impact: Resolves various browser-reported problems

## Higher Complexity

11. **Implement responsive images (uses-responsive-images)**

    - Update image elements to use `srcset` and `sizes` attributes
    - Consider using `<picture>` element for art direction cases
    - Serve appropriately sized images based on viewport size
    - Impact: Reduces unnecessary image downloads on smaller devices

12. **Reduce unused JavaScript (unused-javascript)**

    - Analyze JavaScript bundles with tools like webpack-bundle-analyzer
    - Implement code splitting for conditional loading
    - Remove unused dependencies and dead code
    - Impact: Reduces JavaScript parsing and execution time

13. **Implement third-party facades (third-party-facades)**

    - Replace heavy third-party embeds with lightweight placeholders
    - Load the actual third-party content only upon user interaction
    - Impact: Improves initial page load performance

14. **Optimize render-blocking resources (render-blocking-resources)**

    - Move non-critical CSS to be loaded asynchronously
    - Add `defer` or `async` attributes to non-critical scripts
    - Inline critical CSS in the `<head>`
    - Impact: Speeds up initial rendering

15. **Reduce total page size (total-byte-weight)**
    - Compress all text assets (HTML, CSS, JS)
    - Optimize images further (compression, dimensions)
    - Remove unnecessary resources and code
    - Impact: Faster loading on all networks, especially mobile

## Most Complex

16. **Improve Time to Interactive (interactive)**

    - Reduce main thread work by optimizing JavaScript
    - Implement progressive enhancement techniques
    - Consider server-side rendering for initial content
    - Impact: Makes the site responsive to user input sooner

17. **Improve Largest Contentful Paint (largest-contentful-paint)**

    - Optimize server response times
    - Prioritize critical rendering path
    - Consider layout optimizations to identify LCP element earlier
    - Impact: Improves perceived performance dramatically

18. **Improve First Input Delay potential (max-potential-fid)**

    - Break up long tasks into smaller ones
    - Optimize event handlers and minimize their work
    - Defer non-critical JavaScript processing
    - Impact: Ensures the page remains responsive to user interaction

19. **Configure proper cache policies (uses-long-cache-ttl)**
    - Set appropriate `Cache-Control` headers for static assets
    - Implement versioning strategy for cache invalidation
    - May require server configuration changes
    - Impact: Reduces repeat downloads for returning visitors

---

ORIGINAL LIST:

```yaml
OUTPUT LIGHTHOUSE:
19 result(s) for http://localhost:46639/index.html :

  ✘  aria-allowed-role failure for minScore assertion
       Uses ARIA roles on incompatible elements
       https://dequeuniversity.com/rules/axe/4.9/aria-allowed-role

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  errors-in-console failure for minScore assertion
       Browser errors were logged to the console
       https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  heading-order failure for minScore assertion
       Heading elements are not in a sequentially-descending order
       https://dequeuniversity.com/rules/axe/4.9/heading-order

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  image-aspect-ratio failure for minScore assertion
       Displays images with incorrect aspect ratio
       https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  inspector-issues failure for minScore assertion
       Issues were logged in the `Issues` panel in Chrome Devtools

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  prioritize-lcp-image failure for minScore assertion
       Preload Largest Contentful Paint image
       https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  target-size failure for minScore assertion
       Touch targets do not have sufficient size or spacing.
       https://dequeuniversity.com/rules/axe/4.9/target-size

        expected: >=0.9
           found: 0
      all values: 0, 0, 0


  ✘  third-party-facades failure for minScore assertion
       Some third-party resources can be lazy loaded with a facade
       https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/

        expected: >=0.9
           found: 0.5
      all values: 0.5, 0.5, 0.5


  ✘  total-byte-weight failure for minScore assertion
       Avoid enormous network payloads
       https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/

        expected: >=0.9
           found: 0.5
      all values: 0.5, 0.5, 0.5


  ✘  unsized-images failure for minScore assertion
       Image elements do not have explicit `width` and `height`
       https://web.dev/articles/optimize-cls#images_without_dimensions

        expected: >=0.9
           found: 0.5
      all values: 0.5, 0.5, 0.5


  ✘  unused-javascript failure for maxLength assertion
       Reduce unused JavaScript
       https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/

        expected: <=0
           found: 2
      all values: 2, 2, 2


  ✘  uses-rel-preconnect failure for maxLength assertion
       Preconnect to required origins
       https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/

        expected: <=0
           found: 1
      all values: 2, 1, 1


  ✘  uses-responsive-images failure for maxLength assertion
       Properly size images
       https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/

        expected: <=0
           found: 4
      all values: 4, 4, 4


  ⚠️  interactive warning for minScore assertion
       Time to Interactive
       https://developer.chrome.com/docs/lighthouse/performance/interactive/

        expected: >=0.9
           found: 0.53
      all values: 0.53, 0.44, 0.4


  ⚠️  largest-contentful-paint warning for minScore assertion
       Largest Contentful Paint
       https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/

        expected: >=0.9
           found: 0.43
      all values: 0.07, 0.41, 0.43


  ⚠️  max-potential-fid warning for minScore assertion
       Max Potential First Input Delay
       https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/

        expected: >=0.9
           found: 0.87
      all values: 0.41, 0.87, 0.87


  ⚠️  modern-image-formats warning for maxLength assertion
       Serve images in next-gen formats
       https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/

        expected: <=0
           found: 1
      all values: 1, 1, 1


  ⚠️  render-blocking-resources warning for maxLength assertion
       Eliminate render-blocking resources
       https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/

        expected: <=0
           found: 2
      all values: 2, 2, 2


  ⚠️  uses-long-cache-ttl warning for maxLength assertion
       Serve static assets with an efficient cache policy
       https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/

        expected: <=0
           found: 7
      all values: 7, 7, 7

Assertion failed. Exiting with status code 1.
assert command failed. Exiting with status code 1.

```

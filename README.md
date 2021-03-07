# Performance

---

All the lighthouse reports were generated in a new Incognito Tab so as to avoid caching.

### Lighthouse - Mobile

<img src="screenshots/lighthouse-mobile.png" width=500 alt="Lighthouse - Mobile">

### Lighthouse - Desktop

<img src="screenshots/lighthouse-desktop.png" width=500 >

### Google PageSpeed Insights

<img src="screenshots/pagespeed.png" width=500 >

---

# Optimizations

- Used `lazy loading` to render long lists.
- Most of the render blocking was due to the fonts which was substantially reduced by using `link prefetching` and reduing the number of font-weights being requested.

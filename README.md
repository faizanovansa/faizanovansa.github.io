# Faiza Novansa - Personal Portfolio

A premium, handcrafted personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Designed and optimized for performance, accessibility, and SEO.

## ✨ Features

- **Dark Mode Premium Design** - Inspired by Vercel, Linear, and Apple
- **Blue Accent Theme** - Elegant gradient accents and aurora effects
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **Accessibility First** - WCAG 2.1 AA compliant
- **SEO Optimized** - Structured data, meta tags, and sitemap
- **High Performance** - Target 95+ Lighthouse score
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Smooth Animations** - Tasteful transitions and hover effects
- **PWA Ready** - Web app manifest for installation

## 📁 Project Structure

```
.
├── index.html                 # Main HTML file with semantic markup
├── style.css                  # All styling with CSS custom properties
├── script.js                  # Vanilla JavaScript interactions
├── manifest.webmanifest       # PWA manifest
├── favicon.svg               # SVG favicon
├── robots.txt                # SEO robots file
├── sitemap.xml              # XML sitemap
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette

- **Primary Background**: `#0a0e27` (Dark navy)
- **Secondary Background**: `#0f1335`
- **Tertiary Background**: `#151d42`
- **Primary Text**: `#f5f7fa` (Off-white)
- **Secondary Text**: `#b4b8c2` (Light gray)
- **Accent Color**: `#3b82f6` (Blue)
- **Accent Hover**: `#2563eb` (Darker blue)

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Font Stack**: Roboto, Helvetica Neue, Arial
- **Monospace**: Monaco, Courier New

### Spacing Scale

Uses a consistent 8px-based spacing system:
- `--space-xs`: 4px
- `--space-sm`: 8px
- `--space-md`: 16px
- `--space-lg`: 24px
- `--space-xl`: 32px
- `--space-2xl`: 48px
- `--space-3xl`: 64px
- `--space-4xl`: 96px

## 🚀 Getting Started

### Local Development

1. Clone the repository or download the files
2. Open `index.html` in a modern web browser
3. No build step or dependencies needed!

### Customization

#### Update Personal Information

Edit `index.html` to add your own:
- Name and title
- About section content
- Social media links
- Contact information

#### Add Your Projects

Replace the "Coming Soon" project cards with real projects:

```html
<article class="project-card">
  <div class="project-header">
    <h3>Your Project Name</h3>
  </div>
  <p class="project-description">Description of your project.</p>
  <div class="project-meta">
    <span class="badge">Technology</span>
    <span class="badge">Category</span>
  </div>
</article>
```

#### Customize Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
  --accent: #3b82f6;           /* Change blue to your color */
  --bg-primary: #0a0e27;       /* Change background */
  --text-primary: #f5f7fa;     /* Change text color */
}
```

#### Update Contact Links

In `index.html`, update the contact section with your actual social links and email:

```html
<a href="mailto:your.email@example.com">Email</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://yourblog.com">Blog</a>
```

## 🔧 Deployment

### GitHub Pages (Recommended)

1. Push the files to your GitHub repository at `github.com/yourusername/yourusername.github.io`
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://yourusername.github.io`

### Custom Domain

1. Update the canonical URL in `index.html`
2. Update `sitemap.xml` with your domain
3. Point your domain to GitHub Pages via CNAME record

### Other Hosting Providers

Works with any static hosting:
- Vercel
- Netlify
- AWS S3
- Firebase Hosting

Just upload all files and ensure `.xml` and `.webmanifest` files are served with correct MIME types.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and descriptions
- Keyboard navigation support
- Focus states for all interactive elements
- Proper heading hierarchy
- Color contrast compliance (WCAG AA)
- Skip-to-content link

## 🔍 SEO Optimization

- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- JSON-LD Person schema
- Proper heading hierarchy
- Meta descriptions and titles
- sitemap.xml
- robots.txt

## 📊 Performance

Target metrics:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Optimizations:
- No render-blocking resources
- Minimal CSS/JS (inline where practical)
- Optimized images and SVG
- Intersection Observer for animations
- Lazy loading support
- System fonts (no web font downloads)

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for older browsers.

## 📱 Responsive Breakpoints

- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🔐 Privacy & Security

- No external tracking
- No analytics by default
- No cookies
- Secure links (HTTPS required)
- No form data collection without consent

## 📝 License

This portfolio template is free to use and customize for your personal portfolio.

## 🤝 Contributing

Want to improve this template? Feel free to fork, modify, and share your improvements.

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [A11y Project](https://www.a11yproject.com/)

## 💡 Tips for Success

1. Keep content authentic and personal
2. Update projects regularly
3. Use high-quality images
4. Write compelling about section
5. Include real contact methods
6. Monitor Lighthouse scores
7. Test on multiple devices
8. Collect feedback from users

---

Built with care. No frameworks. No bloat. Just clean, professional code.

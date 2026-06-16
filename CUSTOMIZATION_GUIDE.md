# Portfolio Customization Guide

## 🎨 Quick Customizations

### Change Color Scheme

**File**: `tailwind.config.js`

Replace the primary colors (currently cyan/blue/purple):

```javascript
colors: {
  primary: {
    50: '#yourcolor1',
    100: '#yourcolor2',
    // ... up to 900
  },
}
```

Then update component classes or add custom color names.

### Change Fonts

**File**: `style.css`

Update the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### Modify Hero Section

**File**: `src/components/Hero.vue`

- Change the titles array: `const titles = [...]`
- Update the emoji in avatar: `<div class="text-8xl">💻</div>`
- Modify CTA button text and links
- Change avatar emoji or replace with actual image

### Update Skills Categories

**File**: `src/utils/data.js`

```javascript
skills: {
  'Your Category': ['Skill1', 'Skill2', 'Skill3'],
  // Add or remove categories
}
```

**File**: `src/components/Skills.vue`

Update category icons in `getCategoryIcon()` function.

### Add New Projects

**File**: `src/utils/data.js`

Add to `projects` array:

```javascript
{
  id: 6,
  title: 'Your Project Name',
  description: 'Your project description...',
  image: 'https://image-url.jpg',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/yourname/project',
  live: 'https://project-url.com',
  featured: true, // shows in featured filter
}
```

### Customize Experience Timeline

**File**: `src/utils/data.js`

Modify the `experience` array:

```javascript
{
  type: 'achievement', // or 'internship', 'certification'
  title: 'Your Achievement',
  achievement: 'Award Name',
  year: '2024',
  description: 'Description...',
}
```

### Change Navigation Links

**File**: `src/components/Navigation.vue`

Update `navLinks` array to add/remove sections:

```javascript
const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
```

## 🔧 Advanced Customizations

### Add New Section

1. Create `src/components/YourSection.vue`
2. Import in `src/App.vue`
3. Add to template
4. Add section ID for navigation: `<section id="yoursection">`

### Modify Animations

**File**: `tailwind.config.js`

Add custom animations:

```javascript
animation: {
  myAnimation: 'myAnimation 0.5s ease-in',
}

keyframes: {
  myAnimation: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  }
}
```

Use in components: `class="animate-myAnimation"`

### Customize Glassmorphism Effect

**File**: `style.css` or `src/style.css`

```css
.glass {
  @apply backdrop-blur-md bg-white/10 border border-white/20;
  /* Adjust blur amount, opacity, border */
}
```

### Change Spacing & Sizing

All spacing uses Tailwind's spacing scale (p-4, m-8, etc.). Modify in components directly or create custom sizes in `tailwind.config.js`:

```javascript
spacing: {
  'custom': '1.5rem',
}
```

### Modify Border Radius

Components use standard Tailwind radius (rounded-lg, rounded-2xl, etc.). Change in components:

```html
<!-- From -->
<div class="rounded-2xl">

<!-- To -->
<div class="rounded-3xl">
```

## 🎯 Content Updates

### Update Social Links

**File**: `src/utils/data.js`

```javascript
social: [
  { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:your@email.com', icon: 'mail' },
]
```

### Update Contact Information

**File**: `src/utils/data.js`

```javascript
contact: {
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  message: 'Your contact message...',
}
```

### Change Site Title and Meta Tags

**File**: `index.html`

```html
<title>Your Name - Your Title Portfolio</title>
<meta name="description" content="Your description...">
<meta property="og:title" content="Your Name - Portfolio">
```

## 🖼️ Image Optimization

### Replace Project Images

Use high-quality images (at least 800x600px) for projects:

1. Upload to service like:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)
   - Your own hosting
   - GitHub CDN

2. Update URL in `src/utils/data.js`:

```javascript
image: 'https://your-image-url.jpg'
```

### Set Favicon

Replace `/public/favicon.svg` with your own.

## 🌟 Performance Optimization

### Image Optimization

Consider using:
- Compressed images
- WebP format for modern browsers
- Responsive image sizes

### Code Splitting

Vite automatically code-splits components. No action needed!

### Production Build Size

```bash
npm run build
# Check dist folder size
```

## 📊 Analytics Integration

To add Google Analytics:

1. Get your Measurement ID from Google Analytics
2. Add to `index.html` before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## ✉️ Contact Form Integration

Currently logs to console. To send emails:

### Option 1: FormSpree
1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Get endpoint URL
4. Modify `src/components/Contact.vue`:

```javascript
const submitForm = async () => {
  const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(form.value),
    headers: { 'Content-Type': 'application/json' },
  })
  // Handle response
}
```

### Option 2: Netlify Forms
If deployed on Netlify, add `netlify` attribute to form:

```html
<form netlify>
  <!-- form fields -->
</form>
```

## 🌙 Dark/Light Mode Implementation

The toggle button exists but needs implementation:

```javascript
// In App.vue or composable
const darkMode = ref(true)

watch(darkMode, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('darkMode', val)
})
```

Add to `tailwind.config.js`:

```javascript
darkMode: 'class',
```

## 🔐 SEO Optimization

Already included:
- Semantic HTML
- Meta tags
- Open Graph tags
- Mobile viewport
- Accessibility features (alt text, ARIA labels)

Additional tips:
- Use descriptive alt text for images
- Add structured data (Schema.org)
- Submit sitemap to Google Search Console
- Create robots.txt in public folder

## 📱 Mobile Testing

Test on:
- iPhone 12/13/14
- iPad
- Android phones
- Tablets
- Different browsers (Chrome, Firefox, Safari, Edge)

Use Chrome DevTools device emulation (F12).

## 🚀 Deployment Customizations

### For Vercel

Add `vercel.json` in root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### For Netlify

Add `netlify.toml` in root:

```toml
[build]
command = "npm run build"
publish = "dist"
```

## 📝 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Styles not loading | Check Tailwind build process, clear cache |
| Images not showing | Verify image URLs, check browser console |
| Animations not working | Check tailwind.config.js keyframes, browser support |
| Form not submitting | Check browser console, ensure backend is configured |
| Responsive issues | Test with DevTools, check mobile breakpoints |

---

For more help, refer to:
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)

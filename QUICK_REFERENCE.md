# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# Setup
npm install              # Install all dependencies

# Development
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Create production build
npm run preview         # Test production build locally

# Port conflict?
npm run dev -- --port 3000  # Use different port
```

## 📝 Most Important Files to Edit

### 1. Your Information (MOST IMPORTANT)
📄 **`src/utils/data.js`**
- Update name, title, description
- Change social links
- Update contact info
- Modify skills
- Add projects
- Update experience

### 2. Colors & Theme
📄 **`tailwind.config.js`**
- Change primary colors
- Modify animations
- Update spacing

### 3. Component Content
📄 **`src/components/*.vue`**
- Update text in sections
- Change button labels
- Modify section headings

### 4. Site Title & Meta
📄 **`index.html`**
- Update page title
- Change meta description
- Update og: tags

## 🎨 Key CSS Classes

```html
<!-- Glass effect -->
<div class="glass">Glass card</div>

<!-- Gradient text -->
<div class="gradient-text">Gradient text</div>

<!-- Animations -->
<div class="animate-fadeIn">Fade in</div>
<div class="animate-slideUp">Slide up</div>
<div class="animate-float">Float</div>

<!-- Spacing -->
<div class="p-8 m-4 gap-6">Padding, margin, gap</div>

<!-- Colors -->
<button class="bg-cyan-400 text-dark-900">
  Cyan button
</button>
```

## 🎯 Common Customizations

### Change Hero Title
**File**: `src/components/Hero.vue`
```javascript
const titles = [
  'AI Engineer',           // Change these
  'Full Stack Developer',
  'ML Enthusiast',
]
```

### Update Your Skills
**File**: `src/utils/data.js`
```javascript
skills: {
  'Your Category': ['Skill1', 'Skill2', 'Skill3'],
}
```

### Add a Project
**File**: `src/utils/data.js`
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Description...',
  image: 'https://image-url.jpg',
  technologies: ['Vue', 'Python'],
  github: 'https://github.com/...',
  live: 'https://...',
  featured: true,
}
```

### Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change these
    600: '#0284c7',
  }
}
```

## 📱 Testing Checklist

- [ ] Works on desktop (1920px, 1440px, 1024px)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px, 425px)
- [ ] All links work
- [ ] All animations smooth
- [ ] Form submits
- [ ] Navigation responsive
- [ ] Images load properly
- [ ] Text readable on all sizes
- [ ] Touch targets big enough (44px+)

## 🌐 Deployment Checklist

- [ ] Update all your information
- [ ] Replace placeholder images
- [ ] Test on mobile
- [ ] Check all links
- [ ] Verify social links work
- [ ] Test form submission
- [ ] Run `npm run build`
- [ ] Deploy to chosen platform

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Styles not loading | `npm install` then restart dev server |
| Images not showing | Check image URL in console (F12) |
| Component not updating | Clear browser cache (Ctrl+Shift+Del) |
| Build fails | Delete `node_modules` & `npm install` again |

## 📦 Dependencies

```
vue                 3.5.34      Vue framework
vite                8.0.12      Build tool
tailwindcss         3.4.0       Styling
autoprefixer        10.4.17     CSS prefixes
postcss             8.4.32      CSS processor
```

## 🎬 Animation Classes

```
animate-fadeIn          Fade in
animate-slideUp         Slide up from bottom
animate-slideDown       Slide down from top
animate-slideInLeft     Slide from left
animate-slideInRight    Slide from right
animate-float           Floating up/down
animate-glow            Glowing effect
animate-pulse           Pulsing effect
animate-bounce          Bouncing
```

## 🎨 Color Palette

```
Cyan:    #06b6d4  → text-cyan-400, bg-cyan-500
Blue:    #0ea5e9  → text-blue-400, bg-blue-500
Purple:  #a855f7  → text-purple-400, bg-purple-500
Dark:    #1f2937  → text-dark-900, bg-dark-900
Gray:    #6b7280  → text-gray-400, text-gray-500
```

## 📐 Responsive Prefixes

```
sm:     640px
md:     768px (tablet)
lg:     1024px (desktop)
xl:     1280px
2xl:    1536px

Example:
<div class="text-sm md:text-lg lg:text-xl">
```

## 💻 Development Shortcuts

| Key | Action |
|-----|--------|
| F12 | Open DevTools |
| Ctrl+Shift+I | Inspect element |
| Ctrl+R | Refresh page |
| Ctrl+Shift+Del | Clear cache |
| Ctrl+K | Search files in VS Code |

## 📚 Resources

- [Vue 3 Docs](https://vuejs.org) - Framework
- [Vite Docs](https://vitejs.dev) - Build tool
- [Tailwind Docs](https://tailwindcss.com) - CSS framework
- [MDN Web Docs](https://developer.mozilla.org) - Web standards

## 🔗 Navigation IDs

```html
id="home"        → Hero section
id="about"       → About section
id="skills"      → Skills section
id="projects"    → Projects section
id="experience"  → Experience section
id="contact"     → Contact section
```

Links: `<a href="#home">Home</a>`

## 🎯 Performance Tips

1. ✅ Images under 1MB
2. ✅ Minimize node_modules usage
3. ✅ Use production build for deployment
4. ✅ Compress images
5. ✅ Lazy load images (if added later)

## 🚀 Deploy Commands

```bash
# Build for production
npm run build

# Vercel (recommended)
# Push to GitHub → Connect on vercel.com

# Netlify
npm run build
# Drag dist/ folder to netlify.com

# GitHub Pages
npm run build
git add dist -f
git commit -m "Deploy"
git push
```

## 📞 Support Resources

**For Vue questions**: [Vue Forum](https://forum.vuejs.org)
**For Tailwind questions**: [Tailwind Discord](https://tailwindcss.com/chat)
**For Vite issues**: [Vite GitHub Issues](https://github.com/vitejs/vite/issues)

## ✨ You're All Set!

```bash
1. npm install
2. npm run dev
3. Edit src/utils/data.js
4. npm run build
5. Deploy! 🎉
```

**Happy coding!** 🚀

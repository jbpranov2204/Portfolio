# Pranov JB Portfolio - Setup & Installation Guide

## 📋 Pre-requisites

- **Node.js**: v14.0.0 or higher (download from [nodejs.org](https://nodejs.org))
- **npm**: Comes with Node.js
- **Git**: (Optional) For version control
- **Code Editor**: VS Code recommended with Volar extension

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd vite-project
npm install
```

This installs:
- Vue 3
- Vite (build tool)
- Tailwind CSS
- PostCSS
- Autoprefixer

### 2. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to: **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 File Structure After Setup

```
vite-project/
├── src/
│   ├── components/          ✓ Created
│   │   ├── ParticlesBackground.vue
│   │   ├── Navigation.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   ├── Experience.vue
│   │   ├── Contact.vue
│   │   ├── Footer.vue
│   │   └── BackToTop.vue
│   ├── composables/         ✓ Created
│   │   └── useAnimations.js
│   ├── utils/              ✓ Created
│   │   └── data.js
│   ├── App.vue             ✓ Updated
│   ├── main.js             ✓ Ready
│   └── style.css           ✓ Updated
├── public/
├── index.html              ✓ Updated
├── vite.config.js          ✓ Ready
├── tailwind.config.js      ✓ Created
├── postcss.config.js       ✓ Created
├── package.json            ✓ Updated
└── README.md               ✓ Updated
```

## 🎨 Customization Guide

### 1. Update Your Personal Information

Edit `src/utils/data.js`:

```javascript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title | Full Stack Developer | Your Focus',
  description: 'Your professional description...',
  social: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:your@email.com', icon: 'mail' },
  ],
  // ... more data
}
```

### 2. Update Skills

Add or modify skills in the `skills` object:

```javascript
skills: {
  'Your Category': ['Skill 1', 'Skill 2', 'Skill 3'],
  // ...
}
```

### 3. Add Projects

Modify the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    image: 'https://your-image-url.jpg',
    technologies: ['Vue.js', 'Python', 'FastAPI'],
    github: 'https://github.com/yourname/project',
    live: 'https://your-project-url.com',
    featured: true,
  },
  // ...
]
```

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your colors */ },
      dark: { /* Your colors */ },
    },
  },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite settings
6. Click Deploy

Your portfolio will be live at: `https://your-name.vercel.app`

### Deploy to Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Your portfolio is live!

### Deploy to GitHub Pages

1. Update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Run:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push
```

## 🛠️ Development Tips

### Hot Module Replacement (HMR)
Changes to files automatically reload in the browser - no manual refresh needed!

### Vue DevTools
Install the [Vue DevTools](https://devtools.vuejs.org/) browser extension for debugging.

### Tailwind IntelliSense
Install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for VS Code autocomplete.

### Volar Extension
Install [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) for Vue 3 TypeScript support in VS Code.

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Module Not Found Error
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf .vite
npm run build
```

## 📱 Testing Responsiveness

1. Open DevTools (F12)
2. Click the device toggle (mobile icon)
3. Test on different screen sizes

## 🚀 Production Checklist

Before deploying:

- [ ] Update all personal information in `data.js`
- [ ] Replace placeholder project images
- [ ] Test all links work correctly
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Update social media links
- [ ] Set up contact form backend (optional)
- [ ] Add Google Analytics (optional)
- [ ] Check performance with Lighthouse
- [ ] Test accessibility with WCAG standards

## 📚 Resources

- [Vue 3 Docs](https://vuejs.org)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 💬 Need Help?

1. Check the README.md for detailed documentation
2. Review component code - well-commented
3. Check browser console for errors (F12)
4. Verify all npm dependencies are installed

## 🎉 You're Ready!

Your portfolio is now set up and ready to showcase your amazing work!

Happy coding! 🚀

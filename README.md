# Pranov JB - Developer Portfolio

A modern, professional, and responsive developer portfolio website built with Vue 3, Vite, and Tailwind CSS. Features a dark theme with glassmorphism effects, smooth animations, and an impressive showcase of AI/ML and full-stack development projects.

## ✨ Features

- **Dark Theme with Glassmorphism**: Premium glass-effect cards with backdrop blur
- **Smooth Animations**: Scroll reveals, fade-ins, and interactive transitions
- **Modern Gradient Accents**: Cyan, blue, and purple gradient throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Animated Particles Background**: Dynamic floating particles in hero section
- **Sticky Navigation**: Dynamic navbar that adapts on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Animations**: Elements animate in as you scroll
- **Dark/Light Mode Toggle**: (Framework ready)
- **Typing Effect**: Animated title in hero section
- **Back-to-Top Button**: Smooth scroll to top

## 📋 Sections

### 1. **Hero Section**
- Animated profile introduction
- Name: Pranov JB
- Titles: AI Engineer | Full Stack Developer | ML Enthusiast
- Call-to-action buttons (Resume & Contact)
- Social media links
- Animated background particles
- Scroll indicator

### 2. **About Section**
- Professional summary
- Education timeline
- Quick stats cards
- Interest highlights

### 3. **Skills Section**
- Organized by category:
  - Programming: Python, Java, SQL, JavaScript, TypeScript
  - Frontend: Vue.js, Flutter, HTML5, CSS3, Tailwind CSS
  - Backend: Flask, FastAPI, Node.js, REST APIs
  - AI/ML: Machine Learning, Deep Learning, GenAI, LLMs, RAG
  - Databases: SQLite, MySQL, Oracle, MongoDB
  - DevOps: Docker, Git, Cloud Platforms, CI/CD
- Animated skill cards with progress indicators
- Featured technology stack

### 4. **Projects Section**
- Featured project showcase
- Project cards with images, descriptions, and technologies
- Filter by featured projects
- Direct links to GitHub and live demos
- Hover effects and animations

### 5. **Experience & Achievements**
- Timeline view of achievements and experience
- Achievement badges and awards
- Internship experience
- Certifications
- Statistics cards

### 6. **Contact Section**
- Contact information cards
- Professional contact form
- Social media integration
- Email, phone, and location details

### 7. **Footer**
- Quick navigation links
- Social media links
- Copyright information
- Links to policies

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Vue Transitions & CSS Animations
- **Font**: Inter (primary), Fira Code (mono)
- **JavaScript**: ES6+

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd vite-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:5173`

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── Navigation.vue          # Sticky navbar with mobile menu
│   │   ├── Hero.vue                # Hero section with typing effect
│   │   ├── About.vue               # About section with timeline
│   │   ├── Skills.vue              # Skills grid with categories
│   │   ├── Projects.vue            # Project showcase with filters
│   │   ├── Experience.vue          # Timeline of achievements
│   │   ├── Contact.vue             # Contact form and information
│   │   ├── Footer.vue              # Footer with links
│   │   ├── BackToTop.vue           # Back to top button
│   │   └── ParticlesBackground.vue # Animated particles
│   ├── composables/
│   │   └── useAnimations.js        # Animation composables
│   ├── utils/
│   │   └── data.js                 # Portfolio data and helpers
│   ├── App.vue                     # Main app component
│   ├── main.js                     # Vue app entry point
│   └── style.css                   # Global styles with Tailwind
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Project dependencies

```

## 🎨 Customization

### Updating Portfolio Data

Edit `src/utils/data.js` to customize:
- Personal information (name, title, description)
- Social media links
- About section content
- Skills and categories
- Projects and descriptions
- Experience timeline
- Contact information

### Styling

The portfolio uses Tailwind CSS for styling. Key customizations:
- Colors defined in `tailwind.config.js`
- Custom animations in `tailwind.config.js` keyframes
- Global styles in `src/style.css`
- Component-scoped styles in Vue files

### Modifying Components

Each section is a separate Vue component that can be customized:
- Update content directly in component files
- Modify colors and styling in scoped styles
- Add new sections by creating new components and importing in `App.vue`

## 🎯 Key Features Explained

### Scroll Reveal Animation
Components automatically animate in as you scroll using the `useScrollReveal` composable from Intersection Observer API.

### Typing Effect
The hero section displays an animated typing effect for the titles using the `useTypeWriter` composable.

### Glassmorphism
Glass effect cards use:
```css
@apply backdrop-blur-md bg-white/10 border border-white/20;
```

### Responsive Design
All components are built with responsive grid layouts using Tailwind's responsive prefixes (sm:, md:, lg:).

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (default styles)
- **Tablet**: 768px - 1024px (md: prefix)
- **Desktop**: > 1024px (lg: prefix)

## 🔗 Social Integration

Social media links are configured in `src/utils/data.js`:
- GitHub
- LinkedIn
- Email

Update the `url` field to link to your actual social profiles.

## 📧 Contact Form

The contact form in the Contact section includes:
- Form validation
- Submission feedback
- Reset functionality
- (Note: Currently logs to console; connect to backend/email service as needed)

## 🌐 Deployment

### Vercel (Recommended for Vue/Vite projects)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages
Update `vite.config.js` with your repository name and build.

## 🎓 Learning Resources

- [Vue 3 Documentation](https://vuejs.org)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 📝 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- [ ] Dark/Light mode toggle implementation
- [ ] Blog section for articles
- [ ] Testimonials from clients
- [ ] Download resume functionality
- [ ] Backend integration for contact form
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Search functionality
- [ ] Multi-language support

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or issues, please refer to the Vue 3, Vite, and Tailwind CSS documentation links above.

---

Built with ❤️ using Vue 3 & Tailwind CSS

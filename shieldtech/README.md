# Shield Tech Inc. Website

A premium, luxury MSP website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Vite** - Lightning fast development
- ⚛️ **React 18** - Latest React with hooks
- 🎨 **Tailwind CSS** - Utility-first styling
- 🎬 **Framer Motion** - Smooth animations
- 📱 **Fully Responsive** - Mobile-first design
- 🔒 **CyberPulse Login** - PSA portal access button
- ✨ **Luxury Gold & Black Theme** - Premium aesthetic

## Sections

1. **Hero** - Animated landing with CTAs
2. **Services** - Managed IT, Cybersecurity, Cloud, Help Desk, VoIP, Network
3. **Stats** - Animated counters
4. **Compliance** - SOC 2, HIPAA, PCI DSS, NIST, CMMC, ISO 27001, GDPR
5. **About** - Company story with animated shield graphic
6. **Contact** - Form with validation (react-hook-form)
7. **Footer** - Links, contact info, social

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Configuration

### Update CyberPulse Login URL

In `src/components/Navbar.jsx`, find and replace:
```jsx
href="https://your-cyberpulse-url.com"
```

### Update Contact Info

Edit `src/components/Footer.jsx` to update:
- Phone number
- Email address
- Physical address
- Social media links

### Connect Contact Form

The contact form is ready for integration. Options:

**EmailJS (Recommended for simplicity):**
1. Sign up at emailjs.com
2. Install: `npm install @emailjs/browser`
3. Update `src/components/Contact.jsx` with your EmailJS credentials

**Custom Backend:**
Replace the `onSubmit` function in `Contact.jsx` with your API call.

## Tech Stack

| Package | Purpose |
|---------|---------|
| react | UI framework |
| react-router-dom | Routing |
| framer-motion | Animations |
| lucide-react | Icons |
| react-intersection-observer | Scroll animations |
| react-hook-form | Form handling |
| tailwindcss | Styling |
| vite | Build tool |

## Customization

### Colors

Edit `tailwind.config.js`:
```js
colors: {
  gold: {
    DEFAULT: '#D4AF37',  // Main gold
    light: '#F4E4BC',    // Hover/accent
    dark: '#A8860C',     // Dark variant
  },
  // ...
}
```

### Fonts

Currently using:
- **Display:** Cormorant Garamond (headings)
- **Body:** Montserrat (text)

Change in `index.html` and `tailwind.config.js`.

## Deployment

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting
```bash
npm run build
# Upload `dist` folder contents to your server
```

## License

© 2026 Shield Tech Inc. All rights reserved.

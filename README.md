# 🙏 Kali Maa Mandir - Divine Website 🙏

## Overview

A magnificent, modern, and highly interactive single-page website for the sacred **Kali Maa Mandir** located in Jogiyar, Areraj, East Champaran, Bihar. The website combines spiritual elegance with cutting-edge web technologies, featuring:

- ✨ Smooth scroll animations powered by AOS library
- 🎪 Captivating parallax effects on the hero section
- 💫 Glowing and pulsing hover effects with divine aesthetics
- 📱 100% mobile-responsive design
- 🎨 Culturally resonant color scheme (Crimson Red, Gold, Mystic Black)
- 🔍 SEO-optimized structure with best practices

---

## 📂 Directory Structure

```
KaliMandir-Areraj/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling and responsive design
├── js/
│   └── script.js             # JavaScript functionality
├── images/
│   └── hero-kalimaa.jpg      # Hero section background image (add your own)
├── photos/                    # Gallery images folder (add your temple photos here)
│   ├── temple1.jpg
│   ├── temple2.jpg
│   └── ...
└── README.md                  # This file
```

---

## 🎨 Design System

### Color Palette
- **Mystic Black**: `#0B0C10` - Deep cosmic background
- **Crimson Red**: `#D2143A` - Divine power and energy
- **Deep Red**: `#8B0000` - Sacred vibrations
- **Gold/Amber**: `#FFD700` - Divine accents and highlights
- **White**: `#ffffff` - Spiritual clarity

### Typography
- **Headings**: Playfair Display, Cinzel (elegant serif fonts)
- **Body Text**: Poppins, Inter (clean sans-serif fonts)

---

## ✨ Features

### 1. **Navigation Bar**
   - Fixed, responsive navbar with golden border
   - Smooth scroll navigation
   - Mobile hamburger menu
   - Animated logo with floating icon
   - Glowing color transitions

### 2. **Hero Section**
   - Full-screen immersive background with parallax effect
   - Powerful headline: "Experience the Divine Grace and Power of Maa Kali, Jogiyar"
   - Floating divine icons with smooth animations
   - Engaging "Seek Her Blessings" CTA button with glowing effects
   - Enhanced shadow effects and text glow

### 3. **About & History Section**
   - Dual-column layout with spiritually themed cards
   - Rich content about Divine Mother's grace and temple legacy
   - 3D hover effects with radial gradients
   - AOS scroll animations with fade and slide effects

### 4. **Divine Gallery**
   - Responsive masonry-style grid
   - Lazy loading support for performance
   - Dynamic image loading from `photos/` folder
   - Enhanced lightbox with golden glows
   - Elegant fallback placeholder design

### 5. **Contact & Location Section**
   - Contact information cards with gradient animations
   - Email link: brajeshkumar609@gmail.com
   - Location: Jogiyar, Areraj, East Champaran, Bihar, India
   - Google Map placeholder (ready for embed)

### 6. **Advanced Animations**
   - Smooth fade-in/slide-up reveals on scroll
   - Parallax scrolling on hero background
   - Glowing and pulsing effects on text and borders
   - Floating icon animations with drop shadows
   - Button ripple and shine effects
   - AOS library integration with mirror scrolling

---

## 🚀 Getting Started

### 1. **Setup**

Clone or download the repository:
```bash
git clone https://github.com/yourusername/KaliMandir-Areraj.git
cd KaliMandir-Areraj
```

### 2. **Add Your Assets**

**Hero Image:**
- Replace `images/hero-kalimaa.jpg` with your hero background image
- Recommended size: 1920x1080px or larger
- Suggested: A stunning temple image or Maa Kali representation

**Gallery Photos:**
- Add your temple photos to the `photos/` folder
- Name them: `temple1.jpg`, `temple2.jpg`, etc.
- Recommended size: 600x600px (square aspect ratio)
- Supported formats: JPG, PNG, WebP

### 3. **Add Google Map**

Open `index.html` and find the map placeholder section (around line 181):

```html
<!-- Replace the placeholder with actual Google Map embed: -->
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

Get your embed code from: [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)

### 4. **Deploy**

Optional: Deploy to your hosting platform:

- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect your GitHub repo for automatic deployment
- **Vercel**: Import project from GitHub
- **Traditional Hosting**: Upload files via FTP/SFTP

---

## 📱 Responsiveness

The website is fully responsive across all devices:

- **Desktop**: Full animations, parallax, and glowing effects
- **Tablet**: Optimized grid layouts and touch-friendly buttons
- **Mobile**: Single-column layouts, hamburger menu, optimized animations

Breakpoints:
- Desktop: > 1024px
- Tablet: 768px - 1024px  
- Mobile: < 768px

---

## 🔍 SEO Optimization

✅ **Implemented Best Practices:**
- Semantic HTML5 structure with proper heading hierarchy
- Meta tags for title, description, keywords
- Open Graph tags for enhanced social sharing
- Alt attributes on all images for accessibility
- Mobile viewport configuration
- Fast loading with optimized assets
- Structured data ready for implementation

---

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with accessibility in mind
- **CSS3**: Modern styling with flexbox, grid, and advanced animations
- **JavaScript (Vanilla)**: Interactive functionality without dependencies
- **AOS Library**: Scroll-triggered animations
- **Google Fonts**: Premium typography (Cinzel, Playfair, Poppins, Inter)
- **Responsive Design**: Mobile-first approach

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `css/styles.css` (lines 8-31):

```css
:root {
    --mystic-black: #0B0C10;    /* Modify here */
    --crimson-red: #D2143A;     /* Modify here */
    --gold: #FFD700;            /* Modify here */
    /* ... other variables ... */
}
```

### Modify Content

Edit `index.html` to update:
- Hero headline and description (lines 102-110)
- About section text (lines 139-152)
- Contact information (lines 214-227)
- Footer tagline (line 279)

### Adjust Animations

Modify AOS settings in `js/script.js` (line 18):

```javascript
AOS.init({
    duration: 800,      // Animation duration in ms
    easing: 'ease-in-out',
    once: false,        // Animate every scroll
    mirror: true,       // Reverse animation on scroll up
    offset: 100,        // Trigger offset from viewport
});
```

---

## 📞 Contact & Support

**Email**: brajeshkumar609@gmail.com

**Location**: Jogiyar, Areraj, East Champaran, Bihar, India

---

## 📜 License

This website template is created for Kali Maa Mandir, Jogiyar. All content and design are protected.

---

## 🙏 Spiritual Acknowledgment

This website is built with deep spiritual reverence for **Maa Kali** and is dedicated to all devotees seeking her divine grace, protection, and liberation.

**May the cosmic power of Maa Kali illuminate our path and grant us eternal peace.**

---

## 💡 Quick Tips

1. **Performance**: Compress images (use tools like TinyPNG) before adding to `photos/` folder
2. **SEO**: Update meta descriptions and keywords in `<head>` section
3. **Analytics**: Add Google Analytics or similar tracking (optional)
4. **SSL**: Enable HTTPS on your hosting for security and SEO
5. **Backup**: Regularly backup your photos and content files
6. **Accessibility**: Test with screen readers and keyboard navigation

---

**Last Updated**: 2024  
**Version**: 1.0  
**Status**: Production Ready ✅

---

*Developed with cosmic reverence and spiritual devotion* 🌙✨

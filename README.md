# AI SLM Website

A modern, fully-featured Next.js 15 landing page for an AI Small Language Model (SLM) builder platform.

## 🚀 Features

- **Hero Section**: Animated gradient text, CTA buttons, and floating orbs with stats showcase
- **Features Grid**: 8 feature cards with hover effects and stagger animations
- **How It Works**: 4-step process with connecting lines and slide-in animations
- **Interactive Demo**: Tab-switching demo with visual builder and code API preview
- **Testimonials Carousel**: User feedback with navigation controls
- **Pricing Section**: 3-tier pricing with comparison tables
- **Footer**: Comprehensive navigation and social links
- **Fully Responsive**: Mobile-first design with breakpoints for all devices

## 🎨 Design & Styling

- **Glass Morphism**: Frosted glass effects with blur and transparency
- **Liquid Glass**: Gradient overlays with smooth transitions
- **Animated Gradients**: Dynamic background animations
- **Gradient Text**: Purple → Cyan → Blue text effects
- **Glow Effects**: Button and card glows on hover
- **Floating Orbs**: Animated background elements with parallax motion
- **Custom Scrollbar**: Styled gradient scrollbar
- **Smooth Animations**: Fade-in, scale, slide effects powered by Framer Motion

## 🛠️ Technology Stack

- **Next.js 15**: Latest App Router with server components
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations and transitions
- **PostCSS**: CSS processing

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero.tsx            # Hero section with stats
│   ├── Features.tsx        # Feature cards grid
│   ├── HowItWorks.tsx      # Step-by-step process
│   ├── Demo.tsx            # Interactive demo
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── Pricing.tsx         # Pricing plans
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── animations.ts       # Framer Motion animation variants
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 🎯 Key Components

### Hero
- Animated gradient text
- CTA buttons with hover effects
- Floating animated orbs
- Stats showcase (users, models, uptime, speed)

### Features
- 8 feature cards with icons
- Hover scale and glow effects
- Stagger animations on scroll
- Grid layout (responsive)

### How It Works
- 4-step process visualization
- Connecting lines between steps
- Slide-in animations from left/right
- Numbered steps with icons

### Demo
- Tab-switching interface
- Visual builder preview
- Code API example
- Animated progress bars

### Testimonials
- Carousel with 6 testimonials
- Navigation controls
- Star ratings
- User avatars and roles

### Pricing
- 3-tier pricing structure
- Feature comparison
- Popular plan highlight
- Hover effects on cards

## 🎨 Color Palette

- **Primary**: Purple (#a855f7) → Cyan (#06b6d4) → Blue (#3b82f6)
- **Background**: Dark (#0a0a14)
- **Glass**: Translucent overlays with blur
- **Accents**: Pink (#ec4899) for highlights

## 📱 Responsive Design

- **Mobile**: 375px+ (single column)
- **Tablet**: 768px+ (2 columns)
- **Desktop**: 1024px+ (4 columns)
- **Large**: 1280px+ (full layout)

## ✨ Animations

All animations are built with Framer Motion:
- Fade-in on scroll
- Stagger animations for grids
- Hover scale effects
- Button tap animations
- Floating orbs with infinite loops
- Gradient shifts
- Smooth transitions

## 🔧 Customization

Edit the components in `/components` to customize content, or modify `/app/globals.css` to change the styling theme.

## 📄 License

This project is built for demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

# EdgesOf Solutions - Enterprise Website

A premium, futuristic AI-cloud style website for EdgesOf Solutions, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Futuristic Design**: Neon gradients, AI elements, holographic UI
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, performance optimized
- **Contact Form**: Functional contact form with API endpoint
- **Fast Performance**: Optimized images, lazy loading, minimal bundle size

## 📄 Pages

1. **Home** - Hero section with futuristic dashboard, features, client logos
2. **Solutions** - AI Automation, Cloud Engineering, Data Analytics, Edge Computing, Industry Solutions
3. **Products** - EdgeFlow AI, EdgeCloud OS, EdgeHealth EMR, EdgeCRM Mini, EdgeDashboard
4. **About** - Mission, vision, founder story, values, why choose us
5. **Contact** - Contact form with office locations

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/itvaibhav-jpg/edgesof-site.git

# Navigate to project directory
cd edgesof-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Content

All page content is in the respective page files:
- `app/page.tsx` - Home page
- `app/solutions/page.tsx` - Solutions page
- `app/products/page.tsx` - Products page
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

### Update Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Color scheme defined in Tailwind config

### Update Components

- Navbar: `components/Navbar.tsx`
- Footer: `components/Footer.tsx`

## 📧 Contact Form Integration

The contact form API is at `app/api/contact/route.ts`. To integrate with SendGrid:

1. Install SendGrid: `npm install @sendgrid/mail`
2. Add your SendGrid API key to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```
3. Uncomment the SendGrid code in `app/api/contact/route.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📱 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🎯 Brand Colors

- Navy Dark: `#011627`
- Navy Medium: `#072540`
- Cyan Glow: `#00D9FF`
- Aqua Bright: `#00FFF0`

## 📄 License

© 2025 EdgesOf Solutions. All rights reserved.

## 👨‍💻 Developer

Built by Kumar Vaibhav for EdgesOf Solutions

---

For support or inquiries: contact@edgesof.com

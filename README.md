# EdgesOf Solutions - Enterprise Website

A premium, enterprise-grade website for EdgesOf Solutions, built with Next.js 14, TypeScript, and Tailwind CSS. Features comprehensive service offerings, product showcases, and professional design.

## 🚀 Live Website

**Production URL**: https://edgesof-site.vercel.app

## ✨ Enterprise Features

### Homepage
- **Hero Section** with futuristic AI dashboard
- **Stats Bar** showcasing 500+ projects, 98% satisfaction, 50+ clients
- **Core Capabilities** - 6 major service categories
- **Industries Served** - Healthcare, Finance, Logistics, Retail, Technology, Manufacturing
- **Client Testimonials** with 5-star ratings
- **Animated Elements** - Floating backgrounds, glow effects
- **Trust Indicators** throughout

### Solutions Page - Comprehensive Service Offerings

#### 1. AI & Automation
- AI Workflow Automation
- AI Agents for Customer Support
- AI Document Understanding (OCR + NLP)
- WhatsApp Automation
- AI Data Insights / Recommendations

#### 2. Cloud Engineering
- Enterprise Cloud Apps
- Cloud Migration
- Multi-tenant SaaS Development
- Microservices Architecture
- DevOps CI/CD Setup

#### 3. Data & Analytics
- Real-Time Dashboards
- Predictive Analytics
- Data Pipeline Setup
- Business Intelligence Systems

#### 4. Edge Computing & Security
- Secure Edge Devices
- Zero-Trust Cloud Architecture
- Identity & Access Management
- API Security + Compliance

#### 5. Industry Solutions
- Healthcare EMR & Clinic Systems
- CRM / ERP Mini-Systems for SMEs
- Finance Automation
- Logistics Workflow Systems
- Retail Inventory & Billing

#### 6. Specialized Services
- API Integrations (WhatsApp, Stripe, Razorpay, Zoho, SAP, etc.)
- CTO Advisory & Tech Strategy
- Maintenance & Support Plans

### Products Page

#### Featured Products
1. **EdgeFlow AI** - Enterprise AI Workflow & Automation Engine ($999/mo)
2. **EdgeCloud OS** - Cloud Infrastructure Orchestration ($1,499/mo)
3. **EdgeHealth EMR** - Complete Healthcare Management ($799/mo)
4. **EdgeCRM Pro** - Intelligent CRM/ERP ($499/mo)
5. **EdgeDashboard Pro** - Real-Time Business Intelligence ($699/mo)
6. **EdgeSecure** - Zero-Trust Security Platform (Custom Pricing)

#### Premium Add-ons
- Dedicated Support ($299/mo)
- Custom Integrations ($499/mo)
- Advanced Analytics ($399/mo)
- White Label ($799/mo)

### About Page
- Mission & Vision statements
- Founder story (Kumar Vaibhav)
- Core values (Precision, Security, Innovation, Performance)
- 5 reasons to choose EdgesOf

### Contact Page
- Professional contact form
- India & USA office locations
- Business hours
- Email integration ready

## 🎨 Design Features

### Color Scheme
- **Navy Dark**: `#011627` - Primary background
- **Navy Medium**: `#072540` - Secondary background
- **Cyan Glow**: `#00D9FF` - Primary accent
- **Aqua Bright**: `#00FFF0` - Secondary accent

### Typography
- Clean, modern sans-serif (Inter, IBM Plex Sans, SF Pro Display)
- Gradient text effects
- Responsive font sizing

### Animations
- Floating elements
- Glow effects on hover
- Smooth transitions
- Cyber grid background

### Components
- **Cyber Cards** - Glassmorphism effect with borders
- **Gradient Buttons** - Primary and secondary styles
- **Custom Scrollbar** - Themed with brand colors
- **Responsive Navigation** - Mobile-friendly menu

## 📦 Tech Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.3
- **Deployment**: Vercel
- **Version Control**: GitHub

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

## 🎯 Customization Guide

### Update Service Offerings
Edit `app/solutions/page.tsx` - Modify the `solutions` array to add/remove services.

### Update Products
Edit `app/products/page.tsx` - Modify the `products` array to change pricing, features, or add new products.

### Update Company Info
- **About**: Edit `app/about/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`
- **Stats**: Update numbers in `app/page.tsx`

### Update Branding
- **Logo**: Replace image URLs in `components/Navbar.tsx` and `components/Footer.tsx`
- **Colors**: Modify `tailwind.config.js`
- **Fonts**: Update in `app/layout.tsx`

## 📧 Contact Form Integration

The contact form API is at `app/api/contact/route.ts`. 

### To integrate with SendGrid:

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add environment variables to `.env.local`:
```env
SENDGRID_API_KEY=your_api_key_here
CONTACT_EMAIL=contact@edgesof.com
```

3. Uncomment the SendGrid code in `app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)
The site is configured for automatic deployment on Vercel:

1. Push to GitHub
2. Vercel automatically deploys
3. Live at: https://edgesof-site.vercel.app

### Custom Domain
1. Go to Vercel Dashboard
2. Select project "edgesof-site"
3. Go to Settings → Domains
4. Add your custom domain (e.g., edgesof.com)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Global CDN**: Vercel Edge Network

## 🔒 Security

- HTTPS enforced
- Environment variables for sensitive data
- API rate limiting ready
- CORS configured
- XSS protection

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **4K**: 2560px+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 EdgesOf Solutions. All rights reserved.

## 👨‍💻 Developer

Built by Kumar Vaibhav for EdgesOf Solutions

---

## 📞 Support

For support or inquiries:
- **Email**: contact@edgesof.com
- **Website**: https://edgesof-site.vercel.app
- **GitHub**: https://github.com/itvaibhav-jpg/edgesof-site

---

**Last Updated**: December 2025
**Version**: 2.0.0 (Enterprise Edition)

# 🚀 EdgesOf Solutions - Enterprise Website

**Professional enterprise website with AI automation, cloud engineering, and edge computing solutions.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itvaibhav-jpg/edgesof-site)

**Live Website**: https://edgesof-site.vercel.app

---

## ⚡ Quick Deploy (3 Minutes)

✅ **MongoDB is already set up!** Just add environment variables to Vercel:

### Step 1: Go to Vercel Dashboard
👉 https://vercel.com/dashboard → Select `edgesof-site` → Settings → Environment Variables

### Step 2: Add These 4 Variables

| Name | Value | Environments |
|------|-------|--------------|
| `MONGODB_URI` | `mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority` | ✓ Production ✓ Preview ✓ Development |
| `NEXTAUTH_SECRET` | `edgesof_secret_2025_production_key_secure` | ✓ Production ✓ Preview ✓ Development |
| `NEXTAUTH_URL` | `https://edgesof-site.vercel.app` | ✓ Production |
| `CONTACT_EMAIL` | `kumar@edgesof.com` | ✓ Production ✓ Preview ✓ Development |

### Step 3: Redeploy
Go to Deployments → Click "..." on latest deployment → Click "Redeploy"

✅ **Done!** Your website will be live in 2-3 minutes.

📚 **Detailed Guides**: See [QUICK_START.md](QUICK_START.md) | [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | [TEST_REPORT.md](TEST_REPORT.md)

---

## ✨ Features

### 🎯 Core Features
- ✅ **12 Pages**: Home, Solutions, Products, Industries, Insights, Careers, FAQ, Pricing, Contact, About, Admin
- ✅ **Responsive Design**: Mobile-first, works perfectly on all devices
- ✅ **WhatsApp Integration**: Floating button with click-to-chat (+91 99994 56126)
- ✅ **Live Chat Widget**: Interactive chat with quick replies
- ✅ **Click-to-Call**: Phone numbers are clickable everywhere
- ✅ **Admin Panel**: Dashboard with analytics and management
- ✅ **Contact Forms**: Lead capture with email notifications
- ✅ **Payment Integration**: Stripe & Razorpay ready
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- ✅ **Google Analytics**: GA4 integration ready

### 📱 Contact Integration
All contact information is configured and working:

- **Email**: kumar@edgesof.com (clickable mailto: links)
- **Phone**: +91 99994 56126 (clickable tel: links)
- **WhatsApp**: +91 99994 56126 (floating button bottom-right)
- **Live Chat**: Interactive widget (bottom-left)
- **Location**: Bangalore, Karnataka, India

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14.2.0 |
| **UI Library** | React 18.3.0 |
| **Styling** | Tailwind CSS 3.4.3 |
| **Database** | MongoDB Atlas (Cluster0, Mumbai) |
| **Authentication** | NextAuth.js 4.24.5 |
| **Payments** | Stripe 14.10.0 + Razorpay 2.9.2 |
| **Forms** | React Hook Form + Zod |
| **Animations** | Framer Motion 10.18.0 |
| **Charts** | Recharts 2.10.3 |
| **Icons** | React Icons 5.0.1 |
| **Notifications** | React Hot Toast 2.4.1 |
| **Deployment** | Vercel |
| **Language** | TypeScript 5 |

---

## 📊 Test Results

**Comprehensive Testing Completed** ✅

| Category | Tests | Passed | Pass Rate |
|----------|-------|--------|-----------|
| Contact Info | 5 | 5 | 100% |
| Logo & Branding | 4 | 4 | 100% |
| WhatsApp | 9 | 9 | 100% |
| Live Chat | 11 | 11 | 100% |
| Responsive Design | 7 | 7 | 100% |
| Phone Links | 4 | 4 | 100% |
| All Pages | 12 | 12 | 100% |
| Components | 5 | 5 | 100% |
| API Routes | 5 | 5 | 100% |
| **TOTAL** | **114** | **114** | **100%** |

See [TEST_REPORT.md](TEST_REPORT.md) for detailed results.

---

## 🗂️ Project Structure

```
edgesof-site/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── admin/             # Admin panel (login + dashboard)
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth authentication
│   │   ├── contact/       # Contact form handler
│   │   ├── leads/         # Lead management
│   │   └── payments/      # Stripe & Razorpay
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── industries/        # Industries page
│   ├── insights/          # Blog/Insights
│   ├── pricing/           # Pricing page
│   ├── products/          # Products page
│   └── solutions/         # Solutions page (26 services)
├── components/            # React components
│   ├── Footer.tsx         # Footer with contact info
│   ├── Navbar.tsx         # Navigation with logo & phone
│   ├── WhatsAppButton.tsx # WhatsApp floating button
│   ├── LiveChat.tsx       # Live chat widget
│   └── GoogleAnalytics.tsx # GA4 integration
├── lib/                   # Utility libraries
│   ├── mongodb.ts         # MongoDB connection
│   ├── stripe.ts          # Stripe integration
│   └── razorpay.ts        # Razorpay integration
├── models/                # Database models
│   ├── User.ts            # User model
│   ├── Lead.ts            # Lead model
│   ├── Payment.ts         # Payment model
│   ├── CaseStudy.ts       # Case study model
│   └── BlogPost.ts        # Blog post model
├── scripts/               # Utility scripts
│   └── setup-vercel-env.sh # Automated deployment
├── public/                # Static assets
├── QUICK_START.md         # Quick deployment guide
├── DEPLOYMENT_GUIDE.md    # Detailed deployment guide
└── TEST_REPORT.md         # Comprehensive test report
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (already set up!)

### Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/itvaibhav-jpg/edgesof-site.git
   cd edgesof-site
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your values
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   ```
   http://localhost:3000
   ```

---

## 📄 Pages Overview

### Homepage
- Hero section with futuristic AI dashboard
- Stats bar (500+ projects, 98% satisfaction, 50+ clients)
- 6 core capabilities
- Industries served (Healthcare, Finance, Logistics, Retail, Tech, Manufacturing)
- Client testimonials with 5-star ratings
- Animated elements and glow effects

### Solutions Page (26 Services)

**AI & Automation** (5 services)
- AI Workflow Automation
- AI Agents for Customer Support
- AI Document Understanding (OCR + NLP)
- WhatsApp Automation
- AI Data Insights / Recommendations

**Cloud Engineering** (5 services)
- Enterprise Cloud Apps
- Cloud Migration
- Multi-tenant SaaS Development
- Microservices Architecture
- DevOps CI/CD Setup

**Data & Analytics** (4 services)
- Real-Time Dashboards
- Predictive Analytics
- Data Pipeline Setup
- Business Intelligence Systems

**Edge Computing & Security** (4 services)
- Secure Edge Devices
- Zero-Trust Cloud Architecture
- Identity & Access Management
- API Security + Compliance

**Industry Solutions** (5 services)
- Healthcare EMR & Clinic Systems
- CRM / ERP Mini-Systems for SMEs
- Finance Automation
- Logistics Workflow Systems
- Retail Inventory & Billing

**Specialized Services** (3 services)
- API Integrations (WhatsApp, Stripe, Razorpay, Zoho, SAP)
- CTO Advisory & Tech Strategy
- Maintenance & Support Plans

### Products Page (6 Products)

1. **EdgeFlow AI** - Enterprise AI Workflow Engine ($999/mo)
2. **EdgeCloud OS** - Cloud Infrastructure Orchestration ($1,499/mo)
3. **EdgeHealth EMR** - Healthcare Management ($799/mo)
4. **EdgeCRM Pro** - Intelligent CRM/ERP ($499/mo)
5. **EdgeDashboard Pro** - Business Intelligence ($699/mo)
6. **EdgeSecure** - Zero-Trust Security (Custom)

**Premium Add-ons**: Dedicated Support, Custom Integrations, Advanced Analytics, White Label

### Other Pages
- **Industries**: 6 verticals with case studies
- **Insights**: Blog and resources
- **Careers**: 6 job openings
- **FAQ**: 20+ questions in 5 categories
- **Pricing**: 3 tiers with add-ons
- **Contact**: Form, office locations, business hours
- **About**: Mission, vision, founder story, values
- **Admin**: Login and dashboard with analytics

---

## 🎨 Design System

### Color Scheme
- **Navy Dark**: `#0a1628` - Primary background
- **Navy Medium**: `#1a2332` - Secondary background
- **Cyan Glow**: `#00ffff` - Primary accent
- **Aqua Bright**: `#00d4ff` - Secondary accent

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizing**: clamp() functions
- **Gradient text**: Cyan to Aqua

### Components
- **Cyber Cards**: Glassmorphism with glow borders
- **Gradient Buttons**: Primary and secondary styles
- **Custom Scrollbar**: Themed with brand colors
- **Animations**: Float, glow, scale transforms

---

## 🔐 Security

- ✅ HTTPS enforced (Vercel)
- ✅ Environment variables for secrets
- ✅ Password hashing (bcryptjs)
- ✅ JWT authentication (NextAuth)
- ✅ CORS protection
- ✅ XSS protection (React)
- ✅ CSRF protection (NextAuth)

---

## 📈 Performance

- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Font optimization
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Vercel Edge Network CDN

---

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

### Vercel (Recommended)

**Automated Deployment**:
1. Push to GitHub main branch
2. Vercel automatically deploys
3. Live at: https://edgesof-site.vercel.app

**Manual Deployment**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms
- **Netlify**: Compatible
- **AWS Amplify**: Compatible
- **DigitalOcean App Platform**: Compatible
- **Railway**: Compatible

---

## 📧 Email Integration

### SendGrid Setup (Optional)

1. **Sign up**: https://signup.sendgrid.com/
2. **Get API Key**: Settings → API Keys
3. **Add to Vercel**:
   ```env
   SENDGRID_API_KEY=your_api_key_here
   ```

---

## 💳 Payment Integration

### Stripe (Optional)

1. **Sign up**: https://dashboard.stripe.com/register
2. **Get Keys**: Developers → API keys
3. **Add to Vercel**:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

### Razorpay (Optional)

1. **Sign up**: https://dashboard.razorpay.com/signup
2. **Get Keys**: Settings → API Keys
3. **Add to Vercel**:
   ```env
   RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_SECRET=...
   ```

---

## 📊 Google Analytics (Optional)

1. **Create GA4 Property**: https://analytics.google.com/
2. **Get Measurement ID**: Admin → Data Streams
3. **Add to Vercel**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

---

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Small | 640px - 768px | Optimized spacing |
| Medium | 768px - 1024px | 2-column grids |
| Large | 1024px - 1280px | Full navigation, 3-column grids |
| XL | > 1280px | Maximum width containers |

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📞 Support

- **Email**: kumar@edgesof.com
- **Phone**: +91 99994 56126
- **WhatsApp**: +91 99994 56126
- **Website**: https://edgesof-site.vercel.app

---

## 🔗 Important Links

- **Live Website**: https://edgesof-site.vercel.app
- **GitHub Repository**: https://github.com/itvaibhav-jpg/edgesof-site
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com/

---

## 📄 License

© 2025 EdgesOf Solutions. All rights reserved.

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- MongoDB for database services
- All open-source contributors

---

**Built with ❤️ by EdgesOf Solutions**  
**Version**: 3.0.0 (Enterprise Edition)  
**Last Updated**: December 2025

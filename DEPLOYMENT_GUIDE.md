# 🚀 EdgesOf Solutions - Deployment Guide

## ✅ MongoDB Atlas Setup (COMPLETED)

Your MongoDB cluster is ready! Here are the details:

### Cluster Information
- **Cluster Name**: Cluster0
- **Tier**: FREE (M0 - Free forever)
- **Provider**: AWS
- **Region**: Mumbai (ap-south-1)
- **MongoDB Version**: 8.0.16
- **Storage**: 512 MB
- **Type**: Replica Set (3 nodes)

### Database Credentials
- **Username**: `itvaibhav_db_user`
- **Password**: `gtTzF7eYWfNR45HY`
- **Database Name**: `edgesof`

### Connection String
```
mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority
```

### Security
- ✅ IP Whitelisted: 152.59.171.38
- ✅ Database user created
- ✅ Network access configured

---

## 🔧 Vercel Environment Variables Setup

### Required Variables (Minimum for deployment)

Add these to your Vercel project settings:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select project: `edgesof-site`
   - Go to: Settings → Environment Variables

2. **Add These Variables**:

#### Database (REQUIRED)
```env
MONGODB_URI=mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority
```

#### Authentication (REQUIRED)
```env
NEXTAUTH_SECRET=edgesof_secret_2025_production_key_secure
NEXTAUTH_URL=https://edgesof-site.vercel.app
```

#### Contact Email (REQUIRED)
```env
CONTACT_EMAIL=kumar@edgesof.com
```

#### Node Environment (REQUIRED)
```env
NODE_ENV=production
```

---

## 📋 Step-by-Step Vercel Configuration

### Method 1: Using Vercel Dashboard (Recommended)

1. **Login to Vercel**
   ```
   https://vercel.com/login
   ```

2. **Navigate to Project**
   - Click on `edgesof-site` project
   - Click "Settings" tab
   - Click "Environment Variables" in sidebar

3. **Add Each Variable**
   - Click "Add New" button
   - Enter variable name (e.g., `MONGODB_URI`)
   - Enter variable value
   - Select environments: Production, Preview, Development
   - Click "Save"

4. **Repeat for All Variables**:
   - MONGODB_URI
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL
   - CONTACT_EMAIL
   - NODE_ENV

5. **Redeploy**
   - Go to "Deployments" tab
   - Click "..." menu on latest deployment
   - Click "Redeploy"
   - Wait for build to complete

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add environment variables
vercel env add MONGODB_URI production
# Paste: mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority

vercel env add NEXTAUTH_SECRET production
# Paste: edgesof_secret_2025_production_key_secure

vercel env add NEXTAUTH_URL production
# Paste: https://edgesof-site.vercel.app

vercel env add CONTACT_EMAIL production
# Paste: kumar@edgesof.com

vercel env add NODE_ENV production
# Paste: production

# Redeploy
vercel --prod
```

---

## 🔐 Generate Secure NEXTAUTH_SECRET (Optional)

If you want a more secure secret, generate one:

### Using OpenSSL (Mac/Linux)
```bash
openssl rand -base64 32
```

### Using Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Using Online Generator
Visit: https://generate-secret.vercel.app/32

Then update the `NEXTAUTH_SECRET` in Vercel.

---

## 📧 Optional: Email Configuration (SendGrid)

For contact form to send emails:

1. **Sign up for SendGrid**
   - Visit: https://signup.sendgrid.com/
   - Free tier: 100 emails/day

2. **Get API Key**
   - Go to Settings → API Keys
   - Create API Key with "Full Access"
   - Copy the key

3. **Add to Vercel**
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

---

## 💳 Optional: Payment Gateway Setup

### Stripe

1. **Sign up**: https://dashboard.stripe.com/register
2. **Get API Keys**: Dashboard → Developers → API keys
3. **Add to Vercel**:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

### Razorpay

1. **Sign up**: https://dashboard.razorpay.com/signup
2. **Get API Keys**: Settings → API Keys
3. **Add to Vercel**:
   ```env
   RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_SECRET=...
   ```

---

## 📊 Optional: Google Analytics

1. **Create GA4 Property**: https://analytics.google.com/
2. **Get Measurement ID**: Admin → Data Streams → Web
3. **Add to Vercel**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

---

## ✅ Deployment Checklist

### Before Deployment
- [x] MongoDB cluster created
- [x] Database user created
- [x] IP address whitelisted
- [ ] Environment variables added to Vercel
- [ ] NEXTAUTH_SECRET generated
- [ ] Contact email configured

### After Deployment
- [ ] Website loads successfully
- [ ] Admin login works
- [ ] Contact form submits
- [ ] WhatsApp button works
- [ ] Live chat works
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] No console errors

---

## 🐛 Troubleshooting

### Build Fails with "Cannot connect to MongoDB"
**Solution**: Check MONGODB_URI is correct and IP is whitelisted

### "Invalid NEXTAUTH_SECRET"
**Solution**: Ensure NEXTAUTH_SECRET is set and at least 32 characters

### Contact Form Not Sending Emails
**Solution**: Add SENDGRID_API_KEY or configure SMTP

### Admin Login Not Working
**Solution**: 
1. Check MongoDB connection
2. Create admin user manually in database
3. Verify NEXTAUTH_URL matches your domain

### 404 on Admin Pages
**Solution**: Clear Vercel cache and redeploy

---

## 🔗 Important Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com/
- **GitHub Repo**: https://github.com/itvaibhav-jpg/edgesof-site
- **Live Website**: https://edgesof-site.vercel.app

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check MongoDB Atlas metrics
3. Review browser console for errors
4. Check network tab for failed requests

---

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ Website loads at https://edgesof-site.vercel.app
- ✅ No build errors in Vercel
- ✅ Admin login page accessible
- ✅ Contact form works
- ✅ All pages load correctly
- ✅ Mobile responsive
- ✅ WhatsApp and Live Chat functional

---

**Last Updated**: December 5, 2025  
**MongoDB Cluster**: Cluster0 (Mumbai)  
**Deployment Platform**: Vercel

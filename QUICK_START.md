# ⚡ Quick Start - Deploy in 5 Minutes

## 🎯 Your MongoDB is Ready!

✅ **Cluster**: Cluster0 (Mumbai, AWS)  
✅ **Username**: itvaibhav_db_user  
✅ **Password**: gtTzF7eYWfNR45HY  
✅ **Connection**: Ready to use

---

## 🚀 Deploy Now - Choose Your Method

### Method 1: Vercel Dashboard (Easiest - 3 minutes)

1. **Go to Vercel**
   - Visit: https://vercel.com/dashboard
   - Click on `edgesof-site` project

2. **Add Environment Variables**
   - Click "Settings" → "Environment Variables"
   - Add these 4 variables (copy-paste exactly):

   **Variable 1:**
   ```
   Name: MONGODB_URI
   Value: mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

   **Variable 2:**
   ```
   Name: NEXTAUTH_SECRET
   Value: edgesof_secret_2025_production_key_secure
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

   **Variable 3:**
   ```
   Name: NEXTAUTH_URL
   Value: https://edgesof-site.vercel.app
   Environments: ✓ Production
   ```

   **Variable 4:**
   ```
   Name: CONTACT_EMAIL
   Value: kumar@edgesof.com
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

3. **Redeploy**
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"
   - ✅ Done! Wait 2-3 minutes

---

### Method 2: Automated Script (Fastest - 1 minute)

```bash
# Run this in your terminal
chmod +x scripts/setup-vercel-env.sh
./scripts/setup-vercel-env.sh
```

This will:
- Install Vercel CLI (if needed)
- Login to Vercel
- Add all environment variables
- Deploy automatically

---

### Method 3: Manual Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add variables one by one
vercel env add MONGODB_URI production
# Paste: mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority

vercel env add NEXTAUTH_SECRET production
# Paste: edgesof_secret_2025_production_key_secure

vercel env add NEXTAUTH_URL production
# Paste: https://edgesof-site.vercel.app

vercel env add CONTACT_EMAIL production
# Paste: kumar@edgesof.com

# Deploy
vercel --prod
```

---

## ✅ Verify Deployment

After deployment completes:

1. **Visit Your Website**
   - https://edgesof-site.vercel.app

2. **Check These Pages**
   - ✅ Home page loads
   - ✅ Admin login: https://edgesof-site.vercel.app/admin/login
   - ✅ Contact form works
   - ✅ WhatsApp button (bottom-right)
   - ✅ Live chat (bottom-left)

3. **Test on Mobile**
   - Open on phone
   - Check responsive design
   - Test WhatsApp button
   - Test phone click-to-call

---

## 🎉 Success Checklist

- [ ] Environment variables added to Vercel
- [ ] Deployment successful (no errors)
- [ ] Website loads at https://edgesof-site.vercel.app
- [ ] Admin login page accessible
- [ ] Contact form works
- [ ] WhatsApp button functional
- [ ] Live chat working
- [ ] Mobile responsive
- [ ] All pages load correctly

---

## 🐛 If Something Goes Wrong

### Build Fails
1. Check Vercel deployment logs
2. Verify all 4 environment variables are added
3. Check MongoDB connection string is correct

### Website Shows Error
1. Clear browser cache
2. Check Vercel function logs
3. Verify NEXTAUTH_URL matches your domain

### Admin Login Not Working
1. MongoDB must be connected
2. Create admin user (see DEPLOYMENT_GUIDE.md)
3. Check NEXTAUTH_SECRET is set

---

## 📞 Need Help?

Check these files:
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- `TEST_REPORT.md` - Complete test results
- `.env.local.example` - All environment variables

---

## 🔗 Important Links

- **Live Website**: https://edgesof-site.vercel.app
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com/
- **GitHub Repo**: https://github.com/itvaibhav-jpg/edgesof-site

---

**Estimated Time**: 3-5 minutes  
**Difficulty**: Easy  
**Next Step**: Add environment variables and redeploy!

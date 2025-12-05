# 🔐 Admin Panel Setup Guide

Complete guide to set up and access the EdgesOf Solutions admin panel.

---

## 🎯 Quick Start

### Step 1: Verify Setup Page

Visit the admin setup page to verify your configuration:

👉 **https://edgesof-site.vercel.app/admin/setup**

This page will:
- Show environment variables status
- Test database connection
- Provide setup instructions

---

## 📋 Prerequisites

Before setting up the admin panel, ensure:

✅ **MongoDB Atlas** is configured
- Cluster: Cluster0
- Database: edgesof
- Connection string added to Vercel

✅ **Environment Variables** are set in Vercel:
- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `CONTACT_EMAIL`

✅ **Website is deployed** successfully on Vercel

---

## 🔧 Method 1: Using the Setup Script (Recommended)

### Step 1: Clone Repository Locally

```bash
git clone https://github.com/itvaibhav-jpg/edgesof-site.git
cd edgesof-site
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Admin Creation Script

```bash
node scripts/create-admin.js
```

**Output:**
```
🔌 Connecting to MongoDB...
✅ Connected to MongoDB
🔐 Hashing password...
👤 Creating admin user...
✅ Admin user created successfully!

📋 Admin Credentials:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: kumar@edgesof.com
🔐 Password: admin123
👤 Name: Kumar Vaibhav
🎭 Role: admin
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 Login at: https://edgesof-site.vercel.app/admin/login

⚠️  IMPORTANT: Change the password after first login!
```

### Step 4: Login to Admin Panel

1. Visit: **https://edgesof-site.vercel.app/admin/login**
2. Enter credentials:
   - Email: `kumar@edgesof.com`
   - Password: `admin123`
3. Click "Login"
4. You'll be redirected to the dashboard

---

## 🔧 Method 2: Using MongoDB Atlas UI

If you can't run the script locally, create the admin user directly in MongoDB:

### Step 1: Go to MongoDB Atlas

1. Visit: https://cloud.mongodb.com/
2. Login with your credentials
3. Select "Cluster0"
4. Click "Browse Collections"

### Step 2: Create Users Collection

1. Click "Add My Own Data"
2. Database name: `edgesof`
3. Collection name: `users`
4. Click "Create"

### Step 3: Insert Admin Document

Click "Insert Document" and paste this JSON:

```json
{
  "name": "Kumar Vaibhav",
  "email": "kumar@edgesof.com",
  "password": "$2a$10$YourHashedPasswordHere",
  "role": "admin",
  "createdAt": {"$date": "2025-12-05T00:00:00.000Z"},
  "updatedAt": {"$date": "2025-12-05T00:00:00.000Z"}
}
```

**Note:** You'll need to hash the password first. Use this online tool:
- https://bcrypt-generator.com/
- Input: `admin123`
- Rounds: 10
- Copy the hash and replace `$2a$10$YourHashedPasswordHere`

### Step 4: Login

Visit https://edgesof-site.vercel.app/admin/login and use your credentials.

---

## 🔧 Method 3: Using API Route (Advanced)

Create an API route to register the first admin:

### Step 1: Create Registration API

Create `app/api/admin/register-first/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    // Check if any admin exists
    await connectDB();
    const adminExists = await User.findOne({ role: 'admin' });
    
    if (adminExists) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      );
    }

    const { name, email, password } = await request.json();
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create admin
    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'admin',
    });

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully',
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

### Step 2: Call the API

Use curl or Postman:

```bash
curl -X POST https://edgesof-site.vercel.app/api/admin/register-first \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Kumar Vaibhav",
    "email": "kumar@edgesof.com",
    "password": "admin123"
  }'
```

---

## 🐛 Troubleshooting

### Issue 1: "Invalid credentials" error

**Cause:** Admin user doesn't exist in database

**Solution:**
1. Run the setup script: `node scripts/create-admin.js`
2. Or create user manually in MongoDB Atlas
3. Verify user exists in `edgesof.users` collection

### Issue 2: "Cannot connect to database"

**Cause:** MongoDB connection string is incorrect

**Solution:**
1. Check `MONGODB_URI` in Vercel environment variables
2. Verify format: `mongodb+srv://username:password@cluster.mongodb.net/database`
3. Test connection at: https://edgesof-site.vercel.app/admin/setup

### Issue 3: "NextAuth error"

**Cause:** NextAuth configuration issue

**Solution:**
1. Verify `NEXTAUTH_SECRET` is set in Vercel
2. Verify `NEXTAUTH_URL` matches your domain
3. Check NextAuth API route exists at `/api/auth/[...nextauth]`

### Issue 4: Login page not loading

**Cause:** Build or deployment error

**Solution:**
1. Check Vercel deployment logs
2. Verify all dependencies are installed
3. Check for TypeScript errors
4. Redeploy from Vercel dashboard

### Issue 5: "Session not found" after login

**Cause:** NextAuth session configuration

**Solution:**
1. Clear browser cookies
2. Try incognito/private mode
3. Check browser console for errors
4. Verify `NEXTAUTH_URL` is correct

---

## ✅ Verification Checklist

After setup, verify these:

### Database
- [ ] MongoDB Atlas cluster is running
- [ ] Database "edgesof" exists
- [ ] Collection "users" exists
- [ ] Admin user document exists
- [ ] Password is hashed (starts with $2a$ or $2b$)

### Environment Variables
- [ ] MONGODB_URI is set in Vercel
- [ ] NEXTAUTH_SECRET is set in Vercel
- [ ] NEXTAUTH_URL is set in Vercel
- [ ] All variables are in "Production" environment

### Website
- [ ] Website is deployed successfully
- [ ] No build errors in Vercel
- [ ] Setup page loads: /admin/setup
- [ ] Login page loads: /admin/login
- [ ] Dashboard page exists: /admin/dashboard

### Login Flow
- [ ] Can access login page
- [ ] Can enter credentials
- [ ] Login button works
- [ ] Redirects to dashboard after login
- [ ] Dashboard displays correctly

---

## 🔐 Security Best Practices

### 1. Change Default Password

After first login, change the password immediately:

```javascript
// In admin dashboard, add password change functionality
// Or update directly in MongoDB Atlas
```

### 2. Use Strong Passwords

- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Don't use common words or patterns

### 3. Enable 2FA (Future Enhancement)

Consider adding two-factor authentication for extra security.

### 4. Limit Login Attempts

Implement rate limiting to prevent brute force attacks.

### 5. Use HTTPS Only

Vercel provides HTTPS by default - never disable it.

---

## 📊 Admin Panel Features

Once logged in, you can:

### Dashboard
- View analytics and statistics
- Monitor website performance
- Track user activity

### Lead Management
- View contact form submissions
- Manage customer inquiries
- Export lead data

### Content Management
- Create and edit blog posts
- Manage case studies
- Update product information

### User Management
- Add/remove admin users
- Manage user roles
- View user activity logs

---

## 🔗 Important URLs

- **Setup Page**: https://edgesof-site.vercel.app/admin/setup
- **Login Page**: https://edgesof-site.vercel.app/admin/login
- **Dashboard**: https://edgesof-site.vercel.app/admin/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com/
- **Vercel Dashboard**: https://vercel.com/dashboard

---

## 📞 Support

If you encounter issues:

1. **Check Setup Page**: Visit /admin/setup to diagnose
2. **Review Logs**: Check Vercel function logs
3. **Test Connection**: Use the connection test button
4. **Verify Database**: Check MongoDB Atlas for user data

---

## 🎯 Quick Reference

### Default Admin Credentials
```
Email: kumar@edgesof.com
Password: admin123
```

### MongoDB Connection
```
mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.nymyq.mongodb.net/edgesof?retryWrites=true&w=majority
```

### Create Admin Command
```bash
node scripts/create-admin.js
```

---

**Last Updated**: December 2025  
**Version**: 1.0.0

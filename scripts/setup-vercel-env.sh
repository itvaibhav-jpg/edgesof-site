#!/bin/bash

# EdgesOf Solutions - Vercel Environment Variables Setup Script
# This script automates adding environment variables to Vercel

echo "🚀 EdgesOf Solutions - Vercel Environment Setup"
echo "================================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed"
else
    echo "✅ Vercel CLI found"
fi

echo ""
echo "🔐 Logging into Vercel..."
vercel login

echo ""
echo "🔗 Linking to project..."
vercel link --yes

echo ""
echo "📝 Adding environment variables..."
echo ""

# MongoDB Configuration
echo "Adding MONGODB_URI..."
echo "mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.mongodb.net/edgesof?retryWrites=true&w=majority" | vercel env add MONGODB_URI production preview development

# NextAuth Configuration
echo "Adding NEXTAUTH_SECRET..."
echo "edgesof_secret_2025_production_key_secure_$(openssl rand -hex 16)" | vercel env add NEXTAUTH_SECRET production preview development

echo "Adding NEXTAUTH_URL..."
echo "https://edgesof-site.vercel.app" | vercel env add NEXTAUTH_URL production
echo "https://edgesof-site-git-main.vercel.app" | vercel env add NEXTAUTH_URL preview
echo "http://localhost:3000" | vercel env add NEXTAUTH_URL development

# Contact Email
echo "Adding CONTACT_EMAIL..."
echo "kumar@edgesof.com" | vercel env add CONTACT_EMAIL production preview development

# Node Environment
echo "Adding NODE_ENV..."
echo "production" | vercel env add NODE_ENV production
echo "preview" | vercel env add NODE_ENV preview
echo "development" | vercel env add NODE_ENV development

echo ""
echo "✅ All environment variables added successfully!"
echo ""
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your website should be live at:"
echo "   https://edgesof-site.vercel.app"
echo ""
echo "📊 Check deployment status:"
echo "   https://vercel.com/dashboard"
echo ""

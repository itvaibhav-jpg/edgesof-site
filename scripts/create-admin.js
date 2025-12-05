// Script to create admin user in MongoDB
// Run this with: node scripts/create-admin.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://itvaibhav_db_user:gtTzF7eYWfNR45HY@cluster0.nymyq.mongodb.net/edgesof?retryWrites=true&w=majority';

// User Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdmin() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Admin credentials
    const adminData = {
      name: 'Kumar Vaibhav',
      email: 'kumar@edgesof.com',
      password: 'admin123', // Change this to a secure password
      role: 'admin',
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists!');
      console.log('📧 Email:', adminData.email);
      console.log('🔐 Use your existing password to login');
      
      // Update password if needed
      const updatePassword = false; // Set to true to update password
      if (updatePassword) {
        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        existingAdmin.password = hashedPassword;
        await existingAdmin.save();
        console.log('✅ Password updated successfully!');
      }
    } else {
      // Hash password
      console.log('🔐 Hashing password...');
      const hashedPassword = await bcrypt.hash(adminData.password, 10);
      
      // Create admin user
      console.log('👤 Creating admin user...');
      const admin = await User.create({
        ...adminData,
        password: hashedPassword,
      });

      console.log('✅ Admin user created successfully!');
      console.log('');
      console.log('📋 Admin Credentials:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 Email:', adminData.email);
      console.log('🔐 Password:', adminData.password);
      console.log('👤 Name:', adminData.name);
      console.log('🎭 Role:', adminData.role);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('🌐 Login at: https://edgesof-site.vercel.app/admin/login');
      console.log('');
      console.log('⚠️  IMPORTANT: Change the password after first login!');
    }

    await mongoose.disconnect();
    console.log('');
    console.log('✅ Done!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();

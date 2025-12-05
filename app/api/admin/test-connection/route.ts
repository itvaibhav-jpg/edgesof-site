import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Test MongoDB connection
    await connectDB();
    
    const dbState = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    
    return NextResponse.json({
      success: true,
      database: mongoose.connection.name || 'edgesof',
      status: states[dbState] || 'unknown',
      message: 'Database connection successful',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to connect to database',
      },
      { status: 500 }
    );
  }
}

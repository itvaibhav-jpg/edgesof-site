import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      message,
      source: 'website',
      status: 'new',
    });

    // TODO: Send email notification to admin
    // TODO: Send auto-reply to customer

    return NextResponse.json({
      success: true,
      lead: {
        id: lead._id,
        name: lead.name,
        email: lead.email,
      },
    });
  } catch (error: any) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { createRazorpayOrder } from '@/lib/razorpay';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, productName, customerEmail, customerName } = await req.json();

    if (!amount || !productName || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create Razorpay order
    const result = await createRazorpayOrder(
      amount,
      currency || 'INR',
      orderId,
      {
        productName,
        customerEmail,
        customerName,
      }
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    // Save to database
    await connectDB();
    
    await Payment.create({
      orderId,
      amount,
      currency: currency || 'INR',
      status: 'pending',
      gateway: 'razorpay',
      gatewayPaymentId: result.orderId,
      customerEmail,
      customerName,
      productName,
    });

    return NextResponse.json({
      success: true,
      orderId: result.orderId,
      amount: result.amount,
      currency: result.currency,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error('Razorpay order creation error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

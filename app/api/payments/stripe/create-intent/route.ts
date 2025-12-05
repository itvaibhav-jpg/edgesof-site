import { NextRequest, NextResponse } from 'next/server';
import { createStripePaymentIntent } from '@/lib/stripe';
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

    // Create Stripe payment intent
    const result = await createStripePaymentIntent(amount, currency || 'usd', {
      productName,
      customerEmail,
      customerName,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    // Save to database
    await connectDB();
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    await Payment.create({
      orderId,
      amount,
      currency: currency || 'usd',
      status: 'pending',
      gateway: 'stripe',
      gatewayPaymentId: result.paymentIntentId,
      customerEmail,
      customerName,
      productName,
    });

    return NextResponse.json({
      success: true,
      clientSecret: result.clientSecret,
      orderId,
    });
  } catch (error: any) {
    console.error('Stripe payment intent error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

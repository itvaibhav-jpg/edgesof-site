import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRazorpayOrder(
  amount: number,
  currency: string = 'INR',
  receipt: string,
  notes: any = {}
) {
  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt,
      notes,
    });

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  try {
    const text = `${orderId}|${paymentId}`;
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex');

    return generated_signature === signature;
  } catch (error) {
    return false;
  }
}

export async function captureRazorpayPayment(
  paymentId: string,
  amount: number,
  currency: string = 'INR'
) {
  try {
    const payment = await razorpay.payments.capture(
      paymentId,
      Math.round(amount * 100),
      currency
    );

    return {
      success: true,
      payment,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function refundRazorpayPayment(
  paymentId: string,
  amount?: number
) {
  try {
    const refund = await razorpay.payments.refund(paymentId, {
      amount: amount ? Math.round(amount * 100) : undefined,
    });

    return {
      success: true,
      refund,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export default razorpay;

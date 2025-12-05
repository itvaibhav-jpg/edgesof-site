import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  orderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  gateway: 'stripe' | 'razorpay';
  gatewayPaymentId?: string;
  customerEmail: string;
  customerName: string;
  productName: string;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema: Schema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    gateway: {
      type: String,
      enum: ['stripe', 'razorpay'],
      required: true,
    },
    gatewayPaymentId: String,
    customerEmail: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    metadata: Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema);

import mongoose, { Schema, Document } from 'mongoose';

export interface ICaseStudy extends Document {
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CaseStudySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    client: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    results: [String],
    metrics: [
      {
        label: String,
        value: String,
      },
    ],
    testimonial: {
      quote: String,
      author: String,
      role: String,
    },
    image: String,
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CaseStudy || mongoose.model<ICaseStudy>('CaseStudy', CaseStudySchema);

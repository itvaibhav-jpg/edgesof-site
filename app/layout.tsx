import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
  description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions. Trusted by 50+ global enterprises.',
  keywords: 'AI automation, cloud engineering, enterprise software, data analytics, cybersecurity',
  authors: [{ name: 'EdgesOf Solutions' }],
  openGraph: {
    title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
    description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions.',
    type: 'website',
    url: 'https://edgesof.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
    description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a2332',
              color: '#fff',
              border: '1px solid rgba(0, 255, 255, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#00ffff',
                secondary: '#1a2332',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff4444',
                secondary: '#1a2332',
              },
            },
          }}
        />
      </body>
    </html>
  );
}

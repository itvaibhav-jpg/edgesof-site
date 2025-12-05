import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
  description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions. Trusted by 50+ global enterprises.',
  keywords: 'AI automation, cloud engineering, enterprise software, data analytics, cybersecurity',
  authors: [{ name: 'EdgesOf Solutions' }],
  icons: {
    icon: 'https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-844Z-d10b8d3b-chat-image-1764954201824-2.jpg',
    shortcut: 'https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-844Z-d10b8d3b-chat-image-1764954201824-2.jpg',
    apple: 'https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-844Z-d10b8d3b-chat-image-1764954201824-2.jpg',
  },
  openGraph: {
    title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
    description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions.',
    type: 'website',
    url: 'https://edgesof.com',
    images: ['https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-667Z-424819bd-chat-image-1764954201649-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgesOf Solutions - Enterprise AI & Cloud Technology',
    description: 'Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions.',
    images: ['https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-667Z-424819bd-chat-image-1764954201649-1.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-844Z-d10b8d3b-chat-image-1764954201824-2.jpg" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
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

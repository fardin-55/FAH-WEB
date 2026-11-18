import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ShieldLoader } from '@/components/loader/ShieldLoader';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShieldScan | Advanced Website Security Checker & Spam Detector',
  description:
    'Protect your digital assets with real-time website trust verification, SSL auditing, blacklist checks, and AI-powered phishing & spam detection.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased selection:bg-brand-500 selection:text-white">
        <ShieldLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

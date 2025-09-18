import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LoadingProvider } from '@/contexts/LoadingContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Analytics Dashboard Builder',
  description: 'Advanced analytics dashboard with chart builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
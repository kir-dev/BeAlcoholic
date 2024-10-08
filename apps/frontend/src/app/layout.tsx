import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeAlcoholic',
  description: 'Social media site to track your alcohol consumption',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hu'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI SLM - Build Powerful AI Models Without Complexity',
  description: 'Create, train, and deploy custom Small Language Models in minutes. No PhD required. No GPU clusters needed. The future of AI development is here.',
  keywords: 'AI, Machine Learning, SLM, Small Language Models, AI Platform, Model Training, AI Development',
  authors: [{ name: 'AI SLM' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-slm.com',
    siteName: 'AI SLM',
    title: 'AI SLM - Build Powerful AI Models Without Complexity',
    description: 'Create, train, and deploy custom Small Language Models in minutes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI SLM Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SLM - Build Powerful AI Models Without Complexity',
    description: 'Create, train, and deploy custom Small Language Models in minutes.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

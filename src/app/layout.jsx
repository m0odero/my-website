import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import thumbnail from '@/images/photos/image-4.jpg'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - margaret o',
    default:
      'margaret o',
  },
  description:
    'Hi, I\'m Margaret! I work with power systems data, making sense of grids and how they impact our lives. Outside of that, I enjoy hiking, marathoning, and getting lost in crochet, gardening, and African fiction. Check out my website to see what I’m working on!',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'margaret o',
    description:
      'Hi, I\'m Margaret! I work with power systems data, making sense of grids and how they impact our lives.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'margaret o',
    images: [
      {
        url: thumbnail,
        width: 1200,
        height: 630,
        alt: 'Margaret O Thumbnail',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'margaret o',
    description:
      'Hi, I\'m Margaret! I work with power systems data, making sense of grids and how they impact our lives.',
    images: [thumbnail],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

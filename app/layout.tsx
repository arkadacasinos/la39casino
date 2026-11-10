import type React from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0e0918] text-white">
      {/* Root Layout */}
      <head>
        <meta name="yandex-verification" content="b4144ac822143c43" />
        <title>La Casino (Ля Казино) официальный сайт – рабочее зеркало для игры онлайн 2026</title>
        <meta
          name="description"
          content="Ищите рабочее зеркало La Casino? Официальный сайт Ля Казино предлагает быстрый вход, щедрый бонус до 225% и 1000 FS, лицензионные слоты и моментальные выплаты без блокировок. Играйте в Ля Казино онлайн!"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://la39casino.vercel.app" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino (Ля Казино) официальный сайт – рабочее зеркало для игры онлайн 2026" />
        <meta
          property="og:description"
          content="Ищите рабочее зеркало La Casino? Официальный сайт Ля Казино предлагает быстрый вход, щедрый бонус до 225% и 1000 FS, лицензионные слоты и моментальные выплаты без блокировок. Играйте в Ля Казино онлайн!"
        />
        <meta property="og:url" content="https://la39casino.vercel.app" />
        <meta property="og:site_name" content="La Casino" />
        <meta property="og:image" content="https://la39casino.vercel.app/images/hero-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino (Ля Казино) официальный сайт – рабочее зеркало для игры онлайн 2026" />
        <meta
          name="twitter:description"
          content="Ищите рабочее зеркало La Casino? Официальный сайт Ля Казино предлагает быстрый вход, щедрый бонус до 225% и 1000 FS, лицензионные слоты и моментальные выплаты без блокировок. Играйте в Ля Казино онлайн!"
        />
        <meta name="twitter:image" content="https://la39casino.vercel.app/images/hero-banner.jpg" />
        <meta name="theme-color" content="#120c1f" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="min-h-screen bg-[#0e0918] text-[#f2eefc] antialiased selection:bg-[#ff2a8d] selection:text-white">
        {children}
      </body>
    </html>
  )
}

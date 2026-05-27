import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pepscorelab.com'),
  title: 'Pepscore Lab — Precision Peptide Solutions | Launching Fall 2026',
  description:
    'Science. Precision. Performance. Third-party tested, COA-certified, sterility-verified peptide packaging solutions. Wholesale & retail. Launching Fall 2026.',
  keywords: [
    'peptide supplier', 'peptide packaging', 'wholesale peptides',
    'research peptides', 'COA certified peptides', 'sterile peptides',
    'pepscore lab', 'RUO peptides',
  ],
  openGraph: {
    title: 'Pepscore Lab — Precision Peptide Solutions',
    description: 'Science. Precision. Performance. COA-certified, sterility-verified peptide packaging. Launching Fall 2026.',
    images: [{ url: '/images/logo.png' }],
    siteName: 'Pepscore Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pepscore Lab — Precision Peptide Solutions',
    description: 'COA-certified, sterility-verified peptide packaging. Launching Fall 2026.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#000', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}

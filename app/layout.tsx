import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newest 5-Star Hotels in Hurghada | Coral Reef Beach Resorts',
  description: 'Discover the newest luxury 5-star hotels in Hurghada with pristine beaches and live coral reefs for the ultimate Red Sea experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

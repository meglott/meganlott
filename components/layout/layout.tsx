import './globals.css'
import HeaderComponent from './header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HeaderComponent />
      <body>{children}</body>
    </html>
  )
}
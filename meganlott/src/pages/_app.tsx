import HeaderComponent from '@/components/layout/header'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderComponent />
      <Component {...pageProps} />
    </div>
  );
}
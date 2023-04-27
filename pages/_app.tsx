import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeaderComponent from '@/../components/layout/header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col">
      <HeaderComponent />
      <Component {...pageProps} />
    </div>
  );
}
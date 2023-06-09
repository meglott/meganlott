import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id='app' className='h-full'>
        <Component {...pageProps} />
    </div>
  );
}
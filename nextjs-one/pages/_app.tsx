import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Component {...pageProps} />
    <span>global hello!</span>
  </div>)
}

export default MyApp

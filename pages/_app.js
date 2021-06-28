import { CookiesProvider } from 'react-cookie'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

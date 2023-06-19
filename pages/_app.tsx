import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store'
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <CookiesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CookiesProvider>
    </Provider>
  )
}

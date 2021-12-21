import Layout from '../comps/layout';
import { AppProvider } from '../context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;

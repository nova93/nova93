import { Lato } from 'next/font/google';
import Nav from '../components/nav';
import '../styles.css';

const lato = Lato({ weight: "400", subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

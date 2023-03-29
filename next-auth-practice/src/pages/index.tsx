import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Practicing Next Auth" />
      </Head>
      <main className={inter.className}>Hello?</main>
    </>
  );
}

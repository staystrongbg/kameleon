import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Playball&family=Lobster&family=Roboto:wght@300;500;700;900&display=swap'
            rel='stylesheet'
          />
          <meta
            name='keywords'
            content='svecana sala, sala za proslave, ketering, beograd'
          />{' '}
          <meta
            name='descrition'
            content='KAMELEON 2021 - ketering za firme i proslave, sala za proslave'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

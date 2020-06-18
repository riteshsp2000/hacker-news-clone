import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang='en-US'>
        <Head>
          <meta
            charset='utf-8'
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel='manifest' href='../public/manifest.json' />

          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='application-name' content='hacker-next' />
          <meta name='apple-mobile-web-app-title' content='hacker-next' />
          <meta name='theme-color' content='#ff6600' />
          <meta name='msapplication-navbutton-color' content='#ff6600' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='msapplication-starturl' content='/' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />

          <link
            rel='icon'
            type='png'
            sizes='512x512'
            href='../public/icons/icon-512x512.png'
          />
          <link
            rel='apple-touch-icon'
            type='png'
            sizes='512x512'
            href='../public/icons/icon-512x512.png'
          />
          <link
            rel='icon'
            type='png'
            sizes='192x192'
            href='../public/icons/icon-192x192.png'
          />
          <link
            rel='apple-touch-icon'
            type='png'
            sizes='192x192'
            href='../public/icons/icon-192x192.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

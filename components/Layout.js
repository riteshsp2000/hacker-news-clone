import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton }) => {
  const renderBackButton = () => {
    if (backButton) {
      return (
        <span
          className='back-button'
          onClick={() => Router.back()}
          styles={{ margin: '5em', cursor: 'pointer' }}
        >
          ⬅
        </span>
      );
    }

    return null;
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <div className='container'>
        <nav>
          {renderBackButton()}
          <Link href='/'>
            <a>
              <span className='main-title'>Hacker Next</span>
            </a>
          </Link>
        </nav>

        {children}
      </div>

      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #f6f6ef;
          }

          nav {
            background: #f60;
            padding: 1em;
          }

          nav > * {
            display: inline-block;
            color: block;
          }

          nav a {
            text-decoration: none;
          }

          nav .main-title {
            font-weight: bolder;
            font-size: 1.2rem;
            color: black;
          }
        `}
      </style>

      <style global jsx>
        {`
          body {
            background: white;
            font-family: Verdant, Geneva, sans-serif;
          }

          .back-button {
            font-size: 0.9rem;
            padding-right: 1em;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;

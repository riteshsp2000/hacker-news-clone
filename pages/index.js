import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends React.Component {
  static async getInitialProps({ res, req, query }) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (error) {
      console.log(error);
      stories = [];
    }

    return { page, stories };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registeration) => {
          console.log('service worker registration successful', registeration);
        })
        .catch((error) => {
          console.warn('service worker registration failed', error.message);
        });
    }
  }

  renderPagination = (page) => {
    if (page === 1) {
      return (
        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1}) </a>
        </Link>
      );
    }

    return (
      <div>
        <Link href={`/?page=${page - 1}`}>
          <a>Previous Page ({page + -1}) </a>
        </Link>
        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1}) </a>
        </Link>
      </div>
    );
  };

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title='Hacker Next'
        description='A Hacker news clone made with Next.js'
      >
        <StoryList stories={stories} />

        <footer>{this.renderPagination(page)}</footer>

        <style jsx>
          {`
            footer {
              padding: 1em;
            }

            footer a {
              font-weight: bold;
              color: black;
              text-decoration: none;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;

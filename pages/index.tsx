import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import { Inter } from '@next/font/google';
// const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Randeep Dhaliwal</title>
        <meta
          name="description"
          content="Personal website of Randeep Dhaliwal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*
          <BlobBackground />
          <Blob className={styles.blob1} />
          <Blob className={styles.blob2} />
          <Blob className={styles.blob3} />
          */}
        <div>
          <div>
            <h1>Hello! My name is Randeep</h1>
            <p>
              I&apos;m an Australian-based front-end developer. I&apos;ve got
              quite a few years of experience building React-based websites,
              powered by either Redux or GraphQL. Recently I&apos;ve started
              branching out my front-end skillset and have been learning how to
              build iOS Apps using UIKit and SwiftUI. I also enjoy working on
              backend APIs, with most of my experience centered around either
              Node.js or Ruby on Rails.
            </p>
            <p>
              If you&apos;d like to learn more, take a gander at my&nbsp;
              <Link href="/about/cv">CV.</Link>
              &nbsp; Or, feel free to get in touch by dropping me an email at:
              <br />
              hello [at] randeep [dot] dev
            </p>
          </div>
        </div>
      </main>
      {/*
      <div>
        See my Blog:
        <ul>
          <li>
            <Link href="/blog/1-static-blog-entry">Static</Link>
          </li>
          <li>
            <Link href="/blog/2-dynamic-blog-entry">Dynamic</Link>
          </li>
        </ul>
      </div>
      */}
    </Fragment>
  );
};

export default Home;

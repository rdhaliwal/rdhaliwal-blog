import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import { Inter } from '@next/font/google';
// const inter = Inter({ subsets: ['latin'] });
const blobMask = (animationDisabled: boolean) => `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="0" height="0" viewBox="0 0 350 350" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="Blobby" clipPathUnits="objectBoundingBox" transform="scale(0.002857143, 0.002857143)">
      <path class="clip" d="M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z">
        <animate
          id="GentleMorph"
          dur="${animationDisabled ? 0 : 35}"
          begin="0"
          repeatCount="indefinite"
          attributeName="d"
          values="M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z;

                  m334.719465 233.064353c28.871403-82.339727 22.417835-142.7382456-65.204606-209.5226813-79.809275-60.8293649-253.8096353 20.7578982-267.53002864 148.6074893-8.93289979 83.277438 43.91922794 144.544272 117.27489464 167.117214 70.759155 26.348465 181.941653-10.60478 215.45974-106.202022z;

                  M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z;" />
      </path>
    </clipPath>
  </defs>
</svg>
`;

const BlobBackground = () => {
  const PREFERS_REDUCED_MOTION =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion)').matches;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: blobMask(PREFERS_REDUCED_MOTION) }}
    />
  );
};
const Blob = ({ className }: { className: string }) => {
  return <div className={className} style={{ clipPath: `url(#Blobby)` }} />;
};

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
        <div className={styles.blobContainer}>
          <BlobBackground />
          <Blob className={styles.blob1} />
          <Blob className={styles.blob2} />
          <Blob className={styles.blob3} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.main}>
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

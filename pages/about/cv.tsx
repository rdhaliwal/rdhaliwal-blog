import { GetStaticProps } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { Fragment } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './cv.module.css';

const convertMarkdownToHtml = async (params: string[]) => {
  const fullPath = path.join(...params);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();
  return contentHtml;
};

interface MarkdownMetadata {
  title: string;
  description?: string;
}

interface MarkdownPageProps {
  contentHtml: string;
  metadata: MarkdownMetadata;
}

export const getStaticProps: GetStaticProps<
  MarkdownPageProps
> = async _context => {
  const contentHtml = await convertMarkdownToHtml(['pages', 'about', 'cv.md']);
  const metadata: MarkdownMetadata = {
    title: 'CV | Randeep Dhaliwal',
    description: 'Curriculum vitae of Randeep Dhaliwal',
  };

  return {
    props: {
      contentHtml,
      metadata,
    },
  };
};

const MarkdownPage = ({ contentHtml, metadata }: MarkdownPageProps) => {
  return (
    <Fragment>
      <title>{metadata.title}</title>
      {metadata.description && (
        <meta name="description" content={metadata.description} />
      )}
      <main>
        <div
          className={styles.page}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>
    </Fragment>
  );
};

export default MarkdownPage;

// import BlogEntry from '../../components/BlogEntry';

// export const meta = {
//   title: 'Curriculum vitae',
// };

// export default ({ children }) => <BlogEntry {...meta}> {children} </BlogEntry>;

import { GetServerSideProps } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { Fragment } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

const convertMarkdownToHtml = async (params: string[]) => {
  const fullPath = path.join(...params);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();
  return contentHtml;
};

interface CvPageProps {
  contentHtml: string;
}

export const getServerSideProps: GetServerSideProps<
  CvPageProps
> = async _context => {
  const contentHtml = await convertMarkdownToHtml(['pages', 'about', 'cv.md']);

  return {
    props: { contentHtml },
  };
};

const CvPage = ({ contentHtml }: CvPageProps) => {
  return (
    <Fragment>
      <title>CV | Randeep Dhaliwal</title>
      <meta name="description" content="CV of Randeep Dhaliwal" />
      <main>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </Fragment>
  );
};

export default CvPage;

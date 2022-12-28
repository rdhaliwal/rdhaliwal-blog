// import BlogEntry from '../../components/BlogEntry';

// export const meta = {
//   title: 'Curriculum vitae',
// };

// export default ({ children }) => <BlogEntry {...meta}> {children} </BlogEntry>;

import { GetServerSideProps } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';

// export async function convertMarkdownToHtml() {
// //   const fullPath = path.join('pages', 'about', 'cv.md');
// //   const fileContents = fs.readFileSync(fullPath, 'utf8');
// //   // Use remark to convert markdown into HTML string
// //   const processedContent = await remark().use(html).process(fileContents);
// const contentHtml = 'processedContent.toString()';
// console.log('contentHtml', contentHtml);
// return {
//   contentHtml,
// };
// }

interface CvPageProps {
  contentHtml: string;
}

export const getServerSideProps: GetServerSideProps<
  CvPageProps
> = async _context => {
  const fullPath = path.join('pages', 'about', 'cv.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    props: { contentHtml },
  };
};

const CvPage = ({ contentHtml }: CvPageProps) => {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
};

export default CvPage;

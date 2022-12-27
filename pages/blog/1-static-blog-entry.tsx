import { GetStaticProps } from 'next';

interface StaticBlogEntryProps {
  message: string;
}

export const getStaticProps: GetStaticProps<StaticBlogEntryProps> = () => {
  return {
    props: {
      message: 'static',
    },
  };
};

const StaticBlogEntry = ({ message }: StaticBlogEntryProps) => {
  return <div>This is a static blog post: {message} </div>;
};

export default StaticBlogEntry;

import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { getData } from '../api/hello';

interface DynamicBlogEntryProps {
  message: string | null;
}

export const getServerSideProps: GetServerSideProps<
  DynamicBlogEntryProps
> = async _context => {
  const initialData = await getData().then(data => JSON.stringify(data));

  return {
    props: { message: initialData },
  };
};

const DynamicBlogEntry = ({ message }: DynamicBlogEntryProps) => {
  const [apiData, setApiData] = useState<string | null>(message);
  const handleClick = async () =>
    fetch('/api/hello')
      .then(r => r.json())
      .then(data => setApiData(JSON.stringify(data)));

  return (
    <div>
      This is a dynamic blog post
      <div>
        <button onClick={handleClick}>click me</button>
        {apiData && <div>data from api: {apiData}</div>}
      </div>
    </div>
  );
};

export default DynamicBlogEntry;

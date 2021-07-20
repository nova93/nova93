import { NextPage } from "next";

import getPost from "../lib/getPost";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  children?: React.ReactNode;
  content: string;
};

const HomePage: NextPage<Props> = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export const getStaticProps = async () => {
  const post = getPost();
  const content = await markdownToHtml(post);

  return {
    props: {
      content,
    },
  };
};

export default HomePage;

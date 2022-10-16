import { GetStaticProps, NextPage } from "next";
import { Container, useTheme } from "@nextui-org/react";

import getPost from "../lib/getPost";
import markdownToHtml from "../lib/markdownToHtml";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  content: string;
};

const HomePage: NextPage<Props> = ({ content }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Rob Moritz</title>
      </Head>
      <Container
        css={{ my: theme.space.xl.value }}
        justify="center"
        display="flex"
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = getPost();
  const content = await markdownToHtml(post);

  return {
    props: {
      content,
    },
  };
};

export default HomePage;

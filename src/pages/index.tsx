import { GetStaticProps, NextPage } from "next";
import { Container, useTheme } from "@nextui-org/react";

import Seo from "../components/seo";
import getPost from "../lib/getPost";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  children?: React.ReactNode;
  content: string;
};

const HomePage: NextPage<Props> = ({ content }) => {
  const { theme } = useTheme();

  return (
    <>
      <Seo
        title="Rob Moritz - Lead Web Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
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

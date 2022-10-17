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
        title="Robert Moritz - Senior Full-stack Developer"
        description="A people-focused Senior Full-stack Developer with a passion for new tech, all things serverless, and reducing code. Experienced in architecting and delivering bespoke, end-to-end, scalable software solutions."
      />
      <Container
        css={{ my: xl, maxWidth: xs }}
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

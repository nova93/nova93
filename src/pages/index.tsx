import { NextPage } from "next";
import { Container, useTheme } from "@nextui-org/react";

import Seo from "../components/seo";
import styles from "../homePage.module.css";

type Props = {
  children?: React.ReactNode;
  content: string;
};

const HomePage: NextPage<Props> = () => {
  const { theme } = useTheme();

  return (
    <>
      <Seo
        title="Robert Moritz - Senior Full-stack Developer"
        description="A people-focused Senior Full-stack Developer with a passion for new tech, all things serverless, and reducing code. Experienced in architecting and delivering bespoke, end-to-end, scalable software solutions."
      />
      <Container
        css={{ my: theme.space.xl.value }}
        display="flex"
        justify="center"
        responsive={false}
        xs
      >
        <div>
          <div className={styles.avatarWrapper}>
            <img src="https://robmoritz.me/avatar.jpg" alt="avatar" />
            <h1>Robert Moritz</h1>
          </div>
          <p className={styles.noMargin}>
            Cardiff, United Kingdom /{" "}
            <a
              href="mailto:robert@nott-studios.co.uk"
              style={{ color: "rgb(17, 24, 28)" }}
            >
              robert.b.moritz@gmail.com
            </a>
          </p>
          <h2 className={styles.noMargin}>
            Senior Full-stack Software Developer
          </h2>
          <p className={styles.noMargin}>
            A people-focused Senior Full-stack Developer with a passion for new
            tech, all things serverless, and reducing code. Experienced in
            architecting and delivering bespoke, end-to-end, scalable software
            solutions.
          </p>
          <h2 className={styles.marginTop}>Experience</h2>
          <h3 style={{ marginTop: "0.625rem" }}>Oodle Car Finance</h3>
          <p style={{ margin: "0 0 1rem" }}>October 2019 - Present</p>
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Senior Software Developer
          </h4>
          <p style={{ margin: "0 0 1rem" }}>
            <em>Since October 2022</em>
          </p>
          <p style={{ margin: "0 0 1rem" }}>
            Technical, Team &amp; Project Lead | Acting Scrum Master | Coach
            &amp; mentor. Bridged the gap between technical and non-technical,
            including building relationships between the Legal and the
            Engineering department | Coached Agile Methodologies, Scrum |
            Proposed and drove large-scale micro front-end architecture
            migration | Implemented a shift to Serverless | Architected BFF
            model for the web department.
          </p>
          <p style={{ margin: "0 0 1rem" }}>
            <strong>Tech Stack</strong>: Next.js, Node.js, Serverless Framework,
            REST, GraphQL, Jest, Sonar Cloud, GitHub Actions for CI/CD,
            Micro-frontends, BFF-model services.
          </p>
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Web Developer
          </h4>
          <p style={{ margin: "0 0 1rem" }}>
            Delivered multiple projects: Oodle website, direct-to-customer
            initiative, customer portal, and many more | Encouraged increased
            test coverage and better coding practices
          </p>
          <p style={{ paddingBottom: "3rem", margin: "0 0 1rem" }}>
            <strong>Tech Stack</strong>: React.js, Node.js, Elastic Beanstalk,
            REST, GraphQL, Jest, Jenkins for CI/CD, BFF-model services
          </p>
          <h3 style={{ marginTop: "2rem" }}>Nott Development Studios</h3>
          <p style={{ margin: "0 0 1rem" }}>July 2015 - Present</p>
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Web Developer/Co-founder
          </h4>
          <p style={{ margin: "0 0 1rem" }}>
            Nott Studios is seeking to re-define the e-commerce space for SMEs.
            With over 7 years experience, and dozens of satisfied clients, we
            are well into that journey. Utilizing the newest technologies, such
            as Serverless or headless CMS`, we help merchants solve their
            problems, long-term.
          </p>
          <h2 style={{ marginTop: "1rem" }}>Education</h2>
          <p style={{ margin: "0 0 1rem" }}>
            Cardiff University - CoHE, Astrophysics - 2012-2015
          </p>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </Container>
    </>
  );
};

export default HomePage;

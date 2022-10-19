import Head from "next/head";

type Seo = {
  title: string;
  description: string;
  image?: string;
};

const Seo = ({ title, description, image = "/social.jpg" }: Seo) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://robmoritz.me/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} name="image" />
    <meta property="og:image:width" content="1200px" />
    <meta property="og:image:height" content="628px" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://robmoritz.me/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

    <meta name="author" content="Robert Moritz" />
  </Head>
);

export default Seo;

import { DEFAULT_DESCRIPTION } from "../common";
import Nav from "../components/nav";
import Seo from "../components/seo";

const HomePage = () => {
  return (
    <>
      <Seo
        title="robert moritz - senior full-stack developer"
        description={DEFAULT_DESCRIPTION}
      />
      <Nav />
      <h1>rob moritz</h1>
      <p>opportunities@robmoritz.me</p>
      <p>{DEFAULT_DESCRIPTION}</p>
    </>
  );
};

export default HomePage;

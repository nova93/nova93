import Link from "next/link";
import Seo from "../components/seo";

const BlogPage = () => (
  <>
    <Seo title="blog - robmoritz.me" />
    <h1>blog</h1>
    <Link href="/blog/ai-native">push for ai-native</Link> - 8th may &apos;25
    <hr />
    <p>waiting for inspiration, planned pieces are:</p>
    <p>process vs culture</p>
    <p>how to push for adoption</p>
  </>
);

export default BlogPage;

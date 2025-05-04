import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/me">me</Link> | <Link href="/blog">blog</Link><br />
    <small className="highlight">i&apos;m looking for a cool(er) job, shout if you know one</small>
  </nav>
)

export default Nav;
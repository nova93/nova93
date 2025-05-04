import Link from "next/link";

const Nav = () => (
  <p>
    <Link href="/me">me</Link> | <Link href="/blog">blog</Link><br />
    <small>i&apos;m looking for a cool(er) job, shout if you know one</small>
  </p>
)

export default Nav;
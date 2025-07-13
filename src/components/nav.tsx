import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/me">me</Link>
    <br />
    <small className="highlight">
      i&apos;m looking for a cool job, shout if you know one
    </small>
  </nav>
);

export default Nav;

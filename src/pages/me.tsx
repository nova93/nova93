import { DEFAULT_DESCRIPTION } from "../common"
import Nav from "../components/nav"
import Seo from "../components/seo"

const MePage = () => (
  <>
    <Seo
      title="me - robmoritz.me"
      description={DEFAULT_DESCRIPTION}
    />
    <Nav />
    <h1>me</h1>
    <p>opportunities@robmoritz.me</p>
    <h2>core</h2>
  </>
)

export default MePage
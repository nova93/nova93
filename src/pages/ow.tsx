import Nav from "../components/nav"
import Seo from "../components/seo"

const MeowPage = () => (
  <>
    <Seo
      title="meow - robmoritz.me"
    />
    <Nav />
    <p>meow?</p>
    <img src="/cat.gif" width="200px" title="cat drinking coffee" />
    <small><em>credit: <a href="https://giphy.com/hoppip/">@hoppip</a></em></small>
  </>
)

export default MeowPage
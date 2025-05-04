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
    <section>
      <h2>who am i</h2>
      <p>i&apos;m a dev, i solve problems, especially those which span multiple teams and functions. in my mind, a problem cannot be solved without a full understanding of it, which more often than not, has nothing to do with the company and everything to do with the end user</p>
      <p>here are some buzzwords for you: i hate silos; process is meant to help us, not hinder us; come to me with problems, not solutions, and let&apos;s work together on a solution; titles are meaningless; treat everyone with respect;</p>
    </section>
    <section>
      <h2>core</h2>
      <p>javascript (js), typescript (ts), node.js, react.js, next.js, apollo graphql, serverless, event-driven and transactional architectures, mongodb, postgresql, rest, test-driven development, ci/cd pipelines</p>
    </section>
    <section>
      <h2>projects</h2>
      <article>
        <h3>
          <small><em>duel tech, &apos;25</em></small><br />
          legacy fe migration/rebuild
        </h3>
        <p>&quot;micro-frontends&quot;, multi-domain app, proxy, css customizations, </p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>ame system, &apos;25 +</em></small><br />
          cad-esque visualization
        </h3>
        <p>a customizable product visualization</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>duel tech, &apos;24</em></small><br />
          infrastructure review for 10x
        </h3>
        <p>investigation into performance bottlenecks in prep for 10x, what do we need to do to support the planned growth</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>leva, &apos;24</em></small><br />
          rewrite of back-office tool
        </h3>
        <p>complete rethink of the back-end tool, built using retool (low-code tool)</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>leva, &apos;23</em></small><br />
          medical data collection
        </h3>
        <p>patient reported outcome metrics (proms), custom form builder, extensible and all the good things</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>oodle, &apos;22</em></small><br />
          greenfield hub
        </h3>
        <p>micro-frontends hub</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>oodle, &apos;22</em></small><br />
          micro-frontends migration
        </h3>
        <p>frontend monolith to micro-frontends</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>oodle, &apos;21</em></small><br />
          bff model
        </h3>
        <p>migration from ELB micro-services to BFF model on serverless</p>
      </article>
      <hr />
      <article>
        <h3>
          <small><em>before &apos;21</em></small><br />
          stuffs and things
        </h3>
        <p>too long ago, don&apos;t remember specifics, so here&apos;s a brain dump</p>
      </article>
    </section>
  </>
)

export default MePage
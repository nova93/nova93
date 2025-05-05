import { DEFAULT_DESCRIPTION } from "../common";
import Seo from "../components/seo";

const MePage = () => (
  <>
    <Seo title="me - robmoritz.me" description={DEFAULT_DESCRIPTION} />
    <h1>me</h1>
    <p>opportunities@robmoritz.me</p>
    <section>
      <h2>who am i</h2>
      <p>
        i&apos;m a dev, i solve problems, especially those which span multiple
        teams and functions. in my mind, a problem cannot be solved without a
        full understanding of it, which more often than not, has nothing to do
        with the company and everything to do with the end user
      </p>
      <p>
        here are some buzzwords for you: i hate silos; process is meant to help
        us, not hinder us; come to me with problems, not solutions, and
        let&apos;s work together on a solution; titles are meaningless; treat
        everyone with respect;
      </p>
    </section>
    <section>
      <h2>core</h2>
      <p>
        javascript, typescript, node.js, react.js, next.js, apollo graphql,
        serverless, event-driven and transactional architectures, mongodb,
        postgresql, rest, test-driven development, ci/cd pipelines
      </p>
    </section>
    <section>
      <h2>projects</h2>
      <article>
        <h3>
          <small>
            <em>duel tech, &apos;25</em>
          </small>
          <br />
          legacy fe migration/rebuild
        </h3>
        <p>
          current project, a long project to migrate users to a new
          yet-to-be-built app, with an extra spicy wrench of multi-domain where
          they are &quot;hardcoded&quot; into the iaas. ask me about it, since
          it is developing fast
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>ame system, &apos;25 +</em>
          </small>
          <br />
          cad-esque visualization
        </h3>
        <p>
          a small project, to build a customizable product (aluminium extrusion,
          so cool yea?) in shopify + visualization of user selection. reminded
          me of my attempts at unity dev. result is a dynamic svg
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>duel tech, &apos;24</em>
          </small>
          <br />
          infrastructure review for 10x
        </h3>
        <p>
          investigation into performance bottlenecks in prep for 10x, what do we
          need to do to support the planned growth. looked at heroku dynos, aws
          elastibeanstalks, mongodb cluster, using iaas metrics paired with
          elastic apm. looked at the current situation, options for the future +
          ceilings (vercel is cool for small traffic, but costs grow quickly, or
          heroku can have max of n dynos per app)
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>rubber duckling, &apos;24</em>
          </small>
          <br />
          duckdb ui
        </h3>
        <p>
          frontend + web assembly duckdb, for running analytics pipelines
          locally. a data scientist + me, but then duckdb ui came out, which was
          exactly what we were building
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>leva, &apos;24</em>
          </small>
          <br />
          rewrite of back-office tool
        </h3>
        <p>
          (tech) led a complete rethink of the back-end tool, built using retool
          (low-code tool)
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>leva, &apos;23</em>
          </small>
          <br />
          medical data collection (medical cannabis)
        </h3>
        <p>
          patient reported outcome metrics (proms), custom form builder,
          extensible and all the good things, paired with very specific medical
          science requirements. heavily regulated space, and data sharing
          agreements (gov)
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>oodle, &apos;22</em>
          </small>
          <br />
          greenfield hub
        </h3>
        <p>
          (tech) led a team to build a new project using micro-frontends
          architecture from below. all the usual greenfield problems were on my
          shoulders (such as, what&apos;s the problem we are trying to solve
          here?)
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>oodle, &apos;22</em>
          </small>
          <br />
          micro-frontends migration
        </h3>
        <p>
          designed micro-frontends solution to a specific problem (3 search
          experiences, which could be unified), which ended up being used across
          the board in prep for massive hiring push (and then covid happened)
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>oodle, &apos;21</em>
          </small>
          <br />
          bff model
        </h3>
        <p>
          designed, presented, got approved and facilitated migration from ELB
          micro-services to bff model on serverless. nodejs + apollo graphql
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>before &apos;21</em>
          </small>
          <br />
          stuffs and things
        </h3>
        <p>
          too long ago, don&apos;t remember specifics, so here&apos;s a brain
          dump: a lot of shopify, wordpress and static sites. mysql, php,
          apache, bare-metal servers. as nds (me+designer), we build out shops
          selling everything from candles, to luxurious furniture and fitness
          equipment (shipping calculations on those are nigh on impossible, but
          that might be due to lack of will to compromise). projects across the
          world: australia, usa, europe, so a lot of timezones + currencies
        </p>
      </article>
    </section>
  </>
);

export default MePage;

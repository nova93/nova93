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
        I&apos;m a dev, I solve problems, especially those which span multiple
        teams and functions. In my mind, a problem cannot be solved without a
        full understanding of it, which more often than not, has everything to
        do with the end user. User experience is front and center, and the
        beginning of everything I do.
      </p>
      <p>
        Here are some snippets to get to know me better: I hate silos; process
        is meant to help us, not hinder us; Come to me with problems, not
        solutions, and let&apos;s work together on a solution; Titles are
        meaningless; Treat everyone with respect;
      </p>
    </section>
    <section>
      <h2>core</h2>
      <p>
        Javascript, Typescript, Node.js, React.js, Next.js, Apollo Graphql,
        Serverless, Event-driven and transactional architectures, MongoDB,
        PostgreSQL, RESTful, Test-driven development, CI/CD pipelines
      </p>
    </section>
    <section>
      <h2>projects</h2>
      <p>
        While I&apos;ve been a full-time employee for years now, I try to define my work in terms of projects, which I&apos;m outlining below. I&apos;ve generally been working in a Scrum team, lately, we&apos;ve been experimenting with Shape Up.
      </p>
      <article>
        <h3>
          <small>
            <em>duel tech, &apos;25</em>
          </small>
          <br />
          legacy frontend migration/rebuild
        </h3>
        <p>
          Current project, a long project to migrate users to a new
          yet-to-be-built app, with an extra spicy wrench of multi-domain where
          they are &quot;hardcoded&quot; into the infrastructure. Ask me about it, since
          it is developing fast. Latest news: Setup reverse proxy micro-frontends to enable us to test our product assumptions with selected beta users.
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
          A small project, to build a customizable product (aluminium extrusion,
          so cool yea?) in shopify + visualization of user selection. Reminded
          me of my attempts at Unity dev. Result is a dynamic SVG
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
          Investigation into performance bottlenecks in prep for 10x, what do we
          need to do to support the planned growth. Looked at Heroku dynos, AWS
          Elastibeanstalks, MongoDB cluster, using IaaS metrics paired with
          Elastic APM. Looked at the current situation, options for the future +
          ceilings (Vercel is cool for small traffic, but costs grow quickly, or
          Heroku can have max of n dynos per app)
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
          Frontend + web assembly DuckDB, for running analytics pipelines
          locally. a data scientist + me, but then DuckDB ui came out, which was
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
          (Tech) led a complete rethink of the back-end tool, built using Retool
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
          Patient reported outcome metrics (PROMs), custom form builder,
          extensible and all the good things, paired with very specific medical
          science requirements. Heavily regulated space, with government data
          sharing agreements
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>leva, &apos;23</em>
          </small>
          <br />
          rebuild engineering processes
        </h3>
        <p>
          Leva was going through a big shift, and the culture (as well as code
          quality) dropped significantly. Re-structured the engineering
          department to be more efficient. Fixed processes and opened up comms
          and transparency, especially between engineering and product.
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
          (Tech) led a team to build a new project using micro-frontends
          architecture from below. All the usual greenfield problems were on my
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
          Designed micro-frontends solution to a specific problem (3 search
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
          backend-for-frontend (BFF) model
        </h3>
        <p>
          Designed, presented, got approved and facilitated migration from ELB
          micro-services to the BFF model on serverless. Node.js + Apollo
          GraphQL
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>oodle, &apos;19</em>
          </small>
          <br />
          car search experience
        </h3>
        <p>
          Used-car search experience, as a part of wider car loan pipeline.
          Amazing customer-centric product, since we weren&apos;t selling cars,
          but loans, so the job was the find our customers the best possible car
          within their loan amount
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <small>
            <em>before &apos;19</em>
          </small>
          <br />
          stuffs and things
        </h3>
        <p>
          Too long ago, don&apos;t remember specifics, so here&apos;s a brain
          dump: a lot of Shopify, Wordpress and static sites. MySQL, PHP,
          Apache, bare-metal servers. as NDS (me+designer), we build out shops
          selling everything from candles, to luxurious furniture and fitness
          equipment (shipping calculations on those are nigh on impossible, but
          that might be due to lack of will to compromise). Projects across the
          world: Australia, USA, Europe, so a lot of timezones + currencies
        </p>
      </article>
    </section>
  </>
);

export default MePage;

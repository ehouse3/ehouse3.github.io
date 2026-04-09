import { LineBreak } from "@/components/components";

export default function Home() {
  return (
    <div>
      <section className="mb-3" data-desc="introduction">
        <div>
          <h2>Hello and welcome!</h2>
          <div className="ml-5">
            <p>
              I&apos;m Euan, a programmer, a developer, and a Penn State
              graduate
            </p>
            <p>
              Here you can find some information about me and what I like to do.
              Feel free to check out my Linkedin or Github
            </p>
          </div>
        </div>
      </section>

      <LineBreak className="my-20"></LineBreak>

      <section data-desc="skills">
        <div className="mb-3 ml-5">
          <p>Here are some languages and tools I have used:</p>
        </div>

        <div className="grid grid-cols-4 text-center">
          <div className="col-span-1" data-desc="languages">
            <ul role="list">
              <h4>Languages</h4>
              <LineBreak
                isSkeleton={true}
                className="my-1 h-0.5 via-gray-400"
              ></LineBreak>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SQL & Postgres</li>
              <li>HTML & CSS</li>
              <li>C</li>
            </ul>
          </div>

          <div data-desc="libraries">
            <ul role="list">
              <h4>Libraries</h4>
              <LineBreak
                isSkeleton={true}
                className="my-1 h-0.5 via-gray-400"
              ></LineBreak>
              <li>React</li>
              <li>Tailwind</li>
              <li>MUI</li>
              <li>TwMerge</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
            </ul>
          </div>

          <div data-desc="frameworks">
            <ul role="list">
              <h4>Frameworks</h4>
              <LineBreak
                isSkeleton={true}
                className="my-1 h-0.5 via-gray-400"
              ></LineBreak>
              <li>Next.js</li>
              <li>Spring Boot</li>
              <li>Flask</li>
              <li>Django</li>
            </ul>
          </div>

          <div data-desc="tools">
            <ul role="list">
              <h4>Tools</h4>
              <LineBreak
                isSkeleton={true}
                className="my-1 h-0.5 via-gray-400"
              ></LineBreak>
              <li>Git & Github</li>
              <li>Node</li>
              <li>Maven</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <LineBreak></LineBreak> */}

      <section data-desc="hobbies">
        <div></div>
      </section>
    </div>
  );
}

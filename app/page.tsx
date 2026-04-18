import { LineBreak, Section } from "@/components/components";

export default function Home() {
  return (
    <div>
      <Section data-desc="introduction">
        <div>
          <h1 className="mb-2">About me</h1>
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
      </Section>

      <Section alternate data-desc="skills">
        <div className="mb-3 ml-5">
          <p>Here are some languages and tools I have used:</p>
        </div>

        <div className="grid grid-cols-4 text-center">
          <div className="col-span-1" data-desc="languages">
            <ul role="list">
              <h4>Languages</h4>
              <LineBreak
                isSkeleton
                className="my-1 h-0.5 via-gray-500"
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
                isSkeleton
                className="my-1 h-0.5 via-gray-500"
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
                isSkeleton
                className="my-1 h-0.5 via-gray-500"
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
                isSkeleton
                className="my-1 h-0.5 via-gray-500"
              ></LineBreak>
              <li>Git & Github</li>
              <li>Node</li>
              <li>Maven</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section data-desc="hobbies">
        <div></div>
      </Section>
    </div>
  );
}

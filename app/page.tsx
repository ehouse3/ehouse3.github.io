import { LineBreak, Section, SubSection } from "@/components/components";

export default function Home() {
  return (
    <div>
      <Section data-desc="introduction">
        <div>
          <h1 className="mb-2">About me</h1>
          <SubSection>
            <p>
              I&apos;m Euan, a programmer, a developer, and a Penn State
              graduate
            </p>
            <p>
              Here you can find some information about me and what I like to do.
              Feel free to check out my Linkedin or Github in the top right (or
              in the bottom on mobile!)
            </p>
            <p className="">
              I have been practicing, learning and growing with developing
              software and using technology. My favorite language is Typescript{" "}
              <i className="ci ci-typescript align-text-top"></i>.
            </p>
          </SubSection>
        </div>
      </Section>

      <Section alternate data-desc="skills">
        <div className="mb-3 ml-5">
          <p>Here are some languages and tools I have used:</p>
        </div>

        {/* TODO: Fix overlapping on small screens */}
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

      <Section data-desc="about-me-continued">
        <SubSection>
          <p>
            The first programming language I used was Java{" "}
            <i className="ci ci-java align-text-top"></i>, where I learned
            object-oriented programming, ye olde swing gui, and a bit of
            multithreading. In college, I migrated this knowledge to Python{" "}
            <i className="ci ci-python align-text-top"></i>, exploring the many
            things Python can do. I crafted neural networks using PyTorch,
            created backend architecture for an e-commerce site in Flask, and
            created a file storage application using tkinter employing low-level
            solutions.
          </p>
          <p>
            I explored and learned more complex algorithms, low-level
            programming, OS operations, as well as system security / attacks
            with C in college as well. I created low-level programs, like a
            tested, efficient heap allocator, and a JBOD organization software.
            For my Cyber Security minor, I simulated network attacks, SQL
            injection attacks, certificate exploits, DNS spoofing, XSS attacks,
            and finally, fixes for all of these. Fun stuff!
          </p>
          <p>
            Finally, enjoying the construction of UI, I tried out JavaScript
            then subsequently TypeScript{" "}
            <i className="ci ci-typescript align-text-top"></i>. I created a
            tabletop simulator in JavaScript{" "}
            <i className="ci ci-javascript align-text-top"></i>, then a Covid
            Dashboard exploring Next.js, TypeScript as well as React.
          </p>
          <p>
            My most recent and proud accomplishments are the creation of a
            full-stack task management application, using a Java, Spring Boot,
            and PostgreSQL backend, as well as a Next.js, TypeScript and React
            frontend. Furthermore, I recently received the certification for the
            AWS cloud practitioner as well!
          </p>
          <p>
            If you want to learn more about some of these projects, or read
            about some of the challenges and things learned, check out the links
            above
          </p>
        </SubSection>
      </Section>

      <Section data-desc="hobbies">
        <SubSection></SubSection>
      </Section>
    </div>
  );
}

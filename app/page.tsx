import { LineBreak } from "@/components/components";

export default function Home() {
  return (
    <div>
      <section data-desc="introduction">
        <div>
          <h2>Hello and welcome!</h2>
          <p>
            I&apos;m Euan, a programmer, a developer, and a Penn State graduate
          </p>
          <p>
            Here you can find some information about me and what I like to do.
            Feel free to check out my Linkedin or Github
          </p>
        </div>
      </section>

      {/* <LineBreak></LineBreak> */}

      <section data-desc="skills">
        <div data-desc="languages"></div>
        <div data-desc="frameworks"></div>
        <div data-desc="libraries"></div>
        <div data-desc="tools"></div>
      </section>

      {/* <LineBreak></LineBreak> */}

      <section data-desc="hobbies">
        <div></div>
      </section>
    </div>
  );
}

import { LineBreak } from "@/components/components";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">
        Unfortunatly, my portfolio is currently under maintenance.
      </h1>
      <h1 className="text-5xl">🚧</h1>

      <section data-desc="introduction">
        <div></div>
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

import { Section } from "@/components/components";

export default function taskManager() {
  return (
    <div>
      <Section data-desc="about">
        <h1 className="mb-2">Task Management Application</h1>
        <h4 className="mb-1">Authenticated Full Stack Organization Tool</h4>
        <p className="ml-5">
          Where as my previous projects focused on the content, this project
          focused almost soley on the delivery and technical features of making
          the app. This project was a major step up from my previous ones. It
          started as an app focused around organization and managing tasks /
          projects with dates, then quickly diverted because I wanted to
          experiment with with features of the frameworks and libraries I was
          using. While I felt comfortable using Next.js, and had experience
          creating backend systems in the past, I wanted to really utilize the
          frameworks to their fullest.
        </p>
      </Section>

      <Section alternate data-desc="goals">
        <div className="mb-3">
          <h2 className="mb-1">Goals</h2>
          <p>
            Similar to my other projects, setting goals helped narrow in on what
            I wanted to learn. Overall, filling in gaps of knowledge from other
            projects was a major concern
          </p>
        </div>
        <div className="mb-3 ml-5">
          <p>
            <strong>Explore Frontend Features</strong> — middleware, dynamic
            routes, app router, layouts
          </p>
          <p>
            <strong>Utilize Industry Build Tools</strong> — Docker,
            containerization,
          </p>
          <p>
            <strong>Understand backend systems</strong> — multi layered
            architecture, Rest API
          </p>
          <p>
            <strong>Authentication with Security</strong> — JWT&apos;s,
            Middleware, filters, and validation
          </p>
        </div>
        <div>
          <p>
            These weren&apos;t extremly lofty goals, but it wasn&apos; going to
            be a walk in the park either. Many of these goals showed up halfway
            through the project, which is what made this exciting and fun to
            create.
          </p>
        </div>
      </Section>

      <Section data-desc="challenges">
        <div className="mb-3">
          <h2>Challenges Faced</h2>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Rest API</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Layered Backend</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Authentication Filter and Middleware</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Authentication Context</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>
      </Section>

      <Section alternate data-desc="details">
        <div className="mb-3">
          <h2>Design Details</h2>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Rest API Pipeline</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Spring Boot & Statelessness</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">AI Use</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Front-End</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Authentication Pipeline</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Postgresql Database</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>
      </Section>
    </div>
  );
}

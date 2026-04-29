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
          experiment with features of the frameworks and libraries I was using.
          While I felt comfortable using Next.js, and had experience creating
          backend systems in the past, I wanted to really utilize the frameworks
          to their fullest.
        </p>
      </Section>

      <Section alternate data-desc="goals">
        <div className="mb-3">
          <h2 className="mb-1">Goals</h2>
          <p>
            Similar to my other projects, setting goals helped narrow in on what
            I wanted to learn. Overall, filling in gaps of knowledge from other
            projects was a major goal I strived for
          </p>
        </div>
        <div className="mb-3 ml-5">
          <p>
            <strong>Explore Framework Features</strong> — middleware, layouts,
            multilayered arch,
          </p>
          <p>
            <strong>Utilize Industry Build Tools</strong> — Docker,
            containerization, CICD
          </p>
          <p>
            <strong>Understand Industry Methods</strong> — RESTful API,
            Integration Testing, DTO&apos;s, Error Handling
          </p>
          <p>
            <strong>Authentication with Security</strong> — JWT&apos;s,
            middleware, filters, and validation
          </p>
        </div>
        <div>
          <p>
            My previous projects left a lot of gaps of knowledge for certain
            areas, and was reflected in what I wanted to create to fill in those
            gaps. The backend of the Nittany Business Application, I felt was
            lacking precise design decisions to account for expandability. The
            Covid Dashboard didn&apos;t let me deep dive into Next.js features
            as much as I would have wanted that a regular multi page or secure
            front end might require
          </p>
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
          <h4 className="mb-1">RESTful API</h4>
          <div className="ml-5">
            <p>
              The RESTful API proved challenged for a number of reasons,
              debugging was difficult and tedious, interacting with JSON was
              error prone, and finally consistency across all endpoints.
            </p>
            <p>
              I think the crux of the issue I was facing in creating this API,
              was that it turned out to be another pipeline for errors to
              traverse through undiscovered. I needed to stop these errors in
              their tracks. I had experience designing a database and the
              relations that needed to exist for it to function, but interfacing
              with the backend was difficult. This API felt weaker than it
              needed to be. A major bug I came across was because of JSON types
              and how it worked with typescript. I attempted to use TypeScript
              types as a way to keep data consistent while traversing the API,
              but that was not enough. Without a rock solid JSON schema, a
              single misplaced data label caused data to be lost in transit.
              Although now it feels embarrasing that such a small error caused
              so much headache, at the time it was extremly frustrating
            </p>
            <p>
              In the future there are many things I would do differently, and
              there are many tools that would fix these problems as well. JSON
              Schemas obviously as well as strict validation. It aligns closely
              with how typescript types work, which will make this a must have
              in the future. Lucrative API testing would also have proven
              useful, and would have gone a long way to reducing debugging time.
              I didn&apos;t fall for the pitfalls that I imagined most juniors
              might have fallen for in making an API for the first time, but I
              learned a lot from the issues I did have
            </p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Spring Boot</h4>
          <div className="ml-5">
            <p>
              Compared to the API, the backend&apos;s organization didn&apos;t
              give me nearly as much trouble. By following core design
              principles for OOP, and expanding the CRUD system, it was straight
              forward. The core difficulty lied in using Spring Boot, and
              ensuring the right layers had the right functions. Spring Boot is
              a very abstracted and annotation heavy package. In the beginning,
              there was a lot happening under the hood that I was unable to see,
              and thus caused issues. But I quickly came to understand why each
              annotation was there and the problem that was fixed because of it,
              which in the end helped speed up production.
            </p>
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
            <p>
              Implementing a Restful API both aligned closely with utilizing
              industry methods and was essentially required for the construction
              of this tech stack. The pipeline of data needed a channel to
              travel from the frontend to the backend.
            </p>
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

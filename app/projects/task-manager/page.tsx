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
              ensuring the annotations worked the way I thought they would work.
              Spring Boot is a very abstracted and annotation heavy package
              compared to what I have used in the past. In the beginning, there
              was a lot happening under the hood that I was unable to see, and
              thus caused issues. But I quickly came to understand why each
              annotation was there and the problem that was fixed because of it,
              which assisted with organization in the end. Its annotations for
              reducing boilerplate code helped speed up developement as well!
            </p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Authentication Filter and Middleware</h4>
          <div className="ml-5">
            <p>
              Creating the filter was less of a challenge itself and more of a
              test to ensure all data was up to standard. It was often the
              source of errors when other systems weren&apos;t working
              correctly, like the JWT tokens, or JSON errors, or even API
              issues. The filter itself generally was easy to design. It needed
              to be lightweight because it was running on every API call, but
              also robust to catch as many errors as it can. I found keeping the
              filter simple proved to be an effective approach, and to throw a
              lot of errors
            </p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Authentication Context</h4>
          <div className="ml-5">
            <p>
              I knew that establishing a thorough front end auth context for
              this application was going to be time consuming. It needed to
              ensure security, establish maintainability and expandability, and
              needed to be able to branch most of the application. The issues
              that I encountered for this task wasn&apos;t because it was
              particularly hard, but because I had high expections for it. It
              would be user and token context for the entire app, both public
              and authenticated endpoints, and needed functions to handle
              changing data as well. Finally, the user context being a major
              point in the pipeline, it needed to not suppress errors when they
              occured.
            </p>
          </div>
        </div>
      </Section>

      <Section alternate data-desc="front end details">
        <div className="mb-3">
          <h2>Design Details - Front End</h2>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Front-End</h4>
          <div className="ml-5">
            <p>
              In alignment with my goals, I implemented features that the system
              Next.js had into the task management app. Middleware that executed
              on every request redirected tokenless users to login pages, and
              let the backend verify tokens through the filter. Extensive
              components usage, and the Next.js Layout helped create reusable
              and organized elements. The components especially helped for
              elements like forms, and displaying projects themselves. The
              client side app router simplified the developemnt, and paired with
              dynamic routes made creating pages for specific project pages
              great.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Rest API Pipeline</h4>
          <div className="ml-5">
            <p>
              Implementing a Restful API both aligned closely with utilizing
              industry methods and was essentially required for the construction
              of this tech stack. The Spring Boot backend needed a protocol to
              call its CRUD functions, to bring the data through the whole app.
              Rest is often considered a simple protocol, and fit the
              description of the project as well since we do not need live
              updates. Both the backend needed functions to interact with the
              database, and the frontend needed API functions to call the
              backend API. Essentially, each function that existed in the
              backend had a function that would call it in the front end, like{" "}
              <code>getUserByEmail(), getProjectByUserId()</code>. The front-end
              uses Axios as its library of choice, and this section was
              integrated with multiple other systems as well. For instance, the
              client had to attach the JWT in the cookies to every request for
              the backend to verify. If the API caller&apos;s interceptor saw
              that it was missing a JWT, or the response was 401, it would
              redirect to the login page. The backend for this API had its own
              set of details listed below, but was similar to the front end in
              it was the system that other systems were integrated with. Like
              the filter.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Auth Context</h4>
          <div className="ml-5">
            <p>
              As I talked about in the Challenges section, I had higher
              expections for the auth context but I also have never used
              something like this before. The Authentication Context is a
              wrapper for the front end pages, that can be accessed at any page
              for user data. This prevents prop drilling among other things. It
              provides functions like{" "}
              <code>login(), logout(), register(), and refreshUser()</code>. It
              needed a provider as well for each page to have an access point
              into the context. It also needed states to store the current token
              and user data and to trigger rerenders if they change.
            </p>
            <p>
              The data is stored in cookies, which has some limitations for the
              size of data that can be stored. So far the users were pretty
              lightweight so storing them there was not an issue. Creating an
              initializer for the auth to assign pre-existing user cookies
              created a smoother user experience as well. The Auth now still
              works if the user leaves and comes back!
            </p>
            <p>
              I wanted to experiement with this as well, and decided try out
              some features that expand on what many simple guides online have
              about authContext. I created an initializer. I created a simple
              reusable function for assigning the values into cookies, and I
              created a function to refresh the user. A major sepparation I
              tried to introduce was a sepparate provider for authenticated
              pages and a provider for unauthenticated pages. There were
              multiple ideas behind this implementation, the login page and
              register page don&apos;t need logout functions, and the protected
              dashboard page doesn&apos;t need login functions. I noticed this
              when I asked a question while implementing the types for the auth.
              <q>
                why does the user variable have to be possibly null when it
                physically can&apos;t be for a majority of the pages?
              </q>{" "}
              Sepparating the two types of contexts was difficult and confusing
              for mainly the context page, because it added another layer to
              keep in mind at all times. It ultimately provided a simpler
              context for authenticated pages.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Authentication and Security Pipeline</h4>
          <div className="ml-5">
            <p>
              I wanted to implement multiple layers of security that aligned
              closely with enterprise solutions, and each at different sections
              of the data pipeline. The user starts at the front end, where the
              first layer exists. Middleware will redirect the user off of
              authenticated pages only if it&apos;s missing a token. This
              isn&apos;t perfect security because the authenitcation itself
              doesn&apos;t happen here, but it is not designed to. Similar to
              the middleware, the context will throw a lot of errors if it is
              not in formatted correctly.
            </p>
            <p>
              The second and most secure layer is the filter for the backend. As
              is discussed in the section below, this filter validates the token
              of every single api request that isn&apos;t for a public endpoint.
              It validates the keys by decrypting using the private key and
              comparing, as well as checking expiration of the keys. It will
              then create its context through spring boot and enusre
              authorization. For an added bonus, passwords are never sent out of
              the database and backend. Only brought in, and then validated. For
              password security, the passwords are stored hashed, and simple
              requirements for length and complexity are in place. I considered
              implementing password salting, but ultimately found it unnecessary
              for learning since I already know it.
            </p>
          </div>
        </div>
      </Section>

      <Section data-dest="back end details">
        <div className="mb-3">
          <h2>Design Details - Back End</h2>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Spring Boot & Statelessness</h4>
          <div className="ml-5">
            <p></p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Postgresql Database</h4>
          <div className="ml-5">
            <p>
              One important design decision I implemented regarding the Database
              was to ensure the database stayed Unidiretional. The
              architecturaly complexity and difficulties in management put me
              off of implementing any bidirectional relations in data. However,
              this meant a few functions like{" "}
              <code>findByIdWithProjects()</code> (for finding a user by their
              Id, with eagerly fetched projects) have to be specially created.
            </p>
            <p>
              This project did not start using postgreSQL either. Partway
              through, I decided to migrate from SQL to postgrSQL, because I
              wanted to experiment and learn with popular querly languages, and
              Spring Boot can support it as well.
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h4 className="mb-1">Testing</h4>
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
      </Section>
    </div>
  );
}

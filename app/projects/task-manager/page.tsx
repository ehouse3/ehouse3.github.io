import { Section, SubSection } from "@/components/components";

export default function taskManager() {
  return (
    <div>
      <Section data-desc="about">
        <h1 className="mb-2">Task Management Application</h1>
        <h4 className="mb-1">Authenticated Full Stack Organization Tool</h4>
        <p className="ml-5">
          Whereas my previous projects focused on the content, this project
          focused almost solely on the delivery and technical features of making
          the app. This project was a major step up from my previous ones. It
          started as an app focused around organization and managing tasks /
          projects with dates, then quickly diverted because I wanted to
          experiment with features of the frameworks and libraries I was using.
          While I felt comfortable using Next.js, and had experience creating
          backend systems in the past, I wanted to really utilize the frameworks
          to their fullest.
        </p>
      </Section>

      <Section title="Goals" alternate data-desc="goals">
        <SubSection>
          <p>
            Similar to my other projects, setting goals helped narrow in on what
            I wanted to learn. Overall, filling in gaps of knowledge from other
            projects was a major goal I strived for.
          </p>
          <div className="mb-3 ml-5 space-y-1">
            <p>
              <strong>Explore Framework Features</strong>: middleware, layouts,
              multilayered architecture
            </p>
            <p>
              <strong>Utilize Industry Build Tools</strong>: Docker,
              containerization, CI/CD
            </p>
            <p>
              <strong>Understand Industry Methods</strong>: RESTful API,
              Integration Testing, DTOs, Error Handling
            </p>
            <p>
              <strong>Authentication with Security</strong>: JWTs, middleware,
              filters, and validation
            </p>
          </div>
          <p>
            My previous projects left a lot of gaps of knowledge for certain
            areas, and that was reflected in what I wanted to create to fill in
            those gaps. The backend of the Nittany Business Application felt
            like it was lacking precise design decisions to account for
            expandability. The Covid Dashboard didn&apos;t let me deep dive into
            Next.js features as much as I would have wanted, that a regular
            multi-page or secure front end might require.
          </p>
          <p>
            These weren&apos;t extremely lofty goals, but it wasn&apos;t going
            to be a walk in the park either. Many of these goals showed up
            halfway through the project, which is what made this exciting and
            fun to create.
          </p>
        </SubSection>
      </Section>

      <Section title="Challenges Faced" data-desc="challenges">
        <SubSection title="RESTful API">
          <p>
            The RESTful API proved challenging for a number of reasons:
            debugging was difficult and tedious, interacting with JSON was error
            prone, and consistency across all endpoints was hard to maintain.
          </p>
          <p>
            I think the crux of the issue I was facing in creating this API was
            that it turned out to be another pipeline for errors to traverse
            undiscovered. I needed to stop these errors in their tracks. I had
            experience designing a database and the relations that needed to
            exist for it to function, but interfacing with the backend was
            difficult. This API felt weaker than it needed to be. A major bug I
            came across was because of JSON types and how they worked with
            TypeScript. I attempted to use TypeScript types as a way to keep
            data consistent while traversing the API, but that was not enough.
            Without a rock solid JSON schema, a single misplaced data label
            caused data to be lost in transit. Although now it feels
            embarrassing that such a small error caused so much headache, at the
            time it was extremely frustrating.
          </p>
          <p>
            In the future there are many things I would do differently, and
            there are many tools that would fix these problems as well. JSON
            schemas, as well as strict validation. They align closely with how
            TypeScript types work, which will make them a must-have in the
            future. Thorough API testing would also have proven useful, and
            would have gone a long way toward reducing debugging time. I
            didn&apos;t fall for the pitfalls that I imagined most juniors might
            have fallen for in making an API for the first time, but I learned a
            lot from the issues I did have.
          </p>
        </SubSection>

        <SubSection title="Spring Boot">
          <p>
            Compared to the API, the backend&apos;s organization didn&apos;t
            give me nearly as much trouble. By following core design principles
            for OOP and expanding the CRUD system, it was straightforward. The
            core difficulty lay in using Spring Boot and ensuring the
            annotations worked the way I thought they would. Spring Boot is a
            very abstracted and annotation-heavy package compared to what I have
            used in the past. In the beginning, there was a lot happening under
            the hood that I was unable to see, and that caused issues. But I
            quickly came to understand why each annotation was there and the
            problem that it fixed, which assisted with organization in the end.
            Its annotations for reducing boilerplate code helped speed up
            development as well!
          </p>
        </SubSection>

        <SubSection title="Filter and Middleware">
          <p>
            Creating the filter was less of a challenge itself and more of a
            test to ensure all data was up to standard. It was often the source
            of errors when other systems weren&apos;t working correctly, like
            the JWT tokens, JSON errors, or even API issues. The filter itself
            was generally easy to design. It needed to be lightweight because it
            was running on every API call, but also robust enough to catch as
            many errors as possible. I found keeping the filter simple proved to
            be an effective approach, and throwing a lot of errors helped too.
          </p>
        </SubSection>

        <SubSection title="Authentication Context">
          <p>
            I knew that establishing a thorough front end auth context for this
            application was going to be time consuming. It needed to ensure
            security, establish maintainability and expandability, and needed to
            branch most of the application. The issues that I encountered for
            this task weren&apos;t because it was particularly hard, but because
            I had high expectations for it. It would be user and token context
            for the entire app, both public and authenticated endpoints, and
            needed functions to handle changing data as well. Finally, the user
            context being a major point in the pipeline, it needed to not
            suppress errors when they occurred.
          </p>
        </SubSection>
      </Section>

      <Section
        title="Design Details - Front End"
        alternate
        data-desc="front end details"
      >
        <SubSection title="Next.js & React">
          {/* Add more features like choosing not to use Next.js API routes, App Router, etc. */}
          <p>
            In alignment with my goals, I implemented features from the Next.js
            framework into the task management app. Middleware that executed on
            every request redirected tokenless users to login pages, and let the
            backend verify tokens through the filter. Extensive component usage
            and the Next.js Layout helped create reusable and organized
            elements. The components especially helped for elements like forms
            and displaying projects. The client side app router simplified the
            development, and paired with dynamic routes made creating pages for
            specific projects great.
          </p>
        </SubSection>

        <SubSection title="Rest API Pipeline">
          <p>
            Implementing a RESTful API both aligned closely with utilizing
            industry methods and was essentially required for the construction
            of this tech stack. The Spring Boot backend needed a protocol to
            call its CRUD functions to bring the data through the whole app.
            REST is often considered a simple protocol, and fit the description
            of the project as well since we do not need live updates. Both the
            backend needed functions to interact with the database, and the
            frontend needed API functions to call the backend API. Each function
            that existed in the backend had a function that would call it in the
            front end, like <code>getUserByEmail(), getProjectByUserId()</code>.
            The front end uses Axios as its library of choice, and this section
            was integrated with multiple other systems as well. The client had
            to attach the JWT in the cookies to every request for the backend to
            verify. If the API caller&apos;s interceptor saw that it was missing
            a JWT, or the response was 401, it would redirect to the login page.
            The backend for this API had its own set of details listed below,
            but was similar to the front end in that it was the system that
            other systems were integrated with, like the filter.
          </p>
        </SubSection>

        <SubSection title="Auth Context">
          <p>
            As I talked about in the Challenges section, I had higher
            expectations for the auth context, and I had also never used
            something like this before. The Authentication Context is a wrapper
            for the front end pages that can be accessed at any page for user
            data. This prevents prop drilling among other things. It provides
            functions like{" "}
            <code>login(), logout(), register(), and refreshUser()</code>. It
            needed a provider as well for each page to have an access point into
            the context. It also needed states to store the current token and
            user data and to trigger rerenders if they change.
          </p>
          <p>
            The data is stored in cookies, which has some limitations for the
            size of data that can be stored. The users were pretty lightweight
            so storing them there was not an issue. Creating an initializer for
            the auth to assign pre-existing user cookies created a smoother user
            experience as well. The auth now still works if the user leaves and
            comes back!
          </p>
          <p>
            I wanted to experiment with this as well, and decided to try out
            some features that expand on what many simple guides online have
            about authContext. I created an initializer, a simple reusable
            function for assigning the values into cookies, and a function to
            refresh the user. A major separation I tried to introduce was a
            separate provider for authenticated pages and a provider for
            unauthenticated pages. There were multiple ideas behind this
            implementation. The login page and register page don&apos;t need
            logout functions, and the protected dashboard page doesn&apos;t need
            login functions. I noticed this when I asked a question while
            implementing the types for the auth:
            <q>
              Why does the user variable have to be possibly null when it
              physically can&apos;t be for a majority of the pages?
            </q>{" "}
            Separating the two types of contexts was difficult and confusing,
            mainly for the context page, because it added another layer to keep
            in mind at all times. It ultimately provided a simpler context for
            authenticated pages.
          </p>
        </SubSection>

        <SubSection title="Authentication and Security Pipeline">
          <p>
            I wanted to implement multiple layers of security that aligned
            closely with enterprise solutions, each at different sections of the
            data pipeline. The user starts at the front end, where the first
            layer exists. Middleware will redirect the user off of authenticated
            pages only if it&apos;s missing a token. This isn&apos;t perfect
            security because the authentication itself doesn&apos;t happen here,
            but it is not designed to. Similar to the middleware, the context
            will throw a lot of errors if it is not formatted correctly.
          </p>
          <p>
            The second and most secure layer is the filter for the backend. As
            discussed in the section below, this filter validates the token of
            every single API request that isn&apos;t for a public endpoint. It
            validates the keys by decrypting using the private key and
            comparing, as well as checking expiration of the keys. It will then
            create its context through Spring Boot and ensure authorization. For
            an added bonus, passwords are never sent out of the database and
            backend. They are only brought in and then validated. For password
            security, the passwords are stored hashed, and simple requirements
            for length and complexity are in place. I considered implementing
            password salting, but ultimately found it unnecessary for learning
            since I already know it.
          </p>
        </SubSection>
      </Section>

      <Section title="Design Details - Back End" data-dest="back end details">
        <SubSection title="Spring Boot &amp; Statelessness">
          <p>
            There were a lot of benefits to using Spring Boot, and a lot of
            reasons I chose this framework over others. It is a popular system
            that multiple companies and industries use. Configuring the setup,
            the environment, and the database was relatively simple. It had
            multiple ways of reducing boilerplate code, like with the{" "}
            <code>@Data</code> tag, and using some of the Spring Boot starter
            dependencies. Many of these reasons aligned with my goals for
            learning in this application.
          </p>
          <p>
            Stateless architecture was initially confusing to work with because
            no data persists between requests. The connection is self-contained
            to generally the single API request being sent and responded to.
            Getting started was difficult, but once the CRUD system was
            established, it was easier to expand upon. It was difficult ensuring
            the right amount of information was given for any API request. In
            the spirit of organization and only giving required information, the
            app uses DTOs (Data Transfer Objects) to provide a predefined schema
            of data. This helped organize the app too, because it provided a
            schema and easily showed what was needed at any function.
          </p>
          <p>
            The multi-layered Spring Boot backend was confusing because I was
            unfamiliar with it. My previous backend projects really needed it
            though, making it something I really wanted to understand. The
            separation of a controller layer, a service logic layer, and a
            repository layer for customized queries was helpful for
            organization. I also valued app-wide organization, and really wanted
            to solve the problems myself so I could build the understanding, so
            I took my time organizing the multiple layers. I initially struggled
            on where some functions should go, like checking for errors. I
            ultimately found it easier to think of the controller as a wrapper
            for the service layer, and simply pass the errors through when they
            were thrown. The controller can handle HTTP errors, and the service
            layer can handle conflicts on the database. I also decided to
            implement an authentication controller and service file separately
            from the others, to fully establish the registration and login
            pipeline, rather than lumping it together with user services. So
            far, this backend system did not delve deep into complicated queries
            or logic, but more as a solid foundation of REST and CRUD systems
            organized well into multiple layers.
          </p>
        </SubSection>

        <SubSection title="PostgreSQL Database">
          <p>
            One important design decision I implemented regarding the database
            was to ensure the database stayed unidirectional. The architectural
            complexity and difficulties in management put me off of implementing
            any bidirectional relations in data. However, this meant a few
            functions like <code>findByIdWithProjects()</code> (for finding a
            user by their ID with eagerly fetched projects) have to be specially
            created.
          </p>
          <p>
            This project did not start using PostgreSQL either. Partway through,
            I decided to migrate from MySQL to PostgreSQL because I wanted to
            experiment and learn with popular query languages, and Spring Boot
            can support it as well.
          </p>
        </SubSection>

        <SubSection title="Docker">
          <p>
            Docker is a containerization tool for isolating software and running
            reusable containers using images. As before, Docker is a tool that
            many industries use to create software, so I wanted to learn more
            about it. I&apos;ve touched upon it in the past, but never wrote my
            own images. I knew I wanted to use it because it aligned with my
            goals, but also because I actually depended upon it as well. I use
            two computers and often develop this app on one for a time and then
            the other. Regardless of what I added, Docker ensured the underlying
            software ran on both. It was much more benefitial to this project
            than I had originally thought.
          </p>
        </SubSection>

        <SubSection title="Testing">
          <p>
            I continued to follow the goals for industry methods and build
            tools, and working with the features of the frameworks. I learned
            firsthand how integral testing is to writing software because it
            catches errors before they compound. However, I implemented testing
            after the fact, so it was a lot less useful than it could have been,
            despite the fact that making the tests did resolve some errors and
            ensure my error handling was more up to par. Although in the moment
            they are frustrating because it seems they slow down production, in
            the long run it actually solves problems before they show up. Spring
            Boot has libraries for testing with built-in annotations, which I
            utilized extensively. I implemented both integration and unit
            testing for the authentication pipeline of the app. They tested
            login failures with many possible reasons, and a full registration
            run through as well. These caught incorrectly named HTTP errors and
            also found an ID assignment bug. Next app I make, I&apos;m starting
            testing on many of the layers early.
          </p>
        </SubSection>

        <SubSection title="AI Use">
          <p>
            I used AI cautiously in the creation of this app. I am here to learn
            the ropes for these frameworks, the different features, and
            experience troubleshooting problems. AI usage had multiple benefits
            and drawbacks during development. One major benefit was using AI to
            make the skeleton for this app. I found it difficult to know where
            to even begin, and AI helped walk through that phase. Some examples
            would be configuration of the database and application properties,
            setting up the Docker images, or building generic skeleton files for
            different layers. It built the bare skeleton for the controller, and
            I added the service layer and login. Some issues I ran into when
            using AI was how often I was fighting against it when it tried to
            solve actual errors or coding problems. A good example was designing
            the relations for the database. Admittedly, this was partially my
            fault because I did not go into designing the database with a rigid
            enough schema. To solve problems about retrieving data and setting
            up data relationships, it oftentimes wanted to make the data
            bidirectional. 9 times out of 10 this made the issue worse and
            caused major errors elsewhere. I never used AI as a crutch during
            this project, but prioritized using it as a tool to bounce ideas off
            of, learn from, and as a starting point.
          </p>
        </SubSection>
      </Section>
    </div>
  );
}

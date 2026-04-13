export default function covidDashboard() {
  return (
    <div>
      <section data-desc="about" className="mb-5">
        <h1>Covid Dashboard Webapp</h1>
        <p>
          This project started out of a curiosity for many new systems and
          technologies, but it turned into quite the undertaking. COVID data
          felt like the perfect subject, as is large, relates to everyone and is
          generally a positive outcome when complete. The COVID Tracking Project
          provded large repository of country wide data to work with. After
          this, I rather enjoyed exploring, experimenting with different systems
          and tools that were at my disposal. I was able to create a more modern
          approach to creating this app than before, and in the end I am proud
          to have created a large project that can transform unfiltered data,
          and turn it into a more manageable and digestable form. I am also
          proud at all of the new tools, solutions, libraries and languages used
          in this project like TypeScript, React, and Next.js to handle data at
          a larger scale!
        </p>
      </section>

      <section data-desc="goals" className="my-5">
        <h4>Goals</h4>
        <p className="mb-3">
          Before I began the undertaking, I set out some goals for myself to
          learn and explore, specfically, I wanted to:
        </p>
        <p>
          <strong>To get comfortable with Next.js.</strong> — This would be my
          first time using a dedicated frontend frameowrk. I wanted to
          understand how libraries, routes, images, project flow, and the
          overall framework feel in practice and not just follow a tutorial.
        </p>
        <p>
          <strong>Utilize TypeScript to it&apos;s fullest.</strong> — I had
          dabbled with it before but always ended up reaching for the any type
          when things got tricky.
        </p>
        <p>
          <strong>Keep the codebase clean and expandable.</strong> I wanted
          someone, or future me, to be able to jump in and add a new feature
          without having to reverse-engineer everything.
        </p>
      </section>

      <section data-desc="challenges" className="my-5">
        <h4>Challenges Faced</h4>

        <h5>Calculating 7-day averages</h5>
        <p>
          This was a feature I knew I wanted to implement, as it appeared as a
          fun Computer Science problem. Computing a rolling 7-day average on the
          fly without tanking the preformace was a major concern of mine. I
          found two solutions to this problem, and ultimatly chose to evaluate
          the average at runtime. On one hand, preprocessing the data would
          reduce client computation. On the other, the pandemic has ended making
          the data generally fixed, and over a 2 year period would result in
          less than 750 cases. This felt like an acceptable range of values to
          compute at runtime, and thus decided to process the data on the client
          side of the application
        </p>
        <p>
          The solution to this issue was a sliding window algorithm. Simply
          slide through the data, finding the average of the current 7 nodes,
          and output. After, increment the fixed window across the data until we
          reach the end.
        </p>

        <h5>Dynamic, responsive graphs</h5>
        <p>
          I knew gracefully displaying the data would be challenging, and so I
          decided to use a robust charting library called MUI. It had quite a
          learning curve, but I am glad I chose it as it had a detailed
          documentation. It took a lot of trail and error to get the graphs
          looking that way I wanted.
        </p>

        <h5>Fixing the dataset and null detection</h5>
        <p>
          The Covid Tracking Project was robust in the type of data{" "}
          <strong>sometimes </strong>collected. Not every state provided the
          data for every metric, thus leaving many metrics to be either
          partially filled or just plain blank. This inconsistency was an issue.
          When testing, I found it frustrating that it was this way. My solution
          was to pre calculate which metrics were empty, and visually display
          the metric crossed out in the dashboard. This empty metric, to
          providing style changes pipeline that needed to be introduced was
          surprisingly difficult to implement.
        </p>
      </section>

      <section data-desc="details" className="my-5">
        <h4>Details</h4>

        <h5>Next.js Framework</h5>
        <p>
          Next.js provided the solution to a general problem that I encountered
          in the past. My app needed file organization with libraries and
          configs, especially when I didn&apos;t know, at the time, what the
          future held for this project and where it would end up. As such going
          overboard with a large system was better than regretting it later.
        </p>
        <p>
          A major issue I had with this after the fact, was I did not interact
          with many of the features of the Next.js framework. There was no need
          for dynamic routes, no prefabricated images that needed optimization,
          no multipage layout needed either, and server side rendering
          wasn&apos;t needed either because it would drive up hosting costs.
          These issues that I recognized in what i learned with Next.js would
          later show up again in my next project. This wasn&apos;t the project
          for Next.js to shine, but it did play a pivitol part in the general
          organization of the app.
        </p>

        <div>
          <h5>React</h5>
          <p>
            The functions, state management, hooks, and components of React
            assisted greatly in the flow of the application. React&apos;s close
            integration with html streamlined the production of the application
            as well. Without react&apos;s state management, it would have been
            nearly impossible to create a smoothly functioning dashboard like
            this. Adding, removing, and moving the objects on the dashboard was
            made much simpler with states. However, similar to Next.js,
            Interacting with the surface features of react made me want to know
            more about what the language offered.
          </p>
        </div>

        <div>
          <h5>Tailwind CSS</h5>
          <p>
            Tailwind was in my opinion had one of the largest impacts for this
            project and honestly fixed a lot of the friction I had run into
            before with styling being too intrusive with the organization and
            codebase. In past projects I&apos;d end up with scattered
            stylesheets, one-off rules that piled up, and no clear system for
            spacing or color. Tailwind standardized most of the process and
            migrated it away from long and hard to change stylesheets. Spacing
            objects became simple and styling became close to the actual element
            it interacted with. The tailwind documentation was more than robust
            as well! Tailwind singlehandedly simplified styling and streamlined
            development an incredible amount. Combined with react&apos;s
            components, my codebase became cleaner than ever. Between Tailwind,
            React&apos;s component model, and Next.js handling the app
            organization, many of the problems I had trouble with in earlier
            projects were remedied.
          </p>
        </div>
      </section>
    </div>
  );
}

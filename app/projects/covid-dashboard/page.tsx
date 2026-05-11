import { Section, SubSection } from "@/components/components";

export default function covidDashboard() {
  return (
    <div>
      <Section data-desc="about">
        <h1 className="mb-4">Covid Dashboard Webapp</h1>
        <SubSection>
          <p>
            This project started out of a curiosity for many new systems and
            technologies, but it turned into quite the undertaking. COVID data
            felt like the perfect subject, as it is large, relates to everyone,
            and is generally a positive outcome when complete. The COVID
            Tracking Project provided a large repository of country-wide data to
            work with. After this, I rather enjoyed exploring and experimenting
            with different systems and tools that were at my disposal. I was
            able to create a more modern approach to building this app than
            before, and in the end I am proud to have created a large project
            that can transform unfiltered data into a more manageable and
            digestible form. I am also proud of all the new tools, solutions,
            libraries, and languages used in this project to handle data at a
            larger scale!
          </p>
        </SubSection>
      </Section>

      <Section title="Goals" alternate data-desc="goals">
        <SubSection>
          <p>
            Before I began the undertaking, I set out some goals for myself to
            learn and explore. Specifically, I wanted to:
          </p>
          <div className="ml-5 space-y-1">
            <p>
              <strong>Get comfortable with Next.js</strong>: This would be my
              first time using a dedicated frontend framework. I wanted to
              understand how libraries, routes, images, project flow, and the
              overall framework feel in practice and not just follow a tutorial.
            </p>
            <p>
              <strong>Utilize TypeScript effectively</strong>: I had dabbled
              with it before, and wanted to build a basic understanding of the
              language
            </p>
            <p>
              <strong>Keep the codebase clean and expandable</strong>: I wanted
              someone, or future me, to be able to jump in and add a new feature
              without having to reverse-engineer everything.
            </p>
          </div>
          <p>
            These goals were both broad enough to allow me to learn freely, but
            specific enough to still challenging. Many of these goals were
            simply about understanding, while others were about continous
            utilization. They interweaved nicely into the project.
          </p>
        </SubSection>
      </Section>

      <Section title={"Challenges Faced"} data-desc="challenges">
        <SubSection title={"Calculating 7-Day Averages"}>
          <p>
            This was a feature I knew I wanted to implement, as it presented a
            fun computer science problem. Computing a rolling 7-day average on
            the fly without tanking performance was a major concern. I found two
            solutions and ultimately chose to evaluate the average at runtime.
            On one hand, preprocessing the data would reduce client computation.
            On the other, the pandemic has ended, making the data generally
            fixed, and over a 2-year period it would result in fewer than 750
            data points. This felt like an acceptable range of values to compute
            at runtime, so I decided to process the data on the client side of
            the application.
          </p>
          <p>
            The solution was a sliding window algorithm. Simply slide through
            the data, find the average of the current 7 nodes, and output. Then
            increment the fixed window across the data until the end is reached.
          </p>
        </SubSection>

        <SubSection title="Dynamic, Responsive Graphs">
          <p>
            I knew gracefully displaying the data would be challenging, so I
            decided to use a robust charting library called MUI. It had quite a
            learning curve, but I am glad I chose it as it had detailed
            documentation. It took a lot of trial and error to get the graphs
            looking the way I wanted.
          </p>
        </SubSection>

        <SubSection title="Dataset Fixing, Integration, and Null Detection">
          <p>
            The COVID Tracking Project was robust in the type of data{" "}
            <strong>sometimes </strong>collected. Not every state provided data
            for every metric, leaving many metrics either partially filled or
            entirely blank. This inconsistency was a real problem. My solution
            was to pre-calculate which metrics were empty and visually display
            the metric crossed out in the dashboard. The pipeline of detecting
            empty metrics and applying the appropriate style changes turned out
            to be surprisingly difficult to implement.
          </p>
          <p>
            One design issue I debated was pagination. Similar to the rolling
            average, I wondered how efficiency and server load my play into
            this. I relied on the calculations from before, finding that values
            weren&apos;t being updated in the data, giving me a good scope for
            how large the data can be. This ruled out needing a major pagination
            implementation, like breaking up into pages or blocks. I did however
            break the data up by metrics.
          </p>
          <p>
            The actual data set integration turned out to be a mini API, or even
            a simple backend. When the dashboard would invoke a request for
            specific data metrics, the &quot;backend&quot; would fulfil the
            request specified. The interface for the data was specfically left
            asyncroneous as well, already setting up further fixes for speed or
            efficiency if needed. Implementing this, alongside the Nittany
            Business project, made me want to revisit my understanding of
            backend systems and fully explore them.
          </p>
        </SubSection>
      </Section>

      <Section title="Design Details" alternate data-desc="details">
        <SubSection title="Next.js Framework">
          <p>
            Next.js provided a solution to a general problem I had encountered
            in the past. My app needed file organization with libraries and
            configs, especially since I didn&apos;t know, at the time, what the
            future held for this project. Going overboard with a larger system
            felt better than regretting a lack of structure later.
          </p>
          <p>
            A major realization after the fact was that I didn&apos;t interact
            with many of the features Next.js had to offer. There was no need
            for dynamic routes, no prefabricated images requiring optimization,
            no multi-page layout, and server-side rendering wasn&apos;t needed
            either as it would have driven up hosting costs. This wasn&apos;t
            the project for Next.js to shine, but it did play a pivotal part in
            the general organization of the app. I intended to carry some of
            these lessons into my next project.
          </p>
        </SubSection>

        <SubSection title="React & TypeScript">
          <p>
            React&apos;s functions, state management, hooks, and components
            assisted greatly in the flow of the application. Its close
            integration with HTML streamlined production as well. Without
            React&apos;s state management system, it would have been nearly
            impossible to create a smoothly functioning dashboard. Adding,
            removing, and rearranging objects on the dashboard was made much
            simpler. However, similar to Next.js, only scratching the surface of
            React left me wanting to explore more of what it had to offer.
          </p>
          <p>
            TypesScript worked hand in hand with React, and was only natural to
            use at this point. I made a sure point to keep my coding standards
            high, never using the <code>any, unknown</code> types, using
            interfaces to organize components, and using built in types as well.
            Implementing these core features of TypeScript helped let me explore
            more about the language, and use it in a more powerful way. It was
            helpful as well for completing logic intensive sections, like
            parsing the data and creating the sliding window algorithm. Through
            this project, I felt significantly more comfortable using
            TypeScript.
          </p>
        </SubSection>

        <SubSection title="Tailwind CSS">
          <p>
            Tailwind, in my opinion, had the largest impact on this project and
            honestly resolved a lot of friction I had run into before with
            styling being too intrusive in the organization and codebase. In
            past projects I&apos;d end up with scattered stylesheets, one-off
            rules that piled up, and no clear system for spacing or color.
            Tailwind standardized most of the process and moved it away from
            long, hard-to-maintain stylesheets. Spacing became simple and
            styling stayed close to the actual element it applied to. The
            Tailwind documentation was more than robust as well. Tailwind
            singlehandedly simplified styling and streamlined development an
            incredible amount. Combined with React&apos;s component model, my
            codebase became cleaner than I had imagined previously. Between
            Tailwind, React&apos;s component model, and Next.js handling app
            organization, many of the problems I had struggled with in earlier
            projects were remedied.
          </p>
        </SubSection>
      </Section>
    </div>
  );
}

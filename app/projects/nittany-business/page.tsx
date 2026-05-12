import { Section, SubSection } from "@/components/components";

export default function nittanyBusiness() {
  return (
    <div>
      <Section>
        <h1 className="mb-2">Nittany Business App</h1>
        <SubSection title="E-Commerce Website and Database">
          <p>
            During my senior year of college at Penn State, for my database
            class&apos;s final project, I led a team of 4 to create an
            e-commerce web application. Our tech stack used a python backend
            with the Flask library, a sqlite database, and a javascript frontend
            with bootstrap. What made this project interesting was that it had a
            robust amount of features, like a helpdesk, user authentication,
            shopping carts, reviews, wishlists, etc. This project was great
            hands on experience in working with a team to complete a project, as
            well as working on larger software than I had before.
          </p>
        </SubSection>
      </Section>

      <Section alternate title="Challenges">
        <SubSection>
          <p>
            In order for this project to go smoothly, each of us stuck to our
            strengths. We stuck to what we knew best, but in the end, I still
            got to branch out and learn new systems.
          </p>
        </SubSection>

        <SubSection title="Leadership">
          <p>
            This project went as smooth as it did because of the decisions each
            of us was making since the beginning of the project. My
            contributions to being a leader was organizing meetings, initiating
            problems/solutions, and what I found to be most important,
            delegating work. We met weekly, if not more, to discuss and work on
            the project. It was tricky trying to find the balance in keeping
            these meetings both relaxed, but also important.
          </p>
          <p>
            It was also a balancing act to delegate tasks to group members. One
            of our group mates was very skilled with using python, so he took up
            the task to migrate the provided sample data to sqlite, as well as
            developing the backend systems. I had good experience with frontend
            development, so I prioritized developing out the javascript
            sections. To branch out, I took up the task of designing the diagram
            for the relational database. A different group member was very
            rounded, and aided in the web page development as well as the
            backend functionality. Similarly, our last group memeber was also
            well rounded and integrated a feature. He was also a great public
            speaker, presenter and scribe, so naturally he helped a lot in that
            section. We each worked to our strengths, and participated in the
            creation of the many features this application would need.
          </p>
        </SubSection>

        <SubSection title="Teamwork">
          <p>Writing code that will work with other people</p>
          <p>
            Working with a team to create this project sped up it&apos;s
            development significantly. By following simple rules about
            programming allowed us to not run into issues with our
            implementations. For instance, functions needed precise and simple
            names that did what you would expect them to do. Sepparating
            sections of the project helped as well, like keeping the helpdesk
            functionality away from the shopping cart or user authentication.
            And if features did require integration, loosely based coupling
            helped when parts needed to be swapped.
          </p>
        </SubSection>
      </Section>

      <Section title="Details">
        <SubSection title="Flask"></SubSection>

        <SubSection title="Frontend"></SubSection>

        <SubSection title="Database Design"></SubSection>
      </Section>
    </div>
  );
}

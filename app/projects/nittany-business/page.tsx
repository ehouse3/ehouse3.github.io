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
          <p>
            Working with a team to create this project sped up it&apos;s
            development significantly. By following simple rules about
            programming allowed us to not run into issues with our
            implementations. For instance, functions needed precise and simple
            names that did what you would expect them to do. Sepparating
            sections of the project helped as well, like keeping the helpdesk
            functionality away from the shopping cart or user authentication.
            And if features did require integration, loosely based coupling
            helped when parts needed to be swapped. Lastly, we used Git as our
            solution to version control, which ensured that I understand at
            least the basics of using it.
          </p>
        </SubSection>
      </Section>

      <Section title="Details">
        <SubSection>
          <p>
            This project was more of an eyeopener and teamwork orriented
            experience rather than a technically challenging project. Through my
            coursework and independant projects, I understood the logistics
            databases and algorithms, but I needed a hands on understanding of
            how it ALL works together. This project allowed us to experiment
            with the how to implement an app, and to be fair, the entire
            application functioned correctly, but we fell into many of the
            pitfalls that entry developers would fall into. I knew there were
            issues but I didn&apos;t know how to make it better before they
            happened. We fell into traps, we lacked stricter coding standards
            and requirements, and only in the later projects I&apos;ve made have
            I REALLY learned the how of more modern, enterprise, and improved
            approaches to problems.
          </p>
        </SubSection>
        <SubSection title="Flask">
          <p>
            This was in my opinion a weaker aspect of this project. The Flask
            backend had great sepparation by functionality by breaking up the
            logic into reusable functions by category. CRUD functions worked as
            a sepparation of the database and the API routes that were called by
            the front end. And functions were named and broken up appropiatly
            enough to not confuse us on a fresh look.
          </p>
          <p>
            This backend needed more purposeful design implementations that were
            reflected in the over arching organization. Modern architecture uses
            meaningful, strict and sepparated API&apos;s to provide loose
            couplings between systems, and at the time we didn&apos;t have that
            context to create such a complicated system. Not only does
            sepparation help keep integration simpler and is practically
            required, but it speeds up developement when things need to
            continuesly change. The lack of sepparation and layers directly
            contributed to the desire to create the full stack task management
            app to find a better way to tie all the pieces together. Lastly, it
            needed more meaningful comments that described design choices,
            rather than obvious functionality. Ultimately, because this was a
            school project, we knew the entire scope before we even started
            writing programs. For a school project, the backend worked
            appropiatly and we all got a positive grade and outcome because of
            it.
          </p>
        </SubSection>

        <SubSection title="My Contributions">
          <p>
            My contribution to specifically the backend was creating the User
            Authentication in the beginning, implementing the helpdesk ticket
            workflow, and finally the product review system. The structure of
            the database ensured that many features were implemented smoothly.
            The User authentication was relatively simple although lacked true
            security layers. On a user attempting to login or create an account,
            the app would ensure the there are no conflicts in the database,
            like double used usernames or emails, then, ensure the hashed
            password was valid. Finally, it would fulfil the expected result on
            the backend and have the front end display the outcome.
          </p>
          <p>
            Naturally, since I was familiar with the user authentication system,
            I worked on the helpdesk workflow as well. Users were classified as
            either helpdesk, product seller, or customer. Helpdesk personel had
            a ticket queue that customers or product sellers created. They had a
            variety of actions they can take, with extra access and
            administrational control, like moderation control over the product
            reviews. Tickets were tracked with a status, and were organized into
            catagories.
          </p>
          <p>
            Finally, the product review system was a slightly trickier feature
            to create, as it was closely coupled to the products and users
            themselves. The reviews, which are attached to either a product or a
            product seller, had ratings, text, and comments. In order for a
            review to be submitted, the system verified multiple aspects were
            true, like that the user actually bought a product from the seller,
            which I found to be a difficult query. Average ratings were also
            calculated for a product/seller and attached to them as such. They
            had to be recalculated on new reviews being added.
          </p>
          <p>
            I was not satisfied with the security implementations for this
            project, but it wasn&apos;t intended to be a secure application so
            we only implemented minimal security layers. The final result was
            more than sufficient for the scope. To list a few issues, the
            strings for user input needed stricter sanitization, the storage of
            passwords was not sufficient or secure, and finally the
            administration view for the helpdesk required a stricter context and
            requirements to prevent attacks. These were only issues that I
            myself strictly oversaw, so there are bound to be extra issues
            elsewhere.
          </p>
        </SubSection>

        <SubSection title="Frontend">
          <p></p>
        </SubSection>
        <SubSection title="Database Design"></SubSection>
      </Section>
    </div>
  );
}

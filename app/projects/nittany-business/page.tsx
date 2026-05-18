import { Section, SubSection } from "@/components/components";

export default function nittanyBusiness() {
  return (
    <div>
      <Section>
        <h1 className="mb-2">Nittany Business App</h1>
        <SubSection title="E-Commerce Website and Database">
          <p>
            During my senior year at Penn State, for my database class&apos;s
            final project, I led a team of 4 to build an e-commerce web
            application. Our tech stack used a Python backend with the Flask
            library, a SQLite database, and a JavaScript frontend with
            Bootstrap. What made this project stand out was the sheer range of
            features we packed in, like a helpdesk, user authentication,
            shopping carts, reviews, wishlists, and more. It was great hands-on
            experience working with a team on a larger piece of software than I
            had tackled before.
          </p>
        </SubSection>

        <SubSection>
          <p>
            Below is a full list of the features included that made this app
            function as an e-commerce application.
          </p>
          <div className="mb-3 ml-5">
            <strong className="space-y-1">
              <p>User login and registration</p>
              <p>Product Listings and Order management</p>
              <p>Categorical Hierarchy</p>
              <p>Product and Seller Search functionality</p>
              <p>Product/Seller Review</p>
              <p>User dashboard and account page</p>
              <p>Helpdesk Ticket workflow</p>
              <p>Shopping Cart and checkout</p>
            </strong>
          </div>
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
            This project went as smoothly as it did because of the decisions
            each of us was making since the beginning. My contributions as a
            leader were organizing meetings, initiating problems and solutions,
            and what I found to be most important, delegating work. We met
            weekly, if not more, to discuss and work on the project. Finding the
            balance between keeping those meetings relaxed but productive was
            trickier than I expected.
          </p>
          <p>
            Delegating was its own balancing act. One of our group mates was
            very skilled with Python, so he took up the task automatically
            migrating the provided sample data from a CSV file to the usable
            SQLite format and developing the backend systems. I had good
            experience with frontend development, so I prioritized the
            JavaScript sections and also took on designing the relational
            database diagram to challenge myself. A different group member was
            well rounded and aided in both web page development and backend
            functionality. Our last group member was similarly well rounded and
            integrated a feature of his own. He was also a great public speaker
            and presenter, so he naturally took the lead on that side of things.
            We each worked to our strengths and covered the ground this
            application needed.
          </p>
        </SubSection>

        <SubSection title="Teamwork">
          <p>
            Working with a team sped up development significantly. Following
            simple rules about programming kept us from stepping on each
            other&apos;s work. For instance, functions needed precise and simple
            names that did exactly what you would expect them to do. Separating
            sections of the project helped as well, like keeping the helpdesk
            functionality away from the shopping cart or user authentication.
            And if features did require integration, loose coupling made it easy
            to swap parts out when needed. Lastly, we used Git for version
            control, which gave me at least a solid foundation and hands on
            experience in using it.
          </p>
        </SubSection>
      </Section>

      <Section title="Details">
        <SubSection>
          <p>
            This project was more of an eye-opener and teamwork-oriented
            experience than a technically challenging one. Through my coursework
            and independent projects, I understood the logistics of databases
            and algorithms, but I needed hands-on experience with how and entire
            system fits together. We got to experiment with how to implement a
            real app, and while the entire application functioned correctly, we
            fell into a lot of the pitfalls that entry-level developers fall
            into. I knew something felt off but didn&apos;t yet have the
            vocabulary or experience to fix it before it happened. Only in later
            projects have I really learned the more modern, enterprise-minded
            approaches to these problems.
          </p>
        </SubSection>
        <SubSection title="Flask">
          <p>
            This was in my opinion a weaker aspect of this project. The Flask
            backend had decent separation by functionality, breaking up the
            logic into reusable functions by category. CRUD functions acted as a
            layer between the database and the API routes called by the
            frontend. Functions were named and broken up appropriately enough
            that we could return to the code without getting lost.
          </p>
          <p>
            That said, the backend needed more purposeful design that was
            reflected in the overarching organization. Modern architecture uses
            meaningful and strictly separated APIs to keep systems loosely
            coupled, and at the time we didn&apos;t have that context to build
            something like that. Proper separation not only simplifies
            integration but speeds up development when things need to
            continuously change. The shortcomings here actually motivated me to
            build a full-stack task management app later, where I could find a
            better way to tie all the pieces together. The backend also needed
            more meaningful comments that captured design choices rather than
            just restating obvious functionality. Ultimately, because this was a
            school project with a strict and known scope from day one, the
            backend worked appropriately and we all came away with both a
            positive grade and experience.
          </p>
        </SubSection>

        <SubSection title="My Contributions">
          <p>
            My backend contributions were building the user authentication
            system, implementing the helpdesk ticket workflow, and building the
            product review system. The database structure I designed made all
            three much smoother to implement. User authentication was relatively
            straightforward, though it lacked real security layers. When a user
            tried to log in or create an account, the app checked for conflicts
            in the database like duplicate usernames or emails, verified the
            hashed password, and then fulfilled the expected result on the
            backend while the frontend displayed the outcome.
          </p>
          <p>
            Since I was already familiar with the user authentication system, I
            took on the helpdesk workflow as well. Users were classified as
            either helpdesk staff, product sellers, or customers. Helpdesk
            personnel had a ticket queue populated by customers and sellers.
            They had a variety of actions available throughout the application,
            with extra access and administrative control, including moderation
            over product reviews. Tickets were tracked by status and organized
            into categories. This system worked naturally with the relational
            database, since tickets depended on a user creating them and later a
            helpdesk person assigning themselves to one.
          </p>
          <p>
            The product review system was the trickiest feature I built, since
            it was tightly coupled to both products and users. Reviews could be
            attached to either a product or a product seller and included
            ratings, written text, and comments. Before a review could be
            submitted, the system verified several conditions, like confirming
            the user had actually purchased from that seller, which turned out
            to be a genuinely difficult query to write. Average ratings were
            calculated and stored directly on the product or seller record to
            keep reads efficient, and those averages had to be recalculated each
            time a new review came in. Reviews were modeled as weak entities
            dependent on either a product or a seller, so I built a separate
            review table for each, keyed to the submitting user and the item
            being reviewed.
          </p>
          <p>
            I was not satisfied with the security in this project, but it was
            never meant to be a production-ready application, so minimal
            security layers were fine for the scope. A few things stood out to
            me even then. User input strings needed stricter sanitization,
            password storage was not handled securely enough, and the helpdesk
            admin view needed tighter access controls to hold up against
            attacks. These were only the issues in the parts I owned, so there
            are likely more scattered elsewhere.
          </p>
        </SubSection>

        <SubSection title="Frontend">
          <p>
            The frontend UI was built with the JavaScript Bootstrap library,
            which sped up development, simplified common elements, and provided
            an excellent base for a product like this. Specific customization
            was still possible, but it had some hoops to jump through. We used
            the Python library Jinja to run Python code directly in the HTML
            files, which made each page very focused in its purpose. It handled
            frontend challenges like conditionals, events, and state cleanly.
            With that combination, we built easy-to-navigate pages for every
            feature, including user and helpdesk dashboards, product pages,
            search, seller profiles, orders, and wishlists.
          </p>
          <p>
            Looking back, the lack of clear separation between frameworks and
            concerns is the biggest thing I would fix. State and URL logic had
            no business sitting next to database functions, and there was no
            unified structure for shared pieces like user state management. If I
            revisited this project today, I would start with a well-defined API
            boundary between the frontend and backend and build everything else
            around that. At the time though, this was a class about relational
            databases, not software architecture, so the result made sense for
            what it was.
          </p>
        </SubSection>

        <SubSection title="Database Design">
          <p>
            This aspect of the project was the strongest. I designed the
            relationships and diagram for the entire database, and it was
            required to be normalized as well. The design was reliable,
            functional, and straightforward, with well-defined relationships
            covering everything from the helpdesk ticket workflow to the order
            management hierarchy. Having a solid model to follow made the rest
            of the project significantly easier to build around. The schema
            included both weak and strong entity relationships alongside
            normalized tables. Most of the normalization was straightforward,
            like ensuring columns held individual values and depended only on
            the primary key. Second normal form was the trickiest part, since
            the helpdesk and review systems required splitting data in ways that
            looked a little awkward on paper. In practice though, that
            separation paid off and made updates much cleaner throughout the
            rest of development.
          </p>
        </SubSection>
      </Section>
    </div>
  );
}

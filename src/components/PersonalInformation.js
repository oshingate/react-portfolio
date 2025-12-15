import { years } from "../constants/constant";

const PersonalInformation = () => {
  return (
    <>
      <h2>Personal Information</h2>

      <div>
        <h3 className="mb-5 about-heading">
          Hello, my name is Onkar Shingate. I'm MERN Stack Developer.
        </h3>
        <p className="mb-3">
          I started my coding career about {years + 2} years ago. In the start I
          learned about Java and Angular 6, but later I found JavaScript more
          intresting than Java so switched to JavaScript.{" "}
        </p>
        <p className="mb-3 ">
          First I did JavaScript Course on FreeCodeCamp.org website. Later on I
          learned about DOM manipulation using JS. Did some practice to improve
          my HTML and CSS skills. For Database I learned many commands in
          MongoDB. Later I started learning NodeJS/ExpressJS for backend at that
          time I learned about how to write APIs and how to connect to Database.
        </p>
        <p className="mb-3">
          For Frontend I learned React. I personally found react more useful
          than angular 6. In React I learned about Components, State, Props,
          Context-API, HOC's, Redux, Hooks.
        </p>
        <p className="mb-3">
          Completed many full fledged Personal Projects using ExpressJS and
          React.You can check my projects by clicking Projects link.
        </p>

        <p className="mb-3">
          On 4th October 2021, I started my professional career with Bridgenext
          around {years} years ago as a Software developer.
        </p>

        <p className="mb-3">
          Since October 2021, I've been part of a US-based bank project. Working
          on different areas, mainly GraphQL and React tech stack. working on
          schema design and implementation as per the requirement. Collaborating
          with FE and BE teams to get new features out in agile board
          development cycles. Working to gather deployment data for the week and
          getting approvals, ensuring seamless deployments each week and being
          part of OnCall rotations.
        </p>

        <p className="mb-3">Connect me :-</p>
        <ul className="flex about-nav">
          <li>
            <a
              href="https://twitter.com/onkarshingate2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/oshingate"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://oshingate.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-medium"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oshingate/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PersonalInformation;

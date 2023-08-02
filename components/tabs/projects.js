import tabStyle from "../../styles/Tabs.module.css";
import experienceStyle from "../../styles/Experience.module.css";
import funFactStyle from "../../styles/FunFact.module.css";
import Link from "next/link";

const ProjectsPage = ({ children }) => {
  return (
    <div id="projects_page" className={tabStyle.color2}>
      <div className={tabStyle.body}>
        <h2>Projects</h2>
        <ul className={experienceStyle.list}>
          <li>
            <h4>
              This Website! |{" "}
              <Link href="https://github.com/joshfendi/portfolio">
                <a target="_blank" className={funFactStyle.link}>
                  Project Github
                </a>
              </Link>{" "}
              | Next.js, React, CSS | Oct. 2022 - Present
            </h4>

            <p>
              Portfolio website with a dynamic display of images and hyperlinks
              to provide visitors an insight into my profile
            </p>
            <p>
              Organized with React components and implemented routing features
              for an enhanced user experience
            </p>
          </li>

          <li>
            <h4>
              Mancala AI |{" "}
              <Link href="https://github.com/joshfendi/CS32Project3">
                <a target="_blank" className={funFactStyle.link}>
                  Project Github
                </a>
              </Link>{" "}
              | C++ | Spring 2023 | UCLA
            </h4>

            <p>
              Classic game with the option to play against a “Smart Player”
              opponent
            </p>
            <p>
              Modeled “Smart Player” with recursive searches of a game tree to
              strategize and determine the optimal moves
            </p>
          </li>

          <li>
            <h4>
              Custom Container - Sequence |{" "}
              <Link href="https://github.com/joshfendi/CS32Project2">
                <a target="_blank" className={funFactStyle.link}>
                  Project Github
                </a>
              </Link>{" "}
              | C++ | Spring 2023 | UCLA
            </h4>

            <p>
              Powerful custom container with a wide variety of algorithms
              tailored to optimize data access and manipulation
            </p>
            <p>
              Implemented with a doubly linked list with circular properties,
              ensuring efficient traversal and storage of data
            </p>
          </li>

          <li>
            <h4>
              ReCollect | React Native, Postman, ExpoGo | Jan. 2023 - Jun. 2023
              | UCLA
            </h4>

            <p>
              Mobile App that enables effortless sharing and viewing of
              cross-platform saved posts
            </p>
            <p>
              Developed group chat interfaces with React Native, empowering
              users to create new groups chats, add friends, and easily share
              messages and media
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;

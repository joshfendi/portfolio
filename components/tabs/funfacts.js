import tabStyle from "../../styles/Tabs.module.css";
import funFactStyle from "../../styles/FunFact.module.css";
import Link from "next/link";

const FunFactPage = ({ children }) => {
  return (
    <div id="funfacts_page" className={tabStyle.color1}>
      <div className={tabStyle.body}>
        <h2>Fun Facts</h2>
        <h3>Favorite things</h3>
        <ul className={funFactStyle.list}>
          <li>
            <h4>Carnivore Diet</h4>
            <p>My favorite food is meat, specifically steak :). I love meat so much that I made a website dedicated to all the varieties of meat the I liked for my first web development project</p>
          </li>
          <li>
            <h4>Figure Skating</h4>
            <p>
              I Figure Skated with my twin sister for 11 years! Click{" "}
              <Link href="https://www.youtube.com/watch?v=8XdqKqh9DyI">
                <a target="_blank" className={funFactStyle.link}>
                  here
                </a>
              </Link>{" "}
              to see my favorite program that we performed
            </p>
          </li>
          <li>
            <h4>Dragon Boat</h4>
            <p>
              I am currently part of UCLA Dragon Boat (UCLADB). Dragon Boat is a
              traditional Chinese team sport that I have been a part of for over
              7 years.{" "}
              <Link href="https://youtu.be/IJqwG7RdIak">
                <a target="_blank" className={funFactStyle.link}>
                  This video
                </a>
              </Link>{" "}
              sums up what it means to be on UCLADB.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FunFactPage;

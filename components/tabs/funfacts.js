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
            <p>
              I love meat so much that my first web development project was
              dedicated to the varieties of meat the I liked!
            </p>
          </li>
          <li>
            <h4>Figure Skating</h4>
            <p>
              I started figure skating when I was 6 years old, and continued for
              11 years with my twin sister! Before school practices, off-ice
              training, and doing whatever we could to perfect our performances
              rewarded us with the opportunity to compete at the Nationl level.
              Click{" "}
              <Link href="https://www.youtube.com/watch?v=8XdqKqh9DyI">
                <a target="_blank" className={funFactStyle.link}>
                  here
                </a>
              </Link>{" "}
              to see my favorite program that we performed.
            </p>
          </li>
          <li>
            <h4>Dragon Boat</h4>
            <p>
              I am an alumni of UCLA Dragon Boat (UCLADB). Dragon Boat is a
              traditional Chinese team sport that I have been a part of for over
              7 years.{" "}
              <Link href="https://youtu.be/IJqwG7RdIak">
                <a target="_blank" className={funFactStyle.link}>
                  This video
                </a>
              </Link>{" "}
              sums up what it means to be on UCLADB.
            </p>

            <p>
              In 2023 I qualified for TeamUSA for the second time! In August of
              2024, I competed as a part of TeamUSA in Thailand against
              teams from other nations. We placed 2nd place in multiple divisions.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FunFactPage;

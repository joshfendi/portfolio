import tabStyle from "../../styles/Tabs.module.css";
import aboutMeStyle from "../../styles/AboutMe.module.css";
import Image from "next/image";
import UCLA_emblem from "../../public/ucla.png";

const AboutMePage = ({ children }) => {
  return (
    <div id="aboutme_page" className={tabStyle.color1}>
      <div className={tabStyle.body}>
        <h2>About Me</h2>
        <div className={aboutMeStyle.container}>
          <Image src={UCLA_emblem} alt="ucla emblem" width={150} height={150} />

          <p>
            I am a 4th year at UCLA, currently pursuing a Psychobiology Major
            with a Specialization in Computing and a Minor in Cognitive Science.
          </p>
        </div>

        <p>
          Technology has always fascinated me because of its complexity and
          limitless capabilities to let me create whatever I can think of. Ever
          since my first coding class during my Sophomore year of College, I
          have been hungry to learn more about how to apply myself as a software
          engineer.
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
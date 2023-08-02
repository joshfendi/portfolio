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
            I am a recent UCLA graduate, with a Bachelor of Psychobiology
            with a Specialization in Computing, and a Minor in Cognitive Science.
          </p>
        </div>

        <p>
        Since my Sophomore year of College, I've been fascinated by technology's complexity 
        and endless possibilities. Learning to code ignited a passion for software engineering, where I explore its various applications. Creating functional solutions brings me immense satisfaction, and I'm eager to contribute my skills to impactful projects that can shape a better future. The journey has been a captivating one, marked by continuous learning and boundless curiosity. I'm excited to embrace new horizons in this ever-evolving field.
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import tabStyle from "../../styles/Tabs.module.css";
import aboutMeStyle from "../../styles/AboutMe.module.css";
import Image from "next/image";
import UCLA_emblem from "../../public/ucla.png";

function AboutMePage() {
  return (
    <div>
      {/* <NavBar class={tabStyles.bottomfade}/> */}
      <Header />
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
      <Footer />
    </div>
  );
}

export default AboutMePage;

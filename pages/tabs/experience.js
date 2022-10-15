import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import tabStyle from "../../styles/Tabs.module.css";
import experienceStyle from "../../styles/Experience.module.css";


function ExperiencePage() {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <div className={tabStyle.body}>
        <h2>Experience</h2>
        <ul className={experienceStyle.list}>
          <li>
            <h4>This Website! | Oct. 14th 2022</h4>
            <p>I made this website very with Next.js, React, and CSS!</p>
          </li>
          <li>
            <h4>Code Ninjas (Student Mentor) | Jun. 2022 - Sept, 2022</h4>
            <p>
              Deconstructed complex concepts into simpler steps to facilitate
              the successful learning of fundamental coding knowledge
            </p>
            <p>
              Took initiative to cultivate an accepting environment for 40+
              students and fellow mentors
            </p>
            <p>
              Tailored 30+ lesson plans to each students needs to maximize
              their learning potential
            </p>
          </li>
        </ul>

        <h2>Skills</h2>
        <ul className={experienceStyle.list}>
          <li>
            <h4>Related Coursework</h4>
            <p>
              C++ Programming, Python Applications, Webpage Programming
              (JavaScript, HTML, PHP,, CSS)
            </p>
          </li>

          <li>
            <h4>Frameworks / Libraries</h4>
            <p>Next.js, React</p>
          </li>

          <li>
            <h4>Tools / Methods</h4>
            <p>Visual Studios, Xcode</p>
          </li>

          <li>
            <h4>Strengths</h4>
            <p>Leadership, Diligence, Critical Thinking, Motivation</p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ExperiencePage;

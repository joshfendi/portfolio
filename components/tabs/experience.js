import tabStyle from "../../styles/Tabs.module.css";
import experienceStyle from "../../styles/Experience.module.css";

const ExperiencePage = ({ children }) => {
  return (
    <div id="experience_page" className={tabStyle.color2}>
      <div className={tabStyle.body}>
        <h2>Experience</h2>
        <ul className={experienceStyle.list}>
          <li>
            <h4>
              ReCollect (Frontend Developer) | Jan. 2023 - Jun. 2023 | UCLA
            </h4>
            <p>
              Collaborated closely with backend developers, designers, and UX
              researchers to build a mobile application from scratch
            </p>
            <p>
              Translated 95+ Figma components into functional interfaces
              alongside a frontend team
            </p>
          </li>

          <li>
            <h4>
              Bruin Shack (Web Development Intern) | Oct. 2022 - Jan. 2023 | Los
              Angeles, CA
            </h4>
            <p>
              Developed a dynamic sample product page leveraging an API to list
              500+ products and their descriptions
            </p>
            <p>
              Converted each product listing into modular components, enhancing
              efficiency by passing parameters through the components
            </p>
          </li>

          <li>
            <h4>
              Code Ninjas (Student Mentor) | Jun. 2022 - Sept. 2022 | Cerritos,
              CA
            </h4>
            <p>
              Deconstructed complex concepts into simpler steps to facilitate
              the successful learning of fundamental coding knowledge
            </p>
            <p>
              Took initiative to cultivate an accepting environment for 40+
              students and fellow mentors
            </p>
            <p>
              Tailored 30+ lesson plans to each students needs to maximize their
              learning potential
            </p>
          </li>

          <li>
            <h4>
              Fanselow Lab (Undergraduate Research Assistant) | Oct. 2020 - Dec.
              2021 | UCLA
            </h4>
            <p>
              Conducted in-depth analysis of footage to investigate the
              implications of fear and anxiety on learning in a rat model
            </p>
            <p>
              Prepared rats for experiments by assisting in their habituation to
              specific environments and contributing to rat cranial surgery
              procedures
            </p>
            <p>
              Dictated coding data from habituated rats linearly for readability
              and increased efficiency
            </p>
          </li>
        </ul>

        <h2>Skills</h2>
        <ul className={experienceStyle.list}>
          <li>
            <h4>Related Coursework</h4>
            <p>
              C++ Programming (Data Structures and Algorithms), Python
              Applications, Webpage Programming (JavaScript, HTML, PHP, CSS)
            </p>
          </li>

          <li>
            <h4>Programming Languages</h4>
            <p>
              C++, Python, JavaScript, HTML, PHP, CSS, Next.js, React.js, React
              Native, MATLAB
            </p>
          </li>

          <li>
            <h4>Tools / Methods</h4>
            <p>Visual Studios, Xcode, Github</p>
          </li>

          <li>
            <h4>Strengths</h4>
            <p>Leadership, Diligence, Critical Thinking, Motivation</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;

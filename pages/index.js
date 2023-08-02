// our-domain.com/
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutMePage from "../components/tabs/about";
import ProjectsPage from "../components/tabs/projects";
import ExperiencePage from "../components/tabs/experience";
import FunFactPage from "../components/tabs/funfacts";
import ContactPage from "../components/tabs/contact";



function HomePage() {
    return (
    <div>
        <Header />
        <NavBar />
        <AboutMePage />
        <ProjectsPage/>
        <ExperiencePage />
        <FunFactPage />
        <ContactPage />

        <Footer />
    </div>
    )
}

export default HomePage;
// our-domain.com/
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutMePage from "../components/tabs/about";
import ContactPage from "../components/tabs/contact";
import ExperiencePage from "../components/tabs/experience";
import FunFactPage from "../components/tabs/funfacts";



function HomePage() {
    return (
    <div>
        <Header />
        <NavBar />
        <AboutMePage />
        <ExperiencePage />
        <FunFactPage />
        <ContactPage />

        <Footer />
    </div>
    )
}

export default HomePage;
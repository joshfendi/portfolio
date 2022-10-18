import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import tabStyle from "../../styles/Tabs.module.css";
import contactStyle from "../../styles/Contact.module.css";

import Image from "next/image";
import Link from "next/link";

import phone from "../../public/contact/phone.png";
import email from "../../public/contact/email.png";
import linkedIn from "../../public/contact/linkedIn.png";

function ContactPage() {
  return (
    <div>
      {/* <NavBar class={tabStyles.bottomfade}/> */}
      <Header />
      <div className={tabStyle.body}>
        <h2>Contact Info</h2>
        <div className={contactStyle.flexContacts}>
          <div className={contactStyle.contact} meta="phone">
            <Image
              src={phone}
              alt="phone"
              width={50}
              height={50}
            />
            (909) 358-3704
          </div>

          <div className={contactStyle.contact} meta="email">
            <Image
              src={email}
              alt="email"
              width={50}
              height={50}
              placeholder="blur"
            />
            joshuafendi@gmail.com
          </div>

          <div className={contactStyle.contact} meta="linkedIn">
            <Image
              src={linkedIn}
              alt="linkedIn"
              width={50}
              height={50}
              placeholder="blur"
            />
            <Link href="https://www.linkedin.com/in/joshua-fendi/">
              <a target="_blank">https://www.linkedin.com/in/joshua-fendi/</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;

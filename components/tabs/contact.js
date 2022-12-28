import tabStyle from "../../styles/Tabs.module.css";
import contactStyle from "../../styles/Contact.module.css";

import Image from "next/image";
import Link from "next/link";

import phone from "../../public/contact/phone.png";
import email from "../../public/contact/email.png";
import linkedin from "../../public/contact/linkedin.png";

const ContactPage = ({ children }) => {
  return (
    <div id="contact_page" className={tabStyle.color2}>
      <div className={tabStyle.body}>
        <h2>Contact Info</h2>
        <div className={contactStyle.flexContacts}>
          <div className={contactStyle.contact} meta="phone">
            <Image
              src={phone}
              alt="phone number:"
              width={50}
              height={50}
              placeholder="blur"
            />
            (909) 358-3704
          </div>

          <div className={contactStyle.contact} meta="email">
            <Image
              src={email}
              alt="email:"
              width={50}
              height={50}
              placeholder="blur"
            />
            joshuafendi@gmail.com
          </div>

          <div className={contactStyle.contact} meta="linkedIn">
            <Image
              src={linkedin}
              alt="linkedIn:"
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
    </div>
  );
}

export default ContactPage;

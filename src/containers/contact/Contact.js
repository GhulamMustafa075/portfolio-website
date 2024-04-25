import { useContext } from "react";
import "./Contact.scss";
import StyleContext from "../../contexts/StyleContext";
import { contactInfo, illustration } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import email from "../../assets/lottie/email.json";

const Contact = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div data-aos="fade-up" className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
                <br />
                <br />
              </>
            )}
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              src={require("../../assets/images/contactMailDark.svg")}
              alt="Man Working"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;

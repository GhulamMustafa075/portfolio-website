import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { greeting, illustration } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import Button from "../../components/button/Button";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import "./Greeting.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Greeting = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });

  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div data-aos="fade-up" className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              {greeting.resumeLink && (
                <Button
                  text="View CV"
                  newTab={true}
                  href={greeting.resumeLink}
                  target="_blank"
                />
              )}
            </div>
          </div>
        </div>
        <div className="q">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Greeting;

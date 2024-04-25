/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// splash screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section

const illustration = {
  animated: true,
};

const greeting = {
  username: "Ghulam Mustafa",
  title: "Hi, I'm  Mustafa",
  subTitle: emoji(
    "A passionate Frontend End Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uoj_sZUKs6wDpmFJ2T3BODBGzHPvEKZ_/view?usp=sharing",
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GhulamMustafa075",
  linkedin: "https://www.linkedin.com/in/ghulam-mustafa-792700304/",
  gmail: "ghulammustafa0758@gmail.com",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FRONTEND END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },

    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },

    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
  ],
  display: true,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "DURING MY WEB AND MOBILE APPLICATION COURSE, I'VE BUILT SEVERAL PROJECTS AS PART OF MY PRACTICE.",
  projects: [
    {
      image: require("./assets/images/travel.png"),
      projectName: "Travel Website",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit",
          url: "https://travel-website-red-one.vercel.app/",
        },
      ],
    },
    {
      image: require("./assets/images/foodie.png"),
      projectName: "Foodie Website",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit",
          url: "https://foodie-website-virid.vercel.app/",
        },
      ],
    },
    {
      image: require("./assets/images/meme-generator.jpg"),
      projectName: "Meme Generator",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit",
          url: "https://meme-generator-7v88.vercel.app/",
        },
      ],
    },
    {
      image: require("./assets/images/e-commerce.png"),
      projectName: "E-commerce App",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit",
          url: "https://ecommerce-app-seven-blue.vercel.app/",
        },
      ],
    },
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3180113270",
  email_address: "ghulammustafa0758@gmail.com",
};

export {
  greeting,
  splashScreen,
  illustration,
  skillsSection,
  socialMediaLinks,
  bigProjects,
  contactInfo,
};

// Import stuff from assets
import {
    imperial,
    westhill,
    pwebsite,
    game2048,
    dash
} from '../assets'

// Then define constants then export them.
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const experiences = [
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "Imperial College London",
      icon: imperial,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const education = [
    {
      title: "Student",
      company_name: "Westhill Academy",
      icon: westhill,
      iconBg: "#383E56",
      date: "July 2016 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "MEng Computing",
      company_name: "Imperial College London",
      icon: imperial,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - June 2026",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];  

  const projects = [
    {
      name: "Personal Website",
      description:
        "Website developed in React, using three js, tailwind css and vanta js for enhanced UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three-js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pwebsite,
      source_code_link: "https://github.com/",
    },
    {
      name: "2048 Clone",
      description:
        "Clone of the popular game 2048. Developed using Python as the backend, Tkinter for the window and the UI and Pygame for the game objects.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "Pygame",
          color: "pink-text-gradient",
        },
      ],
      image: game2048,
      source_code_link: "https://github.com/",
    },
    {
      name: "Advanced Higher CS Project",
      description:
        "Web App developed using Flask and Dash to visualise bank statements.",
      tags: [
        {
          name: "Dash",
          color: "blue-text-gradient",
        },
        {
          name: "Plotly",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: dash,
      source_code_link: "https://github.com/",
    },
  ];

export { experiences, education, projects }
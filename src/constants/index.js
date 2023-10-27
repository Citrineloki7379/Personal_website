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
        "Part of a team supporting over 200 First-Year Computing Students in their weekly PPT lab sessions.",
        "Assist students in developing their problem solving and algorithmic thinking, good programming habits and idioms, version control using Git and debugging using multiple tools like GDB",
        "Teaching in multiple languages (Haskell, Kotlin and C) which cover multiple programming paradigms.",
        "Participating in code reviews and providing constructive feedback to the students.",
        "Chosen based on academic performance in the Computing Practical 1 module."
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
        "A1 - (99/100) - AH Mathematics, A1 - (88/90) - AH Mechanics, A1 - (151/155) - AH Physics, A1 - (128/135) - AH Computing Science.",
        "5xA1 in the following Highers: Mathematics, Physics, Chemistry, Computing Science, Graphic Communication.",
        "Leadership Roles: Senior Prefect in the Senior Pupil Leadership team, Teaching Assistant in Junior Maths and Science Classes and promoting STEM in the wider school as a Maths and Science Ambassador.",
        "Awarded the Susan Reid Memorial Award for being the top performing student in the Science Department."
      ],
    },
    {
      title: "MEng Computing",
      company_name: "Imperial College London",
      icon: imperial,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - June 2026",
      points: [
        "Year 1 - 85.37% - First-Class Honours",
        "Awarded Dean's list prize for my First-Class examination results as well as being within the top 10% of the cohort.",
        "Relevant Modules: Algorithms Design & Analysis, Intro to Databases, Linear Algebra, Calculus, Operating Systems, Software Engineering Design, Intro to Computer Architecture",
        "Societies: DocSoc, Tabletop gaming, Badminton",
      ],
    },
  ];  

  const projects = [
    {
      name: "C Team Project - Extension",
      description:
        "Created a speaker control system with gesture controls and facial detection using the Raspberry Pi 3. Used I2C interface to communicate with the peripheral devices. Fixed the Pimoroni SkyWriter HAT Python library and changes from Pull request merged to latest version. Available upon request.",
      tags: [
        {
          name: "I2C",
          color: "blue-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "green-text-gradient",
        },
        {
          name: "UsefulSensors Personsensor",
          color: "pink-text-gradient",
        },
      ],
      image: pwebsite,
      source_code_link: "https://github.com/",
    },
    {
      name: "C Team Project",
      description:
        "Implemented an emulator and an assembler for the ARMv8 instruction set. Used Flex to generate a lexical analyser to tokenise assembly file and Bison to generate a GLR Parser from a context-free grammar rules based on the assembly language subset to generate the instructions. Available upon request.",
      tags: [
        {
          name: "Flex",
          color: "blue-text-gradient",
        },
        {
          name: "Bison",
          color: "green-text-gradient",
        },
        {
          name: "C",
          color: "pink-text-gradient",
        },
      ],
      image: pwebsite,
      source_code_link: "https://github.com/",
    },
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
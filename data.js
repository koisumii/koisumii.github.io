export const bio = [
  "Hi! I'm Rania Mustafa, a soon-to-be Computer Science graduate from John Abbott College.",
  "I love exploring new technologies, solving problems, and creating fun projects.",
  "Thanks for stopping by!"
];


export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "100",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "ASP.NET Core",
    color: "6",
    percentage: "100",
  },
  {
    title: "Design",
    skillName: "HTML/CSS",
    color: "4",
    percentage: "100",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Jira",
    color: "7",
    percentage: "100",
  },
  {
    title: "Tools",
    skillName: "C#",
    color: "3",
    percentage: "100",
  },
  {
    title: "Tools",
    skillName: "Python",
    color: "5",
    percentage: "100",
  },
  {
    title: "Tools",
    skillName: "Kotlin",
    color: "9",
    percentage: "100",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Moodify",
      image: "images/moodify.png",
      summary:
        "Developed a mobile application focused on mental wellness, featuring a mood tracker, gratitude journal, personalized insights, and resources for mental health support in Canada.",
      preview: "https://github.com/LauraaMolinaa/Moodify",
      techStack: ["Android Studio", "Kotlin", "Jetpack Compose", "Jetcharts", "SQLite"],
    },
    {
      projectName: "CryoSecure",
      image: "images/cryosecure.png",
      summary:
        "A file encryption and decryption tool utilizing a combination of classical ciphers (Caesar, Vigenère, sequence reversal) with a key-based sequence of transformations.",
      preview: "https://github.com/NaBrHCl/security-final-project",
      techStack: ["Python", "CLI", "JSON"],
    },
    {
      projectName: "Mischievous Quiz",
      image: "images/mrmischiefquiz.png",
      summary:
        "An interactive quiz game featuring tricky questions, a witty quizmaster character, and personalized user accounts for score tracking and feedback.",
      preview: "https://github.com/koisumii/mr-mischief",
      techStack: ["TypeScript", "Docker", "PostgreSQL", "Handlebars", "Playwright", "Vitest", "Node.js"],
    },
    {
      projectName: "Home Calendar",
      image: "images/homecalendar.png",
      summary:
        "A WPF-based desktop application for managing events and categories with a user-friendly interface, featuring category and event management, filtering, and sorting capabilities.",
      preview: "https://github.com/koisumii/Home-Calendar",
      techStack: ["C#", "WPF", "SQLite", "xUnit"],
    },
  ],
};

export const experience = [
  {
    title: "Shiprocket (Bigfoot Solution Private Limited)",
    duration: "September 2022 - Present",
    subtitle: "Software Engineer",
    details: ["Working in support and escalation team."],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "truck ",
  },
  {
    title: "Biofourmis India Private Limited",
    duration: "April 2022 - Jul 2023",
    subtitle: "Software Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
      `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
      `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
      `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
      `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
      `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
      `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
      `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
      `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
    ],
    tags: [
      "JavaScript",
      "Angular",
      "RxJS",
      "NGXS",
      "TypeScript",
      "RxState",
      "Webpack",
      "Optimization",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Computer Science Technology",
    duration: "2022 - 2025 (ongoing)",
    subtitle: "John Abbott College, Quebec",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Database Management",
      "Object Oriented Programming",
      "Software Development Life Cycle",
      "Networking",
      "Full Stack Development",
      "Information Technology",
      "Security",
      "App Development",
      "Game Programming",
    ],
    icon: "book",
  },
  {
    title: "High School Diploma",
    duration: "2017-2022",
    subtitle: "John Rennie High School, Quebec",
    details: [],
    tags: ["Mathematics", "Science and Technology", "Robotics"],
    icon: "graduation-cap",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/rania-mustafa-a34906327/",
      },
      {
        text: "GitHub",
        link: "https://github.com/koisumii",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Rania Mustafa",
      "&copy; No Copyrights",
    ],
  },
];

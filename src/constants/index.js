import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    threejs,
    csharp,
    java,
    python,
    php,
    asp,
    azure,
    bootstrap,
    sql,
    georgian,
    lazehrs,
    nordgames,
    github,
    linkedin,
    happybirthday
  } from "../assets";

  import corey from "/corey.png";
  import shaun from "/shaun.png";
  import user from "/user.png";
  
    export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
  ];
  
  const technologies = [
    {
        name: "C#",
        icon: csharp,
        fill: 70,
    },
    {
        name: "Java",
        icon: java,
        fill: 60,
    },
    {
        name: "Python",
        icon: python,
        fill: 60,
    },
    {
        name: "HTML",
        icon: html,
        fill: 70,
    },
    {
        name: "CSS",
        icon: css,
        fill: 60,
    },
    {
        name: "JavaScript",
        icon: javascript,
        fill: 60,
    },
    {
        name: "React",
        icon: reactjs,
        fill: 30,
    },
    {
        name: "ThreeJS",
        icon: threejs,
        fill: 20,
    },
    {
        name: "Tailwind",
        icon: tailwind,
        fill: 30,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
        fill: 30,
    },
    {
        name: "Php",
        icon: php,
        fill: 40,
    },
    {
        name: "ASP.NET",
        icon: asp,
        fill: 50,
    },
    {
        name: "SQL",
        icon: sql,
        fill: 60,
    },
    {
        name: "Azure",
        icon: azure,
        fill: 20,
    },
    {
        name: "Git",
        icon: git,
        fill: 50,
      },

  ];
  
  const education = [
    {
        title: "Opticanry",
        company_name: "Georgian College",
        icon: georgian,
        iconBg: "#383E56",
        date: "2017 - 2020",
        points: [
            "Learned practical skills in dispensing eyeglasses, contact lenses, and sub-normal vision devices, as well as basic refraction",
            "Emphasis is placed on ocular sciences, optics, anatomy, and providing personalized eyewear services.",
            "Developed critical thinking, problem-solving, and entrepreneurial skills to establish and operate a small business in the optical retail environment.",
            "Recognized for exceptional academic performance, achieving Dean's List with a GPA of 89%."
        ],
    },
    {
        title: "Computer Programming",
        company_name: "Georgian College",
        icon: georgian,
        iconBg: "#E6DEDD",
        date: "2022 - Current",
        points: [
            `Excelled in Object-Oriented Programming languages including C#, Java, and Python, enabling the creation of efficient and scalable software applications.`,
            "Acquired a solid foundation in Web Programming Fundamentals, including HTML, CSS, JavaScript, and PHP, enabling the development of interactive and dynamic web applications.",
            "Learned the Model View Controller system utilizing technologies such as PHP, JavaFX, and ASP.NET, facilitating the creation of robust and well-structured software architectures.",
            "Gained expertise in working with relational database systems such as mySQL and msSQL, allowing for effective data management and retrieval.",            
            "Recognized for exceptional academic performance, achieving Dean's List with a GPA of 93%."
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jacob created a Python application that automated a tedious task for our team. He was very professional!",
      name: "Corey Berry",
      designation: "IDT",
      company: "Georgian College",
      image: corey,
    },
    {
      testimonial:
        "Jacob is an excellent young developer. He is one of my brightest students, I highly recommend him!",
      name: "Wayne Brown",
      designation: "Professor",
      company: "Georgian College",
      image: user,
    },
    {
      testimonial:
        "Jacob is a very talented developer. He is very professional and I would recommend him to anyone!",
      name: "Shaun Mckinnon",
      designation: "Tech Architect",
      company: "LabX Media",
      image: shaun,
    },
  ];
  
  const projects = [
    {
      name: "Lazehrs",
      description:
        "A Java based shopping assistance app where users can collaborate and submit the locations of items from stores around the world to help others find them.",
      tags: [
        {
          name: "java",
          color: "pink-text-gradient",
        },
        {
          name: "javafx",
          color: "blue-text-gradient",
        },
        {
            name: "object-oriented",
            color: "green-text-gradient",
        },
      ],
      image: lazehrs,
      source_code_link: "https://github.com/jnordst/Lazehrs",
    },
    {
      name: "Nord Games",
      description:
        "A reactive e-commerce website for a fictional board game store, built with HTML, CSS, and powered by Javascript where users can browse dynamicly displayed products.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: nordgames,
      source_code_link: "https://github.com/jnordst/Nord-Games",
    },
    {
      name: "Happy Birthday",
      description:
        "A Python based application that sends emails to clients on their birthday with a personalized message and a promotional coupon code by reading from a spreadsheet.",
      tags: [
        {
          name: "python",
          color: "orange-text-gradient",
        }
      ],
      image: happybirthday,
      source_code_link: "https://github.com/jnordst/HappyBirthday",
    },
  ];

  const heroLinks = [
    {
        src: github,
        alt: "github",
        link: "https://github.com/jnordst",
    },
    {
        src: linkedin,
        alt: "linkedin",
        link: "https://www.linkedin.com/in/jacob-nordstrom/",
    },
  ];
  
  export { technologies, education, testimonials, projects, heroLinks };
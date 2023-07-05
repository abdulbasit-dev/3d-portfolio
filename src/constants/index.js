import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bootstrap,
  laravel,
  php,
  github,
  mobile,
  githubTech,
  mysql,
  newroz,
  jiasaz,
  tktatiq,
  dalkurd,
  smartcontractsystem,
  nawand,
  freelancer,
  firebase,
  softlecture,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Laravel Developer',
    icon: creator,
  },
  {
    title: 'FreeLancer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  //   {
  //     name: 'Tailwind CSS',
  //     icon: tailwind,
  //   },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Github',
    icon: githubTech,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  //   {
  //     name: 'Firebase',
  //     icon: firebase,
  //   },

  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
];

const experiences = [
  {
    title: 'Back-End Developer',
    company_name: 'Jiasaz',
    icon: jiasaz,
    iconBg: '#000',
    date: 'Nov 2020 - Jun 2021',
    points: [
      'Developed and maintained web applications using Laravel and related technologies.',
      'Collaborated with cross-functional teams to enhance existing systems and implement new features.',
      'Gained expertise in Laravel by exploring and learning new features and best practices.',
      'Ensured responsive design and cross-browser compatibility for seamless user experiences.',
    ],
  },
  {
    title: 'Freelancer',
    company_name: 'Freelancer.com',
    icon: freelancer,
    iconBg: '#fff',
    date: 'Apr 2020 - Jun 2021',
    points: [
      'Developed and maintained web applications, utilizing various technologies and frameworks.',
      'Collaborated with cross-functional teams to enhance existing systems and implement new features.',
      'Took ownership of API development for a mobile application, ensuring seamless integration and optimal performance.',
    ],
  },
  {
    title: 'Back-End Developer',
    company_name: 'Newroz Technologies Limited',
    icon: newroz,
    iconBg: '#000',
    date: 'Jun 2021 - Present',
    points: [
      'Develop and maintain web applications using Laravel as the primary back-end framework.',
      'Addressed and resolved bugs and issues in existing projects, ensuring smooth functionality.',
      'Took on new projects involving Node.js, React, and Socket.io for real-time communication.',
      'Collaborated closely with designers, product managers, and fellow developers to deliver high-quality products.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Dalkurd Ticket Sale',
    description:
      'Web-based platform for Dalkurd SC Team. that allows users to search and buy tickets, it also come with backend panel for admin to manage the tickets and matches.',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: dalkurd,
    url: 'https://ticket.dalkurdff.app',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'TktatIq',
    description:
      'Web-based platform for Clubs. that allows users to search and buy tickets for registered clubs, it also come with backend panel for admin to manage the tickets and matches.',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: tktatiq,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Smart Contract System',
    description:
      'A comprehensive Real State platform Admin Panel. That allow admins to make contracts and manage payments.',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: smartcontractsystem,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Nawand',
    description: 'A Full Inventory Management System with POS and Accounting System and Multi Branching.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nawand,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Softlecture',
    description: 'A Simple Web Application for Student College To Download Their Lecture and See Other resources.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: softlecture,
    source_code_link: 'https://github.com/',
  },
];

export {services, technologies, experiences, testimonials, projects};

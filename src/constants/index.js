import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  technopartner,
  threejs,
  netflix,
} from "../assets";
import lab1 from "../assets/lap1.png";
export const navLinks = [
  {
    id: "about",
    title: "Giới thiệu",
  },
  {
    id: "work",
    title: "Sản phẩm",
  },
  {
    id: "feature",
    title: "Tính năng",
  },
  {
    id: "contact",
    title: "Liên hệ",
  },
];

const services = [
  {
    title: "Facebook",
    icon: web,
    link: "https://www.facebook.com/profile.php?id=100014379344550&mibextid=LQQJ4d",
  },
  {
    title: "Instagram",
    icon: mobile,
    link: "https://www.instagram.com/hwng.pet?igsh=MThwbDkxbGtiM3B6eQ%3D%3D&utm_source=qr",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Technopartner",
    icon: technopartner,
    iconBg: "#FFF",
    date: "Aug 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and React Native.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Create a React web application that can be converted into a native mobile app using Capacitor technology. This allows for faster application processing and can be managed with a single codebase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Máy tính xách tay ASUS ROG Zephyrus G16",
    description:
      "Được trang bị bộ xử lý Intel Core i9 và GPU NVIDIA RTX 4080, máy tính xách tay này có thể xử lý mọi tác vụ bạn giao cho nó. Cho dù bạn đang chơi game trên các tựa game AAA hay làm công việc đồ họa phức tạp, Zephyrus G16 đều mang đến hiệu suất mượt mà và hoàn hảo. Màn hình QHD 16 inch với tốc độ làm mới 165Hz mang đến hình ảnh cực kỳ sắc nét và thời gian phản hồi nhanh, giúp bạn đắm chìm hoàn toàn vào mọi trải nghiệm chơi game.",
    price: "29.000.000 VND",
    tags: [
      {
        name: "Intel Core i9",
        color: "blue-text-gradient",
      },
      {
        name: "NVIDIA RTX 4080 GPU",
        color: "green-text-gradient",
      },
    ],
    image: lab1,
    link: "https://netflix-next-mui-git-master-fadhilahdwiananda.vercel.app/",
    source_code_link: "https://github.com/fadhildwia",
  },
];

export { services, technologies, experiences, testimonials, projects };

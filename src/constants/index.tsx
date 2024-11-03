import { NavigationLink, StoryProps } from "@/types";
import cardImage1 from "../../public/imgs/card/image-1.jpeg";
import cardImage2 from "../../public/imgs/card/image-2.jpeg";
import cardImage3 from "../../public/imgs/card/image-3.jpeg";
import cardImage4 from "../../public/imgs/card/image-4.jpeg";
import userImage1 from "../../public/imgs/users/userImage-1.jpeg";
import userImage2 from "../../public/imgs/users/userImage-2.jpeg";
import userImage3 from "../../public/imgs/users/userImage-3.jpeg";
import userImage4 from "../../public/imgs/users/userImage-4.jpeg";
import {
  IconFlag,
  IconLayoutDashboard,
  IconLock,
  IconMailFast,
  IconManualGearbox,
  IconMap2,
  IconMarkdown,
  IconPig,
  IconViewfinder,
} from "@tabler/icons-react";

export const NavigationLinks: NavigationLink[] = [
  {
    link: "/",
    key: "explore",
    label: "Explore",
  },
  {
    link: "/",
    key: "about",
    label: "About",
  },
  {
    link: "/",
    key: "solution",
    label: "Solutions",
  },

  {
    link: "/",
    key: "blog",
    label: "Blog",
  },

  {
    link: "/",
    key: "log_in",
    label: "Log In",
  },
];

export const Categories: NavigationLink[] = [
  {
    link: "/",
    key: "user_interface",
    label: "User Interface",
  },
  {
    link: "/",
    key: "user_experience",
    label: "User Experience",
  },
  {
    link: "/",
    key: "digital_media",
    label: "Digital Media",
  },
  {
    link: "/",
    key: "lifestyle",
    label: "Lifestyle",
  },
  {
    link: "/",
    key: "programming",
    label: "Programming",
  },
  {
    link: "/",
    key: "animation",
    label: "Animation",
  },
];

export const Products: NavigationLink[] = [
  {
    link: "/",
    key: "pricing",
    label: "Pricing",
  },
  {
    link: "/",
    key: "overview",
    label: "Overview",
  },
  {
    link: "/",
    key: "browse",
    label: "Browse",
  },
  {
    link: "/",
    key: "accessibility",
    label: "Accessibility",
  },
  {
    link: "/",
    key: "five",
    label: "Five",
  },
  {
    link: "/",
    key: "changelog",
    label: "Changelog",
  },
];

export const Solutions: NavigationLink[] = [
  {
    link: "/",
    key: "brainstorming",
    label: "Brainstorming",
  },
  {
    link: "/",
    key: "ideation",
    label: "Ideation",
  },
  {
    link: "/",
    key: "wireframing",
    label: "Wireframing",
  },
  {
    link: "/",
    key: "research",
    label: "Research",
  },
  {
    link: "/",
    key: "design",
    label: "Design",
  },
  {
    link: "/",
    key: "concept",
    label: "Concept",
  },
];
export const Resources: NavigationLink[] = [
  {
    link: "/",
    key: "help",
    label: "Help Center",
  },
  {
    link: "/",
    key: "blog",
    label: "Blog",
  },
  {
    link: "/",
    key: "tutorials",
    label: "Tutorials",
  },
  {
    link: "/",
    key: "FAQs",
    label: "FAQs",
  },
  {
    link: "/",
    key: "community",
    label: "Community",
  },
  {
    link: "/",
    key: "events",
    label: "Events",
  },
];
export const Support: NavigationLink[] = [
  {
    link: "/",
    key: "contact",
    label: "Contact Us",
  },
  {
    link: "/",
    key: "developers",
    label: "Developers",
  },
  {
    link: "/",
    key: "documentation",
    label: "Documentation",
  },
  {
    link: "/",
    key: "integrations",
    label: "Integrations",
  },
  {
    link: "/",
    key: "reports",
    label: "Reports",
  },
  {
    link: "/",
    key: "webinar",
    label: "Webinar",
  },
];

export const Company: NavigationLink[] = [
  {
    link: "/",
    key: "about",
    label: "About",
  },
  {
    link: "/",
    key: "press",
    label: "Press",
  },
  {
    link: "/",
    key: "events",
    label: "Events",
  },
  {
    link: "/",
    key: "careers",
    label: "Careers",
  },
  {
    link: "/",
    key: "customers",
    label: "Customers",
  },
  {
    link: "/",
    key: "partners",
    label: "Partners",
  },
];

export const Questions = [
  {
    id: 1,
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, maxime animi aspernatur dolor ipsam ipsum veritatis culpa veniam impedit rerum.",
  },
  {
    id: 5,
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, maxime animi aspernatur dolor ipsam ipsum veritatis culpa veniam impedit rerum.",
  },
  {
    id: 2,
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, maxime animi aspernatur dolor ipsam ipsum veritatis culpa veniam impedit rerum.",
  },
  {
    id: 3,
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, maxime animi aspernatur dolor ipsam ipsum veritatis culpa veniam impedit rerum.",
  },
  {
    id: 4,
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, maxime animi aspernatur dolor ipsam ipsum veritatis culpa veniam impedit rerum.",
  },
];
export const favourites = [
  {
    id: 1,
    icon: (
      <IconMailFast
        color="#C026D3"
        style={{ width: "50px", height: "50px" }}
      ></IconMailFast>
    ),
    title: "Sapien amet est",
    description:
      "Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.",
  },
  {
    id: 2,
    icon: (
      <IconMap2
        color="#C026D3"
        style={{ width: "50px", height: "50px" }}
      ></IconMap2>
    ),
    title: "Tortor ornare",
    description:
      "Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies.",
  },
  {
    id: 3,
    icon: (
      <IconManualGearbox
        color="#C026D3"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    title: "Vel lacus",
    description:
      "Porttitor quis lectus varius quis dolor morbi massa pellentesque.",
  },
  {
    id: 4,
    icon: (
      <IconLock color="#C026D3" style={{ width: "50px", height: "50px" }} />
    ),
    title: "Hendrerit blandit",
    description:
      "A aliquam pharetra in nec vitae ultrices commodo placerat eget.",
  },
  {
    id: 5,
    icon: (
      <IconLayoutDashboard
        color="#C026D3"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    title: "Sapien amet est",
    description:
      "Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.",
  },
  {
    id: 6,
    icon: (
      <IconMarkdown color="#C026D3" style={{ width: "50px", height: "50px" }} />
    ),
    title: "Aliquam lorem et",
    description:
      "Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.",
  },
  {
    id: 7,
    icon: <IconPig color="#C026D3" style={{ width: "50px", height: "50px" }} />,
    title: "Sed aliquam lectus",
    description:
      "Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.",
  },
  {
    id: 8,
    icon: (
      <IconFlag color="#C026D3" style={{ width: "50px", height: "50px" }} />
    ),
    title: "Cursus diam",
    description:
      "Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.",
  },
  {
    id: 9,
    icon: (
      <IconViewfinder
        color="#C026D3"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    title: "Facilisi vel malesuada",
    description:
      "Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.",
  },
];
export const stories = [
  {
    id: 1,
    image: cardImage1.src,
    avatar: userImage1.src,
    title: "Flower Decorations",
    autor: "by Melvina Spring",
  },
  {
    id: 2,
    image: cardImage2.src,
    avatar: userImage2.src,
    title: "Flower Decorations",
    autor: "by Melvina Spring",
  },
  {
    id: 3,
    image: cardImage3.src,
    avatar: userImage3.src,
    title: "Splash",
    autor: "by Rwanda Melflor",
  },
  {
    id: 4,
    image: cardImage4.src,
    avatar: userImage4.src,
    title: "Colorful Face",
    autor: "by Melvina Spring",
  },
];

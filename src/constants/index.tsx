import { NavigationLink } from "@/types";
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
    icon: (
      <IconMailFast
        color="#701a75"
        style={{ width: "64px", height: "64px" }}
      ></IconMailFast>
    ),
    title: "Sapien amet est",
    description:
      "Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.",
  },
  {
    icon: (
      <IconMap2
        color="#701a75"
        style={{ width: "64px", height: "64px" }}
      ></IconMap2>
    ),
    title: "Tortor ornare",
    description:
      "Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies.",
  },
  {
    icon: (
      <IconManualGearbox
        color="#701a75"
        style={{ width: "64px", height: "64px" }}
      />
    ),
    title: "Vel lacus",
    description:
      "Porttitor quis lectus varius quis dolor morbi massa pellentesque.",
  },
  {
    icon: (
      <IconLock color="#701a75" style={{ width: "64px", height: "64px" }} />
    ),
    title: "Hendrerit blandit",
    description:
      "A aliquam pharetra in nec vitae ultrices commodo placerat eget.",
  },
  {
    icon: (
      <IconLayoutDashboard color="#701a75" style={{ width: "64px", height: "64px" }} />
    ),
    title: "Sapien amet est",
    description:
      "Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.",
  },
  {
    icon: (
      <IconMarkdown color="#701a75" style={{ width: "64px", height: "64px" }} />
    ),
    title: "Aliquam lorem et",
    description:
      "Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.",
  },
  {
    icon: <IconPig color="#701a75" style={{ width: "64px", height: "64px" }} />,
    title: "Sed aliquam lectus",
    description:
      "Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.",
  },
  {
    icon: (
      <IconFlag color="#701a75" style={{ width: "64px", height: "64px" }} />
    ),
    title: "Cursus diam",
    description:
      "Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.",
  },
  {
    icon: (
      <IconViewfinder
        color="#701a75"
        style={{ width: "64px", height: "64px" }}
      />
    ),
    title: "Facilisi vel malesuada",
    description:
      "Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.",
  },
];

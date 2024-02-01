import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import steyp from "@/public/steyp.png";
import localclarity from "@/public/localclarity.png";
import fleetpartners from "@/public/fleetpartners.png";
import netflixClone from "@/public/netflixClone.png";
import dashboardapp from "@/public/dashboardapp.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Front-End Developer",
        location: "Dbiz Solutions",
        description:
            "I'm now a front-end developer. My stack includes React, Next.js, TypeScript, Tailwind, Redux. Right now I am working in Drupal project which is php content management system(CMS) framework.",
        icon: React.createElement(FaReact),
        date: "08/2022 - present",
    },
    {
        title: "Front-End Developer",
        location: "Talrop",
        description:
            "I joined here as an intern for 6 months and worked as a front-end developer for another 6 months. mainly working on ReactJs",
        icon: React.createElement(FaReact),
        date: "08/2021 - 08/2022,",
    },
    {
        title: "IT Support Engineer",
        location: "ULCCS Ltd",
        description:
            "I worked as a IT Support engineer for 2 years in this company, where i repair laptop, desktop, printer, security cameras etc. most of time working with hardware parts of these.",
        icon: React.createElement(CgWorkAlt),
        date: "12/2018 - 04/2021",
    },
] as const;

export const projectsData = [
    {
        title: "Steyp",
        description:
            "I worked as a front-end developer on this startup project for 1 year. Users can learn programming by watching videos and completing assignments and workshops given by the courses.",
        tags: ["React", "Context", "styled-components"],
        imageUrl: steyp,
        link: "https://steyp.com/",
    },
    {
        title: "FleetPartners",
        description:
            "Drupal Project for a fleet management company situated in Australia and New-zealand.",
        tags: ["Drupal", "Site-studio", "PHP", "CSS", "JS"],
        imageUrl: fleetpartners,
        link: "https://www.fleetpartners.com.au/",
    },
    {
        title: "Localclarity",
        description:
            "Its a project which is collecting all reviews from all platforms and showing it under one page where business teams can reply for the comments",
        tags: ["React", "Flux", "Scss", "AntD"],
        imageUrl: localclarity,
        link: "https://app.localclarity.com/",
    },
    {
        title: "NetFlix-Clone",
        description: "Its a project that i created for self improving",
        tags: ["React", "css", "JS"],
        imageUrl: netflixClone,
        link: "https://netflix-clone-bay-ten.vercel.app/",
    },
    {
        title: "Dashboard App",
        description:
            "Its a next.js project that i created for learning next.js",
        tags: ["React", "Next.js", "css", "Material UI", "Zustand"],
        imageUrl: dashboardapp,
        link: "https://dashboard-alpha-nine-36.vercel.app/",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "React Native",
    "Next.js",
    "Git",
    "SCSS",
    "Drupal",
    "Material UI",
    "Tailwind",
    "Redux",
] as const;

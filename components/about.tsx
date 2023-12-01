"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Hello there! I'am a passionate and seasoned front-end developer
                celebrating two years of immersive experience in crafting
                seamless and visually stunning digital experiences.
                {/* After graduating with
                a degree in{" "}
                <span className="font-medium">
                    Computer Science and Engineering
                </span>
                , I decided to pursue my passion for programming. I enrolled in
                a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma. I am always
                looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a
                software developer. */}
            </p>

            <p className="mb-3">
                After Graduating Btech in Computer science and engineering I
                worked as a IT support for 2 years and then realized that I need
                to learn something new for me and took an opportunity of being a
                React Intern. from there I learned basics of React and it gave
                me thrills, Once i Completed my internship then I got placed and
                there i got my first real world exposure as a front-end
                developer.
            </p>
            <p className="mb-3">
                <span className="italic">My favorite part of programming</span>{" "}
                is the styling aspect. I <span>love</span> the feeling of
                finally seeing my website as look like design. My core stack is{" "}
                <span className="font-medium">HTML,CSS,JS,ReactJS</span>I also
                know about basics of React Native, Drupal. I am also familiar
                with TypeScript.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing football, watching movies and anime, and playing with my
                dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">Next.js</span>.
            </p>
        </motion.section>
    );
}

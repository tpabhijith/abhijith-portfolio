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
                After earning my Btech in computer science and engineering, I
                worked for two years as an IT support before realising that I
                needed to learn something new. I thus seized the chance to work
                as a React intern. After learning the fundamentals of React from
                there, I became excited about the technology. After completing
                my internship, I was hired and experienced my first real-world
                front-end development experience.
            </p>
            <p className="mb-3">
                The <span className="italic">stylistic element</span> of
                programming is my favourite part of the process. I{" "}
                <span>adore</span> the sensation of finally seeing my website
                come together in terms of design.
                <span className="font-medium">HTML,CSS,JS,ReactJS</span> make up
                my core stack. I am also familiar with the fundamentals of
                Drupal and React Native.Additionally, I am proficient with
                TypeScript.
            </p>
            <p>
                <span className="italic">Aside from computing</span>, I like to
                play football, watch anime, and go to the movies. I also take
                pleasure in
                <span className="font-medium"> picking up new skills</span>. I
                am presently acquiring knowledge of
                <span className="font-medium"> Next.js</span>.
            </p>
        </motion.section>
    );
}

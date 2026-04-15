"use client";

import { useEffect, useState } from "react";
import Skill from './Skill';

export default function About() {
    const [data, setData] = useState(null);

    function GetDATA(){
        fetch("./assets/data_about.json")
        .then((res) => res.json())
        .then((newData) => {
            setData(newData);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    useEffect(() => {
        GetDATA();
    }, []);

    // Group skills by category
    const groupedSkills = data
        ? data.reduce((acc, skill) => {
              if (!acc[skill.category]) {
                  acc[skill.category] = [];
              }
              acc[skill.category].push(skill);
              return acc;
          }, {})
        : {};

    return (
        <div className="p-10 pt-50 max-w-4xl mx-auto">
            <section id="about" className="bg-gray-100 p-8 pb-20 rounded-lg shadow-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">FRONT END</h1>
                    <h2 className="text-2xl font-semibold text-gray-600">WEB DEVELOPER</h2>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
                    <p className="text-gray-700">
                        I’m a JavaScript Frontend Engineer with over 10 years of professional experience building scalable, high-performance web applications. Throughout my career, I’ve worked across diverse industries, delivering clean, maintainable code and intuitive user experiences that align closely with business goals.
                    </p>
                    <p className="text-gray-700">
                        My core expertise lies in modern JavaScript development, with a strong foundation in frontend architecture, performance optimization, and component-driven design. Over the years, I’ve continuously evolved my skill set to stay aligned with industry best practices and emerging technologies.
                    </p>
                    <p className="text-gray-700">
                        Recently, I’ve expanded my stack to include React, applying my deep understanding of JavaScript to build dynamic, responsive, and maintainable interfaces using modern React patterns and best practices.
                    </p>
                    <div className="text-gray-700">
                        I bring:
                        <ul className="list-disc list-inside">
                            <li>A decade of hands-on frontend development experience</li>
                            <li>Strong problem-solving and architectural thinking</li>
                            <li>A focus on performance, scalability, and clean code</li>
                            <li>Experience collaborating with cross-functional teams in agile environments</li>
                            <li>A continuous learning mindset and adaptability to new technologies</li>
                        </ul>
                    </div>
                    <p className="text-gray-700">
                        I’m passionate about building products that not only work flawlessly but also provide meaningful user experiences.
                    </p>
                </div>
            </section>
            <section id="skills" className="mt-10">
                {Object.keys(groupedSkills).map((category) => (
                    <div
                        key={category}
                        className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {groupedSkills[category].map((skill, index) => (
                                <Skill
                                    key={index}
                                    title={skill.title}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
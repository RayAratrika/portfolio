import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import "./portfolio.css";
import Project from "./Project";
import projects from "./projects.json";

function LoadingScreen({ onFinish }) {
    const message = "Hello, so I see you've reached me!";
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = -1;
        const interval = setInterval(() => {
            if (i < message.length - 1) {
                i++;
                setText((prev) => prev + message[i]);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    const screen = document.querySelector(".loading-screen");
                    if (screen) screen.classList.add("fade-out");
                    setTimeout(onFinish, 800);
                }, 1000);
            }
        }, 80);
        return () => clearInterval(interval);
    }, [onFinish]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="loading-screen">
            <p className="loading-text">
                {text}
                <span className={`cursor-block ${showCursor ? "visible" : "invisible"}`}></span>
            </p>
        </div>
    );
}

export default function Portfolio() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <LoadingScreen onFinish={() => setIsLoading(false)} />;
    }

    return (
        <div className="portfolio-wrapper">
            {/* Hero Section */}
            <section className="hero">
                <h1>Aratrika Ray</h1>
                <p>Full Stack Developer | Results-driven Senior Software Engineer who's passionate about engineering solutions | Primary tech stacks: Java/NodeJs</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/aratrika-ray-63b99b196/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:aratrika.ray1999@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a href="/Aratrika_Ray_Resume.pdf" download>
                        <FaFileDownload title="Download Resume" />
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="section">
                <h2>About Me</h2>
                <p>
                    I'm a backend-focused full stack developer with a strong command of modern technologies.<br/>
                    I thrive in high-stakes environments, turning challenging problems into reliable, scalable & maintainable solutions.<br/>
                    With 3+ years of hands-on experience architecting distributed systems, scaling backend infrastructure, and writing secure,
                    production-grade code in cloud-native environments I bring strong technical expertise and a passion for building scalable solutions
                    that solve real-world problems.<br/>
                    Beyond code, what sets me apart is my engineering mindset. I don't wait for problems to be handed to me—
                    I hunt them down, deconstruct them, and rebuild systems that are better than before. I am a keen and quick learner. <br/>
                    I've led various cross team functions, I've worked closely with customer teams at many instances to prioritize feature development that directly impacted revenue.
                </p>
            </section>

            {/* Skills Section */}
            <section className="section">
                <h2>Skills</h2>
                <table className="skills-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Technologies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Languages & Frameworks</td>
                            <td>Java, Spring Boot, Node.js, Python</td>
                        </tr>
                        <tr>
                            <td>Databases</td>
                            <td>MongoDB, MySQL</td>
                        </tr>
                        <tr>
                            <td>Tools & Technologies</td>
                            <td>AWS (EC2, S3), Docker, RabbitMQ, Git, JIRA, Sumologic</td>
                        </tr>
                        <tr>
                            <td>Concepts</td>
                            <td>Microservices, REST APIs, System Design, Stateless Architecture, Monitoring & Alerting</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Modules Section */}
            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    {
                        projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                description={project.description}
                                tasks={project.tasks}
                                techStack={project.techStack} />
                        ))}
                </div>
            </section>


            {/* Contact Section */}
            <section className="section">
                <h2>Contact</h2>
                <p>
                    Reach out to me at <a href="mailto:aratrika.ray1999@gmail.com">aratrika.ray1999@gmail.com</a>
                </p>
            </section>

            <footer className="footer">
                &copy; {new Date().getFullYear()} Aratrika Ray. All rights reserved.
            </footer>
        </div>
    );
}

"use client";
import { ReactNode } from "react";
import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiNodedotjs,
  SiDotnet,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiUnrealengine,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Tooltip } from "react-tooltip";

// Import ThreeBackground and AIChatbot with SSR disabled
const ThreeBackground = dynamic(
  () => import("./ThreeBackground/ThreeBackground"),

  {
    ssr: false,
  }
);

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const skills = {
    languages: [
      {
        name: "JavaScript",
        level: 90,
        icon: SiJavascript,
        color: "#F7DF1E",
        description:
          "Modern JavaScript (ES6+) with extensive experience in async programming and functional concepts.",
      },
      {
        name: "TypeScript",
        level: 85,
        icon: SiTypescript,
        color: "#3178C6",
        description:
          "Strong typing, interfaces, and advanced TypeScript features for building scalable applications.",
      },
      {
        name: "C#",
        level: 85,
        icon: TbBrandCSharp,
        color: "#512BD4",
        description:
          "Backend development with .NET Core, LINQ, and Entity Framework.",
      },
      {
        name: "C++",
        level: 80,
        icon: SiCplusplus,
        color: "#00599C",
        description:
          "Game development and system programming with modern C++ features.",
      },
      {
        name: "Java",
        level: 80,
        icon: DiJava,
        color: "#ED8B00",
        description:
          "Enterprise application development with Spring Boot and Java EE.",
      },
    ],
    frontend: [
      {
        name: "React.js",
        level: 90,
        icon: SiReact,
        color: "#61DAFB",
        description:
          "Component-based architecture, hooks, context API, and state management with Redux.",
      },
      {
        name: "Next.js",
        level: 85,
        icon: SiNextdotjs,
        color: "#ffffff",
        description:
          "Server-side rendering, static site generation, and API routes with Next.js 13+.",
      },
      {
        name: "Svelte",
        level: 80,
        icon: SiSvelte,
        color: "#FF3E00",
        description:
          "Reactive UI development with Svelte's compile-time approach.",
      },
      {
        name: "Flutter",
        level: 85,
        icon: SiFlutter,
        color: "#02569B",
        description:
          "Cross-platform mobile development with Flutter widgets and state management.",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        icon: SiNodedotjs,
        color: "#339933",
        description:
          "RESTful APIs, microservices, and real-time applications with Express and Socket.io.",
      },
      {
        name: "ASP.NET",
        level: 85,
        icon: SiDotnet,
        color: "#512BD4",
        description:
          "Web APIs, MVC architecture, and microservices with .NET Core.",
      },
      {
        name: "Spring Boot",
        level: 80,
        icon: SiSpringboot,
        color: "#6DB33F",
        description:
          "Java-based backend development with Spring Boot and Spring Cloud.",
      },
    ],
    databases: [
      {
        name: "MySQL",
        level: 85,
        icon: SiMysql,
        color: "#4479A1",
        description:
          "Relational database design, optimization, and complex queries.",
      },
      {
        name: "PostgreSQL",
        level: 85,
        icon: SiPostgresql,
        color: "#4169E1",
        description:
          "Advanced PostgreSQL features including JSON operations and full-text search.",
      },
    ],
  };

  const professionalInterests = [
    {
      title: "Game Development",
      description:
        "Passionate about creating immersive gaming experiences using Unreal Engine 5, focusing on gameplay mechanics and interactive environments.",
      icon: SiUnrealengine,
      areas: [
        "Unreal Engine 5",
        "C++",
        "Blueprint",
        "Game Design",
        "3D Modeling",
      ],
    },
    {
      title: "Full-Stack Development",
      description:
        "Passionate about building end-to-end applications, combining frontend aesthetics with backend functionality.",
      icon: FaLaptopCode,
      areas: ["Web Applications", "RESTful APIs", "Database Design"],
    },
    {
      title: "Mobile Development",
      description:
        "Exploring cross-platform mobile development with Flutter to create seamless user experiences.",
      icon: FaMobileAlt,
      areas: ["Flutter", "Cross-Platform", "Mobile UI/UX"],
    },
    {
      title: "Cloud Computing",
      description:
        "Interested in cloud technologies and distributed systems architecture.",
      icon: FaCloud,
      areas: ["AWS", "Azure", "Microservices"],
    },
  ];

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]/80 text-gray-100">
      <ThreeBackground />
      <main className="relative z-10">
        <nav className="fixed top-0 w-full bg-[#0a0a0a]/60 backdrop-blur-sm border-b border-[#2a2a2a]">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-800 bg-clip-text text-transparent"
              >
                Bu Yong Tatt
              </Link>
              <div className="space-x-6">
                <Link
                  href="#about"
                  className="hover:text-violet-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-violet-500 transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#interests"
                  className="hover:text-violet-500 transition-colors"
                >
                  Interests
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-violet-500 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center p-8 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-indigo-700 to-purple-800 bg-clip-text text-transparent">
              Bu Yong Tatt
            </h1>
            <h2 className="text-2xl mb-8 text-gray-300">
              Junior Software Engineer
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate about creating elegant solutions and learning new
              technologies. Specializing in web development and always excited
              to take on new challenges.
            </p>
          </motion.div>
        </motion.section>

        {/* Skills section */}
        <motion.section
          id="skills"
          className="min-h-screen py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-violet-600 to-indigo-800 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Technical Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  className="p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-6 capitalize text-violet-400">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2">
                            <skill.icon
                              data-tooltip-id={`tooltip-${skill.name}`}
                              data-tooltip-content={skill.description}
                              className="w-5 h-5 transition-transform hover:scale-110 cursor-help"
                              style={{ color: skill.color }}
                            />
                            <span className="text-gray-300">{skill.name}</span>
                            <Tooltip
                              id={`tooltip-${skill.name}`}
                              className="z-50 max-w-xs !bg-gray-900 !text-gray-100 !border !border-violet-900 !opacity-100"
                              place="top"
                              delayShow={200}
                            />
                          </div>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-600 to-indigo-800 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Professional Interests Section */}
        <motion.section
          id="interests"
          className="min-h-screen py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-violet-600 to-indigo-800 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Areas of Interest
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {professionalInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      {interest.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4">{interest.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {interest.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-3 py-1 text-sm rounded-full bg-[#2a2a2a] text-gray-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="min-h-screen py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-violet-600 to-indigo-800 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <motion.a
                href="mailto:yongtatt981213@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-400 truncate">
                      yongtatt981213@hotmail.com
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+601124273578"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400 truncate">+601124273578</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/601124273578"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-400 truncate">+601124273578</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yong-tatt-bu-1957761ba/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      LinkedIn
                    </h3>
                    <p className="text-gray-400 truncate">Yong Tatt Bu</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/buyongtatt"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group p-6 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] hover:border-violet-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-violet-900/20 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <FaGithub className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      GitHub
                    </h3>
                    <p className="text-gray-400 truncate">@buyongtatt</p>
                  </div>
                </div>
              </motion.a>
            </div>

            <motion.div className="mt-12 text-center" variants={fadeInUp}>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Feel free to reach out! I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your
                visions.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
        {children}
      </main>
    </div>
  );
};

export default Layout;

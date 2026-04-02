import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { HeaderLink } from "@/components/components";

const socialUrls = {
  linkedin: "https://linkedin.com/in/euanhouse",
  github: "https://github.com/ehouse3",
};

const projectPaths = {
  covidDashboard: "/projects/covid-dashboard",
  nittanyBusiness: "/projects/nittany-business",
  tableTopSimulator: "/projects/tabletop-simulator",
  taskManager: "/projects/task-manager",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euan House's Portfolio",
  description:
    "Euan House's portfolio and projects about full stack software engineering. Featuring a full-stack task management application and a frontend covid dashboard app",
};

function Navbar(): ReactNode {
  // TODO:
  // For mobile screens, convert navbar to a horizontal grid, and stack the home, projects, and socials on top of each other instead of horizontal
  return (
    // md:overflow-visible and overflow-auto fixs mobile background cutoff on mobile
    <div className="bg-navbar grid-cols-[1fr_2fr_1fr] overflow-auto md:grid md:overflow-visible">
      <div id="home" className="hidden items-center justify-start md:flex">
        <Link href="/">
          <div className="py-1 pl-3 text-6xl">Euan House</div>
        </Link>
      </div>

      <div id="projects" className="flex justify-around">
        <HeaderLink href={projectPaths.taskManager}>Task Manager</HeaderLink>
        <HeaderLink href={projectPaths.covidDashboard}>
          Covid Dashboard
        </HeaderLink>
        <HeaderLink href={projectPaths.nittanyBusiness}>
          Nittany Business Application
        </HeaderLink>
        <HeaderLink href={projectPaths.tableTopSimulator}>
          Tabletop Simulator
        </HeaderLink>
      </div>

      <div id="socials" className="hidden justify-end gap-4 px-4 md:flex">
        <Link
          className="hover:bg-navbar-hover flex items-center px-2"
          href={socialUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<i className="ci ci-linkedin ci-3x"></i>}
        </Link>
        <Link
          className="hover:bg-navbar-hover flex items-center px-2"
          href={socialUrls.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<i className="ci ci-github-light ci-3x"></i>}
        </Link>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* CDN for social media icons, consider self hosting? */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.7/app/ci.min.css"
        />
      </head>
      <body className="bg-background min-h-full">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

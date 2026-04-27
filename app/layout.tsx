import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Noto_Sans_Cham,
} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { HeaderLink, LineBreak } from "@/components/components";

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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Euan House's Portfolio",
  description:
    "Euan House's portfolio and projects about full stack software engineering. Featuring a full-stack task management application and a frontend covid dashboard app",
};

function Navbar(): ReactNode {
  // TODO:
  // For mobile screens, convert navbar to a horizontal grid, and stack the home, projects, and socials on top of each other
  return (
    <header>
      {/* // md:overflow-visible and overflow-auto fixs mobile background cutoff on mobile */}
      <div className="bg-navbar grid-cols-[1fr_2fr_1fr] overflow-auto md:grid md:overflow-visible">
        <div
          data-desc="home"
          className="hidden items-center justify-start md:flex"
        >
          <Link href="/" title="Home">
            <div className="py-1 pl-3 text-6xl">Euan House</div>
          </Link>
        </div>

        <div data-desc="projects" className="flex justify-around">
          <HeaderLink href={projectPaths.taskManager} title="Task Manager">
            <h4>Task Manager</h4>
          </HeaderLink>
          <HeaderLink
            href={projectPaths.covidDashboard}
            title="Covid Dashboard"
          >
            <h4>Covid Dashboard</h4>
          </HeaderLink>
          <HeaderLink
            href={projectPaths.nittanyBusiness}
            title="Nittany Business Application"
          >
            <h4>Nittany Business Application</h4>
          </HeaderLink>
          <HeaderLink
            href={projectPaths.tableTopSimulator}
            title="Tabletop Simulator"
          >
            <h4>Tabletop Simulator</h4>
          </HeaderLink>
        </div>

        <div
          data-desc="socials"
          className="hidden justify-end gap-4 px-4 md:flex"
        >
          <Link
            className="hover:bg-navbar-hover flex items-center px-2"
            href={socialUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            {<i className="ci ci-linkedin ci-3x" aria-hidden="true"></i>}
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            className="hover:bg-navbar-hover flex items-center px-2"
            href={socialUrls.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            {<i className="ci ci-github-light ci-3x" aria-hidden="true"></i>}
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
      <LineBreak></LineBreak>
    </header>
  );
}

interface ForeGroundProps {
  children?: ReactNode;
}
/** Foreground component that wraps body and sets max width for content */
function ForeGround(props: ForeGroundProps) {
  return (
    <div className="bg-foreground1 m-12 mx-auto max-w-4xl flex-1 text-lg">
      {props.children}
    </div>
  );
}

/** Footer component that lays at the bottom of each page.
 * Displays social's links for medium or smaller screens (Navbar doesn't display them on smaller screens)
 */
function Footer() {
  return (
    <div className="flex justify-center gap-4 p-4 md:hidden">
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
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${montserrat.variable} h-full antialiased`}>
      <head>
        {/* CDN for social media icons, consider self hosting? */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.7/app/ci.min.css"
        />
      </head>
      <body className="bg-background flex min-h-screen flex-col">
        <Navbar></Navbar>
        <ForeGround>{children}</ForeGround>
        <Footer></Footer>
      </body>
    </html>
  );
}

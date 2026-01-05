import { Metadata } from "next";
import Image from "next/image";
import minginaLogo from "../../public/images/wordmark-black.svg";
import minginaLogoLight from "../../public/images/wordmark-white.png";
import minginaIcon from "../../public/images/monogram.svg";
import {
  FileDown,
  Github,
  Mail,
  Twitter,
  MapPin,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mingina Mathea - Software Engineer",
  description: "A portfolio website for Mingina Mathea",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const LINKS = {
  email: "workwithme@mingina.com",
  github: "https://github.com/mmathea1",
  twitter: "https://x.com/mingina_mathea",
  linkedin: "https://ke.linkedin.com/in/minginam",
  resumeRequest: "resumerequest@mingina.com",
};

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="btn btn-ghost btn-circle hover:bg-base-200 focus; outline-none focus:ring focus:ring-primary/30"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-dvh w-full bg-base-100 flex flex-col">

      <header className="w-full border-b border-base-300 bg-base-100">
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center md:justify-start sm:justify-center"
          >
            <Image
              src={minginaLogo}
              alt="Mingina wordmark"
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <span className="badge badge-ghost badge-sm border-base-300 hidden md:inline-flex gap-2">
              <Mail className="h-3.5 w-3.5" />
              {LINKS.email}
            </span>
            <span className="badge badge-ghost badge-sm border-base-300 hidden md:inline-flex gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Nairobi, Kenya
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full px-6 flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
          <div className="rounded-2xl border border-base-300 p-6 shadow-sm">
            <Image
              src={minginaIcon}
              height={140}
              width={140}
              alt="Mingina monogram"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I am Mingina
            </h1>
            <p className="text-lg md:text-xl opacity-80">Software Engineer</p>
            <p className="text-sm md:text-base opacity-70 leading-relaxed">
              I like building reliable software that matters over time and
              evolves with use.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              className="btn btn-primary rounded-2xl"
              href={`mailto:${LINKS.email}?subject=Resume%20Request&body=Hi%20Mingina,%20I%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.`}
            >
              <FileDown className="h-5 w-5" /> Request Resume
            </Link>

            <Link
              className="btn btn-outline rounded-2xl"
              href={`mailto:${LINKS.email}?subject=Hello%20Mingina`}
            >
              <Mail className="h-5 w-5" /> Email Me
            </Link>

            <SocialLink href={LINKS.twitter} label="Twitter / X">
              <Twitter size={22} />
            </SocialLink>
            <SocialLink href={LINKS.github} label="GitHub">
              <Github size={22} />
            </SocialLink>
            <SocialLink href={LINKS.linkedin} label="LinkedIn">
              <Linkedin size={22} />
            </SocialLink>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-base-300 bg-neutral-700 text-neutral-content">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-3">
          <aside className="flex items-center gap-2">
            <Image
              src={minginaLogoLight}
              alt="Mingina wordmark (light)"
              className="h-18 w-auto"
            />
          </aside>
          <div className="flex items-center gap-2">
            <p className="text-sm opacity-90">
              © {year} Mingina. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <SocialLink href={LINKS.twitter} label="Twitter / X">
              <Twitter size={18} />
            </SocialLink>
            <SocialLink href={LINKS.github} label="GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink href={LINKS.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import minginaLogo from "../../public/images/file.svg";
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
  title: "Mingina Portfolio",
  description: "A portfolio website for Mingina Mathea",
};

const LINKS = {
  email: "workwithme@mingina.com",
  github: "https://github.com/mmathea1",
  twitter: "https://x.com/mingina_mathea",
  linkedin: "https://ke.linkedin.com/in/minginam",
  resumeRequest: "",
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
  return (
    <div className="flex items-center justify-center p-6 bg-base-200  min-h-screen">
      <div className="w-full max-w-5xl rounded-3xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-base-300 bg-base-100">
          <Link href={"/"} className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-base-200 border border-base-300">
              <Image
                src={minginaLogo}
                alt="Mingina Logo"
                width={22}
                height={22}
              />
              <span className="hidden sm:block font-semibold tracking-tight">
                Mingina Mathea
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="badge badge-ghost border-base-300 hidden md:inline-flex">
              <Mail />
              {LINKS.email}
            </span>
            <span className="badge badge-ghost border-base-300 hidden md:inline-flex">
              <MapPin />
              Nairobi, Kenya
            </span>
          </div>
        </header>

        <main className="px-6 py-12 md:py-16">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="rounded-3xl border border-base-300 bg-base-200 p-6 shadow-sm">
              <Image
                src={minginaLogo}
                height={140}
                width={140}
                alt="Mingina Profile Picture"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 items-center text-center mt-8 mb-6 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I am Mingina
            </h1>
            <p className="text-lg md:text-xl opacity-80">Software Engineer</p>
            <p className="max-w-xl text-sm md:text-base opacity-70 leading-relaxed">
              I like building reliable software that matters over time and
              evolves with use.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              className="btn btn-primary rounded-2xl"
              href={`mailto:${LINKS.resumeRequest}?subject=Resume Request&body=Hi Mingina, I would like to request a copy of your resume.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown className="h-5 w-5" /> Request Resume
            </Link>
            <Link
              className="btn btn-outline rounded-2xl"
              href={`mailto:${LINKS.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" /> Email Me
            </Link>
            <SocialLink href={LINKS.twitter} label="Follow me on Twitter">
              <Twitter size={24} />
            </SocialLink>
            <SocialLink href={LINKS.github} label="Follow me on GitHub">
              <Github size={24} />
            </SocialLink>
            <SocialLink
              href={LINKS.linkedin}
              label="Connect with me on LinkedIn"
            >
              <Linkedin size={24} />
            </SocialLink>
          </div>
        </main>

        <footer className="footer sm:footer-horizontal bg-neutral-700 text-neutral-content flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-base-300">
          <aside className="grid-flow-col items-center">
            <Image
              src={minginaLogo}
              alt="Mingina Logo"
              width={22}
              height={22}
            />
            <p>© {new Date().getFullYear()} Mingina. All rights reserved.</p>
          </aside>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <SocialLink href={LINKS.twitter} label="Follow me on Twitter">
              <Twitter size={18} />
            </SocialLink>
            <SocialLink href={LINKS.github} label="Follow me on GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink
              href={LINKS.linkedin}
              label="Connect with me on LinkedIn"
            >
              <Linkedin size={18} />
            </SocialLink>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import minginaLogo from "../../public/images/file.svg";
import { FolderDown, Github, Mail, Twitter, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mingina Portfolio",
  description: "A portfolio website for Mingina Mathea",
};

const LINKS = {
  email: "workwithme@mingina.com",
  github: "https://github.com/mmathea1",
  twitter: "https://x.com/mingina_mathea",
  resumeRequest: "",
};
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
                height={200}
                width={200}
                alt="Mingina Profile Picture"
                priority
              />
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I am Mingina
            </h1>
            <p className="text-lg md:text-xl opacity-80">Software Engineer</p>
            <p className="max-w-xl text-sm md:text-base opacity-70 leading-relaxed">
              I like building reliable software that matters over time and
              evolves with use.
            </p>
          </div>


          <div className="flex flex-wrap gap-3">
            <Twitter size={24} />
            <Mail size={24} />
            <Github size={24} />
            <FolderDown size={24} />
          </div>
        </main>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 gap-6">
          <aside className="grid-flow-col items-center">
            <Image
              src={minginaLogo}
              alt="Mingina Logo"
              width="40"
              height="40"
            />
            <p>© {new Date().getFullYear()} Mingina. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Twitter size={24} />
            <Github size={24} />
          </nav>
        </footer>
      </div>
    </div>
  );
}

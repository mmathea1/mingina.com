import { Metadata } from "next";
import Image from "next/image";
import minginaLogo from "../../public/images/file.svg";
import { FolderDown, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mingina Portfolio",
  description: "A portfolio website for Mingina",
};

export default function Home() {
  return (
    <div className="flex items-center m-auto justify-between py-10 flex-col container mx-auto min-h-screen">
      <main className=" mx-auto items-center">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost text-xl">
              <Image
                src={minginaLogo}
                alt="Mingina Logo"
                width="40"
                height="40"
              />
            </Link>
          </div>

          <div className="flex-none">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
              <li>workwithme@mingina.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center gap-4 mt-20">
          <div className="flex items-center">
            <Image
              src={minginaLogo}
              height={200}
              width={200}
              alt="Mingina Profile Picture"
            />
          </div>
          <div className="flex items-center flex-col text-center">
            <h1>Hi, I am Mingina</h1>
            <h2>Software Engineer</h2>
            <p>
              I like building reliable software that matters over time and
              evolves with use.
            </p>
          </div>
          <div className="flex flex-row">
            <Twitter size={24} />
            <Mail size={24} />
            <Github size={24} />
            <FolderDown size={24} />
          </div>
        </div>
      </main>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <Image src={minginaLogo} alt="Mingina Logo" width="40" height="40" />
          <p>© {new Date().getFullYear()} Mingina. All rights reserved.</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Twitter size={24} />
          <Github size={24} />
        </nav>
      </footer>
    </div>
  );
}

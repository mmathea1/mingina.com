import { Metadata } from "next";
import Image from "next/image";
import minginaLogo from "../../public/images/file.svg";

export const metadata: Metadata = {
  title: "Mingina Portfolio",
  description: "A portfolio website for Mingina",
};

export default function Home() {
  return (
    <div>
      <main>
        <nav>
          <Image src={minginaLogo} alt="Mingina Logo" width="40" height="40" />
          <ol>
            <li>workwithme@mingina.com</li>
            <li>Nairobi, Kenya</li>
          </ol>
        </nav>
        <section>
          <div>
            <Image
              src={minginaLogo}
              height={200}
              width={200}
              alt="Mingina Profile Picture"
            />
          </div>
          <div>
            <h1>Hi, I am Mingina</h1>
            <h2>tagline</h2>
            <p>short descriotion</p>
          </div>
          <div>social icons</div>
        </section>
      </main>
      <footer>mingina.com 2025</footer>
    </div>
  );
}

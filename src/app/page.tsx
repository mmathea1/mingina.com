import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mingina Portfolio',
  description: 'A portfolio website for Mingina',
};

export default function Home() {
  return (
   <main>
    <nav>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ol>
    </nav>
   </main>
  );
}

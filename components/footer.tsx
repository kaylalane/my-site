/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  //small is for small print / terms and conditions
  return (
    <footer className="flex ">
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/kaylamarielane/">
            <FaLinkedin className="fa-linkedin" />
            <span className="sr-only">Kayla Lane&apos;s Linkedin</span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/kaylalane">
            <FaGithub className="fa-github" />
            <span className="sr-only">Kayla Lane&apos;s Github</span>

          </Link>
        </li>
        <li>
          <Link href="mailto:kaylalane188@icloud.com">
            <FaRegEnvelope className="fa-email"/>
            <span className="sr-only">Kayla Lane&apos;s Email</span>
          </Link>
        </li>
      </ul>

      <div>

        <p>
          <small>&copy; 2023 Kayla Lane</small>
        </p>
      </div>
    </footer>
  );
}

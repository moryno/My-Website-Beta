import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <section className="flex items-center justify-between py-5 relative">
      <Link
        href={"/"}
        aria-label="Home"
        rel="noopener nonreferrer"
        className="font-medium text-base md:text-lg lg:text-xl tracking-tighter hover:underline underline-offset-8 decoration-[#73C606]"
      >
        Maurice Nganga
      </Link>
      <article className="flex items-center gap-2 md:gap-5">
        <Link
          href={"/about"}
          aria-label="About page"
          rel="noopener nonreferrer"
          className="hidden sm:block text-xs md:text-sm font-medium hover:underline underline-offset-8 decoration-[#73C606]"
        >
          About
        </Link>
        <Link
          href={"/blogs"}
          aria-label="Blogs page"
          rel="noopener nonreferrer"
          className="hidden sm:block text-xs md:text-sm font-medium hover:underline underline-offset-8 decoration-[#73C606]"
        >
          Blogs
        </Link>
        <Link
          href={"/projects"}
          aria-label="Projects page"
          rel="noopener nonreferrer"
          className="hidden sm:block text-xs md:text-sm font-medium hover:underline underline-offset-8 decoration-[#73C606]"
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
           aria-label="Contact page"
          rel="noopener nonreferrer"
          className="hidden sm:block text-xs md:text-sm font-medium hover:underline underline-offset-8 decoration-[#73C606]"
        >
          Contact
        </Link>
        <ToggleTheme />
      </article>
    </section>
  );
};

export default Header;

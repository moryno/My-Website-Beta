import Link from "next/link"
import ToggleTheme from "./ToggleTheme"


const Header = () => {
  return (
     <section className="flex items-center justify-between py-5">
            <Link href={"/"} 
                      rel="noopener nonreferrer"
                      className="font-medium text-xl tracking-tighter hover:underline underline-offset-8 decoration-[#73C606]">
                        Maurice Nganga
                    </Link>
            <article className="flex items-center gap-5">
            <Link href={"/about"} 
                   
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-[#73C606]">
                       About
                    </Link>
                    <Link href={"/blogs"} 
                   
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-[#73C606]">
                        Blogs
                    </Link>
                    <Link href={"/projects"} 
                   
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-[#73C606]">
                       Projects
                    </Link>
                    <Link href={"/contact"} 
                   
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-[#73C606]">
                       Contact
                    </Link>
                    <ToggleTheme />
            </article>
        </section>
  )
}

export default Header
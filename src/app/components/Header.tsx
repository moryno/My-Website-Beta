import Link from "next/link"


export const Header = () => {
  return (
     <section className="flex items-center justify-between py-5">
            <Link href={"/"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-pink-500">
                        Maurice Nganga
                    </Link>
            <article className="flex items-center gap-5">
            <Link href={"/"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-pink-500">
                       About
                    </Link>
                    <Link href={"/"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-pink-500">
                        Blogs
                    </Link>
                    <Link href={"/"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-pink-500">
                       Projects
                    </Link>
                    <Link href={"/"} 
                      target="_blank"
                      rel="noopener nonreferrer"
                      className="font-medium hover:underline underline-offset-8 decoration-pink-500">
                       Contact
                    </Link>
            </article>
        </section>
  )
}

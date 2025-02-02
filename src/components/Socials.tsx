import Link from "next/link";
import { FaBluesky, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href="https://github.com/moryno" target="_blank" rel="noopener nonreferrer"><FaGithub className="text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-2" /></Link>
      <Link href="https://www.linkedin.com/in/mauricenganga/" target="_blank" rel="noopener nonreferrer"><FaLinkedin className="text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-2" /></Link>
      <Link href="https://bsky.app/profile/mauricenganga.bsky.social" target="_blank" rel="noopener nonreferrer"><FaBluesky className="text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-2" /></Link>
      <Link href="https://medium.com/@mauricenganga41" target="_blank" rel="noopener nonreferrer"><FaMedium className="text-xl transform transition-all duration-500 hover:scale-150 hover:rotate-2" /></Link>
   
    
    
    
    </div>
  )
}

export default Socials
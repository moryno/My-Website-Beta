import { FaBluesky, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-5">
    <FaGithub className="text-lg" />
    <FaLinkedin className="text-lg" />
    <FaBluesky className="text-lg" />
    <FaMedium className="text-lg" />
    </div>
  )
}

export default Socials
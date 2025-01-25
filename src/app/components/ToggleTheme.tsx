import Image from "next/image"

const ToggleTheme = () => {
  return (
    <div className="w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between relative">
        <Image src="/moon.png" alt="This is moon icon" width={16} height={16} />
        <div className="absolute w-4 h-4 rounded-full bg-white" />
        <Image src="/sun.png" alt="This is sun icon" width={16} height={16} />
    </div>
  )
}

export default ToggleTheme
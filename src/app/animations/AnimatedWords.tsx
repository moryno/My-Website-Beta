import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

type AnimatedWordsProps = {
    title: string;
    style: string
}

const AnimatedWords = ({ title, style } : AnimatedWordsProps) => {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

       useEffect(() => {
                 if(inView){
                    ctrls.start("visible")
                 }else{
                    ctrls.start("hidden")
                 }
             }, [ctrls, inView]);
    
             const wordAnimation = {
                hidden: {
                    opacity: 0,
                    y: 150
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: [0.2, 0.65, 0.3, 0.9]
                    }
                }
            }

  return (
    <h1 aria-label={title} role="heading">
        <motion.span className={style} ref={ref}>
            {
                title.split(" ").map((word, i) => (
                    <motion.div 
                      key={i}
                      initial="initial"
                      animate={ctrls}
                      className="inline-block whitespace-nowrap overflow-hidden last:-mr-10 pb-2 sm:pb-0"
                      transition={{
                        delayChildren: i * 0.25,
                        staggerChildren: 0.05
                      }}
                      >
                        <motion.span 
                         className="inline-block"
                         variants={wordAnimation}
                        >
                            { word + "\u00A0" }
                        </motion.span>
                    </motion.div>
                ))
            }
        </motion.span>
    </h1>
  )
}

export default AnimatedWords
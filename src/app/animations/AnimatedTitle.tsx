import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

type AnimatedTitleProps = {
    text: string;
    className: string;
    wordSpace?: string;
    charSpace?: string;
    delay?: number
}

export default function AnimatedTitle({
    text,
    className,
    wordSpace,
    charSpace
} : AnimatedTitleProps){
    const ctrs = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if(inView){
            ctrs.start("visible")
        }else{
            ctrs.start("hidden")
        }
    }, [ctrs, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {}
    }
    const charAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    }

    return (
        <h2 aria-label={text} role="heading" className={className}>
            {
                text.split(" ").map((word, i) => (
                    <motion.span 
                        key={i}
                        ref={ref}
                        aria-hidden="true"
                        initial="hidden"
                        animate={ctrs}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: i * 0.25,
                            staggerChildren: 0.05
                        }}
                        className={`inline-block whitespace-nowrap ${wordSpace}`}
                        >
                        {
                            word.split("").map(( char, index) => (
                                <motion.span
                                  key={index}
                                  aria-hidden="true"
                                  variants={charAnimation}
                                  className={`inline-block ${charSpace}`}
                                  >
                                    { char }
                                </motion.span>
                            ))
                        }
                    </motion.span>
                ))
            }
        </h2>
    )
}


export const imageAnimation = {
    initial: {
        y: 50,
        opacity: 0,
        scale: 0.8
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: `0em`,
        transition: {
            delay: 2,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}


export const bodyAnimation = {
    initial: {
        y: `1em`,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: `0em`,
        transition: {
            delay: 6.5,
            duration: 1.5,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}

export const riseWithFade = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.65, 0, 0.35, 1]
        }
    }
}

export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
        }
    }
}

export const wordAnimation = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}

export const wordAnimation2 = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}

export const fromLeftContainerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 5,
            duration: 1.5,
            staggerChildren: 0.5
        }
    }
}

export const leftChildVariants ={
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}
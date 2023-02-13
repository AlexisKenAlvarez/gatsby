import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaPaw } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Hero = () => {

    const animation = useAnimation()
    useEffect(() => {
        sequence()
    }, [])

    async function sequence() {
        await animation.start({ scale: [0.5, 1], opacity: [0, 1], transition: { duration: 0.8 } })
        animation.start({
            y: [0, 10, -10],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 2
            }
        })

    }

    return (
        <section className='w-full h-screen bg-gradient-to-br from-[#C8C28D] to-[#EEEBC4] relative'>

            <nav className='w-full h-auto absolute top-0'>
                <div className='max-w-[1700px] w-full mx-auto p-6 md:px-10 flex justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <img src="/logo.webp" alt="Logo" className='w-14'></img>
                        <p className='font-poppins font-bold text-2xl'>Gatsby</p>
                    </div>
                    {/* <GiHamburgerMenu className='text-mybrown text-3xl cursor-pointer' /> */}
                </div>
            </nav>

            <div className='absolute w-20 h-20 border-2 text-mybrown text-xl bottom-5 right-5'>
                <FaPaw className='rotate-[-45deg] absolute bottom-0 right-0' />
                <FaPaw className='rotate-[-45deg] absolute bottom-5 left-0 text-2xl' />
                <FaPaw className='rotate-[-45deg] absolute top-0 right-4 text-3xl' />
            </div>

            <div className='w-full max-w-[1700px] h-full mx-auto flex items-center justify-center z-10 relative'>
                <div className='w-fit h-auto flex items-center gap-x-5 px-8'>
                    <div className='sm:block hidden'>
                        <motion.img animate={animation} alt="HeroImage" src="/logo.webp" className='w-[50vh]'></motion.img>
                    </div>
                    <div className=''>
                        <div className='font-passion lg:text-7xl text-5xl font-bold'>
                            <motion.h1 animate={{x: [250, 0], opacity: [0, 1] }} transition={{duration: 0.6}} >ELON'S FIRST AND</motion.h1>
                            <motion.h1 animate={{x: [250, 0], opacity: [0, 1] }} transition={{duration: 0.6, delay: 0.1}}>OLDEST <span className='text-mybrown'>DOGS</span></motion.h1>
                        </div>
                        <motion.p  animate={{x: [250, 0], opacity: [0, 1] }} transition={{duration: 0.6, delay: 0.2}} className='lg:max-w-[30rem] mt-4 lg:text-md text-sm max-w-[25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </motion.p>

                        <motion.div animate={{x: [250, 0], opacity: [0, 1] }} transition={{duration: 0.6, delay: 0.3}} className='flex items-center w-fit px-8 py-3 gap-x-4 bg-mybrown font-poppins text-white rounded-xl mt-12 cursor-pointer hover:bg-brownhover transition-colors ease-in-out duration-300'>
                            <p className='lg:text-lg text-sm'>Learn more</p>
                            <FaPaw />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full absolute top-0 bg-bones z-0'>

            </div>
        </section>
    )
}

export default Hero
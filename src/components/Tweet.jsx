import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tweet = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.8 })
    const [subRef, subView] = useInView({ triggerOnce: true, threshold: 0.8 })


    return (
        <section className='w-full h-auto flex lg:flex-row flex-col pb-20 lg:pb-0 items'>
            <div className='lg:w-[100%] bg-[#EEEBD5] p-12 flex items-center justify-center'>
                <img src="/Mockup.webp" alt="mockup" className='w-[80vh] mt-3'></img>
            </div>
            <div className='w-full items-center flex px-8 justify-center lg:justify-start mt-20 lg:mt-0'>
                <div className='h-fit w-fit lg:ml-20 '>
                    <motion.div initial={{opacity: 0, x: 200}} animate={titleView ? {x: 0, opacity:  1 } : {}} transition={{duration: 0.8}}  className='sm:text-6xl text-5xl font-passion' ref={titleRef}>
                        <h1>LOREM IPSUM</h1>
                        <h1>TEMPOR LABORIS</h1>
                    </motion.div>

                    <motion.p initial={{opacity: 0, x: 200}} animate={subView ? {x: 0, opacity:  1 } : {}} transition={{duration: 0.8}} className='font-poppins lg:max-w-[30rem] max-w-[25rem] mt-4 leading-8' ref={subRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Tweet
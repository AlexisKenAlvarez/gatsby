import React from 'react'
import { FaPaw } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const RoadmapCard = ({ phase }) => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

    return (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 100 } : {}} transition={{ duration: 1.3, ease: [.21, 1.03, .27, 1] }} className='max-w-[30rem] h-auto bg-card shadow-myborder relative pt-12 pb-[5rem] mt-9 mb-9 mx-auto' ref={ref}>
            <div className='w-[90%] px-3 mx-auto'>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className='absolute bg-white px-7 left-6 py-2 top-[-1.4rem]'>
                <p className='uppercase font-bold text-xl font-poppins'>Phase {phase}</p>
            </div>


            <img src="/wave.webp" alt="wave" className='absolute bottom-0 w-full'></img>
            <FaPaw className='bottom-4 right-2 text-mybrown absolute text-2xl' />
        </motion.div>
    )
}

export default RoadmapCard
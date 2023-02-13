import React from 'react'
import { FaPaw } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const Card = ({ number }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 })

    return (
        <motion.div initial={{scale: 0.5, opacity: 0}} animate={ inView ? {scale: 1, opacity: 100} : {}} transition={{duration: 1.3, ease: [.21, 1.03, .27, 1]}} className='min-h-[25rem] max-w-[23rem] shadow-myborder bg-card pb-8' ref={ref}>
            <div className='w-full h-16 bg-white text-mybrown text-3xl flex items-center justify-center'>
                <FaPaw />
            </div>
            <div className='w-full h-auto px-10'>
                <h1 className='text-center font-poppins mt-9 text-2xl uppercase font-semibold'>Lorem Ipsum</h1>
                <p className='text-center indent-8 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                <p className='font-poppins text-2xl font-bold text-center mt-10'>
                    {number}
                </p>
            </div>

        </motion.div>
    )
}

export default Card
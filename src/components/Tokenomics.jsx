import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from "typewriter-effect"

const Tokenomics = () => {
    const [count, setCount] = useState(0)
    const [dogref, dogview] = useInView({ triggerOnce: true, threshold: 0.8 })

    useEffect(() => {

        if (dogview) {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        setCount(val => val + 1)
                    }, i * 110)
                }
            }, 500)

        }

    }, [dogview])

    return (
        <section className='w-full h-auto py-20 bg-bones bg-secondarybg'>
            <div className='w-full max-w-[1700px] mx-auto flex px-8 items-center justify-around md:flex-row flex-col gap-y-14'>
                <div className='font-passion'>
                    <h1 className='text-5xl text-center'>TOKENOMICS</h1>
                    <div className='w-full mt-10 flex items-center gap-x-32 justify-between text-percent lg:text-6xl text-5xl font-bold'>
                        <motion.div initial={{scale: 0.5, opacity: 0}} animate={dogview ? {scale: 1, opacity: 1} : {}} transition={{duration: 0.5}} className='text-center'>
                            <h1 className='font-bold'>{count}%</h1>
                            <p className='mt-2 text-2xl'>BUY</p>
                        </motion.div>
                        <motion.div initial={{scale: 0.5, opacity: 0}} animate={dogview ? {scale: 1, opacity: 1} : {}} transition={{duration: 0.5}}  className='text-center'>
                            <h1 className='font-bold'>{count}%</h1>
                            <p className='mt-2 text-2xl'>SELL</p>
                        </motion.div>
                    </div>
                    <p className='text-center mt-16 text-3xl text-percent'>Contact Address: </p>

                    <p className='text-center text-3xl font-poppins font-medium text-percent'>
                        <Typewriter options={{loop: true}} onInit={(typewriter) => {
                            typewriter.typeString("0x000000000000").start().pauseFor(4000)

                        }} />
                    </p>
                </div>
                <div>
                    <motion.img initial={{ opacity: 0, x: 250 }} animate={dogview ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8 }} src="TokenDog.webp" alt="TokenDog" className='w-[40vh]' ref={dogref}></motion.img>
                </div>

            </div>
        </section>
    )
}

export default Tokenomics
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from "typewriter-effect"
import { HiClipboard } from 'react-icons/hi'

const Tokenomics = () => {
    const [count, setCount] = useState(0)
    const [dogref, dogview] = useInView({ triggerOnce: true, threshold: 0.8 })

    const [contactAddress, setContact] = useState('0x000000000000')
    const [clicked, setClicked] = useState(false)

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

    const handleCopy = () => {
        navigator.clipboard.writeText(contactAddress)
        setClicked(true)

        setTimeout(() => {
            setClicked(false)

        }, 1000);

    }

    return (
        <section className='w-full h-auto py-20 bg-bones bg-secondarybg'>
            <div className='w-full max-w-[1700px] mx-auto flex px-8 items-center justify-around md:flex-row flex-col gap-y-14'>
                <div className='font-passion'>
                    <h1 className='text-5xl text-center'>TOKENOMICS</h1>
                    <div className='w-full mt-10 flex items-center gap-x-32 justify-between text-percent lg:text-6xl text-5xl font-bold'>
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={dogview ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5 }} className='text-center'>
                            <h1 className='font-bold'>{count}%</h1>
                            <p className='mt-2 text-2xl'>BUY</p>
                        </motion.div>
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={dogview ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5 }} className='text-center'>
                            <h1 className='font-bold'>{count}%</h1>
                            <p className='mt-2 text-2xl'>SELL</p>
                        </motion.div>
                    </div>
                    <div className=' w-fit h-fit relative mt-16 mx-auto flex items-center text-percent gap-x-3' >
                        <HiClipboard className='text-2xl mt-[-.3rem] cursor-pointer' onClick={handleCopy} />
                        <p className='text-center text-3xl text-percent'>{clicked ? "Copied to clipboard!" : "Contact Address"} </p>

                    </div>
                    <p className='text-center text-3xl font-poppins font-medium text-percent cursor-pointer' onClick={handleCopy}>
                        <Typewriter options={{ loop: true }} onInit={(typewriter) => {
                            typewriter.typeString(contactAddress).start().pauseFor(4000)

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
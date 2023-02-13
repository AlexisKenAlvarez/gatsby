import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='w-full h-auto min-h-[28rem] bg-mybrown flex items-center justify-center relative overflow-hidden py-14'>
            <div className='max-w-[1700px] w-full mx-auto flex items-center justify-around px-8 md:flex-row flex-col pb-10'>
                <img alt="Logo" src="/logo.webp" className='w-[16rem]'></img>
                <div className='text-white font-poppins text-center md:text-left'>
                    <h1 className='font-passion text-4xl'>Contact us through:</h1>
                    <p>loremipsum@gmail.com</p>
                    <div className='flex mt-3 gap-x-4 text-xl w-fit mx-auto md:mx-0'>
                        <SiTwitter className='hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-card cursor-pointer' />
                        <FaTelegramPlane className='hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-card cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='w-full h-9 absolute bottom-0 bg-card flex items-center justify-center font-poppins lg:text-md sm:text-sm text-xs'>
                All Rights Reserved © Bluelock Inu 2022.
            </div>
        </section>
    )
}

export default Footer
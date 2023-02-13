import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RoadmapCard from '../Templates/RoadmapCard';
import { IoArrowUndoOutline, IoArrowRedoOutline } from 'react-icons/io5'


const Roadmap = () => {

    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className='w-full h-auto py-28 bg-road bg-topog  border-percent shadow-roadmap overflow-hidden'>
            <div className='w-full mx-auto max-w-[1700px] px-8'>
                <h1 className='text-center text-5xl font-passion select-none mt-16'>Roadmap</h1>

                <div className=' max-w-[33rem] lg:max-w-[66rem] mx-auto mt-10 relative border-2'>
                    <div className='md:block hidden select-none'>
                        <IoArrowUndoOutline className='absolute left-[-1.8rem] my-auto top-0 bottom-0 text-3xl cursor-pointer text-mybrown' onClick={() => slider?.current?.slickPrev()} />
                        <IoArrowRedoOutline className='absolute right-[-1.8rem] my-auto top-0 bottom-0 text-3xl cursor-pointer text-mybrown' onClick={() => slider?.current?.slickNext()} />
                    </div>


                    <Slider {...settings} ref={slider}>
                        <RoadmapCard phase="1" />
                        <RoadmapCard phase="2" />
                        <RoadmapCard phase="3" />
                        <RoadmapCard phase="4" />
                    </Slider>
                </div>

            </div>
        </section>
    )
}

export default Roadmap
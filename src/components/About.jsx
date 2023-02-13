import React from 'react'
import Card from '../Templates/Card'


const About = () => {

    const cardList = [
        {
            label: "01"
        },
        {
            label: "02"
        },
        {
            label: "03"
        },

    ]


    return (
        <section className='w-full h-auto bg-secondarybg bg-bones'>
            <div className='max-w-[1700px] w-full h-auto mx-auto overflow-hidden pb-32 px-8'>
                <h1 className='text-center mt-24 font-passion text-5xl'>GOAL OF GATSBY</h1>

                <div className='mt-14 mx-auto flex items-center justify-center gap-x-10 lg:flex-row flex-col gap-y-10'>
                    {cardList.map((items) => {
                        return (
                            <Card key={items.label} number={items.label} />
                        )
                    })}

                </div>



            </div>
        </section>
    )
}

export default About
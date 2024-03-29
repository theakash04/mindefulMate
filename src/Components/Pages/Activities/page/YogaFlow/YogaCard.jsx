import React from 'react'

function YogaCard({title, Description, Img}) {
    return (
        <div className='w-full grid place-content-center '>
            <div  class=" pl-3 py-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl dark:border-gray-700 dark:bg-gray-800">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Img} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal sm:pl-10">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-5">{Description}</p>
                </div>
            </div>
        </div>
    )
}

export default YogaCard

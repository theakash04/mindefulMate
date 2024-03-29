import React from 'react'
import Card from '../Card'
import './Pholder.css'
import Framer from './Framer';




function PlaceHolder({setDefCard}) {
    

    const data = [
        {
            main: "I am feeling lonely",
            secondary: "give some sport or activities to play"
        },
        {
            main: "Feeling bored",
            secondary: "recommend a good book or movie"
        },
        {
            main: "Stressed out",
            secondary: "suggest relaxation techniques or hobbies"
        },
        {
            main: "Need motivation",
            secondary: "provide inspirational quotes or success stories"
        }
    ];


    function SendDefault(item){
        setDefCard(item)
    }

    return (
        <>
            <div className='flex items-center w-full justify-center'>
                <span className='text-4xl px-5 pt-10 font-extrabold dark:text-white'>Hi, I am Friday!</span>
            </div>
            <div className='w-full flex justify-center items-center relative'>  
                <div className='w-72 py-10 flex items-center justify-center'>
                    <Framer />
                </div>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 absolute bottom-24 left-0 right-0 sm:ml-44 sm:mr-10 mx-2 z-0'>
            {data.map((item, index) => (
                <div key={index} className='card-animation'  onClick={() => SendDefault(item.main)}>
                    <Card main={item.main} secondary={item.secondary}/>
                </div>
            ))}
            </div>
        </>
    )
}

export default PlaceHolder

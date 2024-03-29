import React from 'react'
import { frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
    frame16,
    frame17,
    frame18,
    frame19,
    frame20,
    frame21,
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
    frame27,
    frame28,
    frame29,
    frame30,
    frame31,
    frame32,
    frame33,
    frame34,
    frame35,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
    frame51,
    frame52,
    frame53,
    frame54,
    frame55,
    frame56,
    frame57,
    frame58,
    frame59,
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
    frame66,
    frame67,
    frame68,
    frame69,
    frame70,
    frame71,
    frame72,
    frame73,
    frame74,
    frame75,
    frame76,
    frame77,
    frame78,
    frame79,
    frame80,
    frame81,
    frame82,
    frame83,
    frame84,
    frame85,
    frame86,
    frame87,
    frame88,
    frame89,
    frame90,
    frame91,
    frame92,
    frame93,
    frame94,
    frame95,
    frame96,
    frame97,
    frame98,
    frame99,
    frame100,
    frame101,
    frame102,
    frame103,
    frame104,
    frame105,
    frame106,
    frame107,
    frame108,
    frame109,
    frame110,
    frame111,
    frame112,
    frame113,
    frame114,
    frame115,
    frame116,
    frame117,
    frame118,
    frame119,
    frame120, } from '../../assets/blenderPng/Animate';
import { useState } from 'react'
import { useEffect } from 'react'

function Framer() {
    const frames = [
        frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
    frame16,
    frame17,
    frame18,
    frame19,
    frame20,
    frame21,
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
    frame27,
    frame28,
    frame29,
    frame30,
    frame31,
    frame32,
    frame33,
    frame34,
    frame35,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
    frame51,
    frame52,
    frame53,
    frame54,
    frame55,
    frame56,
    frame57,
    frame58,
    frame59,
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
    frame66,
    frame67,
    frame68,
    frame69,
    frame70,
    frame71,
    frame72,
    frame73,
    frame74,
    frame75,
    frame76,
    frame77,
    frame78,
    frame79,
    frame80,
    frame81,
    frame82,
    frame83,
    frame84,
    frame85,
    frame86,
    frame87,
    frame88,
    frame89,
    frame90,
    frame91,
    frame92,
    frame93,
    frame94,
    frame95,
    frame96,
    frame97,
    frame98,
    frame99,
    frame100,
    frame101,
    frame102,
    frame103,
    frame104,
    frame105,
    frame106,
    frame107,
    frame108,
    frame109,
    frame110,
    frame111,
    frame112,
    frame113,
    frame114,
    frame115,
    frame116,
    frame117,
    frame118,
    frame119,
    frame120,
    ];

    const [frameIndex, setFrameIndex] = useState(0);
    const [frame, setFrame] = useState(frames[frameIndex]);
    const [forwardDirection, setForwardDirection] = useState(true); // To track the direction of animation

    useEffect(() => {
        const interval = setInterval(() => {
            // Update frame index based on direction
            if (forwardDirection) {
                setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
            } else {
                setFrameIndex((prevIndex) => (prevIndex - 1 + frames.length) % frames.length);
            }
            
        }, 50);

        return () => clearInterval(interval);
    }, [forwardDirection]);

    useEffect(() => {
        setFrame(frames[frameIndex]);
    }, [frameIndex, frames]);

    useEffect(() => {
        // Change direction when reaching the end or the beginning
        if (frameIndex === frames.length - 1) {
            setForwardDirection(false);
        } else if (frameIndex === 0) {
            setForwardDirection(true);
        }
    }, [frameIndex, frames]);

    return (
        <div className='w-[500px] sm:flex items-center justify-center hidden'>
            <img src={frame} alt="" className='sm:w-full w-72'/>
        </div>
    )
}

export default Framer


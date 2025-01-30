import React from 'react'
import { useEffect, useState } from 'react'

const TextChange = () => {
    const texts = ['Hello, My name is Akshay Kumar']
    const [currentText, setCurrentText] = useState("")
    const [endValue, setEndValue] = useState(true)
    const [isforward, setIsForward] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if (isforward) {
                setEndValue((prev) => prev + 1);
            }
            else {
                setEndValue((prev) => prev - 1);
            }
            if (endValue > texts[index].length) {
                setIsForward(false);
            }
            if (endValue < 2.1) {
                setIsForward(true)
                setIndex((prev) => prev & texts.length);
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, [endValue, isforward, index, texts]);
    return (
        <div className='transition ease duration-300'>
            {currentText}
        </div>
    )
}

export default TextChange

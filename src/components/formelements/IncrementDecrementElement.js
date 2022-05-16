import React, { useRef, useEffect } from 'react';
import '../../css/FormAdditionWorksheet.css';

function IncrementDecrementElement({ children, minDecrement, maxIncrement, inc_dec_Handler, currentValue }) {
    const decrementRef = useRef("");
    const incrementRef = useRef("");
    const inputRef = useRef("");

    const decrementHandler = () => {
        currentValue != minDecrement && (inc_dec_Handler(currentValue - 1));
    }

    const incrementHandler = () => {
        currentValue != maxIncrement && (inc_dec_Handler(currentValue + 1));
    }

    const inputHandler = (e) => {
        inc_dec_Handler(Number(e.target.value));
    }

    const enabledisableButton = () => {
        if (currentValue == minDecrement || currentValue < minDecrement) {
            decrementRef.current.disabled = true;
            decrementRef.current.style.backgroundColor = "#c5c5c5";
        }
        else {
            decrementRef.current.disabled = false;
            decrementRef.current.style.backgroundColor = "";
        }

        if (currentValue == maxIncrement || currentValue > maxIncrement) {
            incrementRef.current.disabled = true;
            incrementRef.current.style.backgroundColor = "#c5c5c5";
        }
        else {
            incrementRef.current.disabled = false;
            incrementRef.current.style.backgroundColor = "";
        }

        // set input border to red if value is not valid in input tag 
        if (currentValue >= minDecrement && currentValue <= maxIncrement) {
            inputRef.current.style.border = "";
        }
        else {
            inputRef.current.style.border = "1px solid red";
        }
        // set input border to red if value is not valid in input tag 
    }

    useEffect(() => {
        enabledisableButton();
    }, [currentValue])

    return (
        <>
            <label className='IncrementDecrementElementLable'>{children}</label>
            <div className='IncrementDecrementContainer'>
                <button onClick={decrementHandler} className="decrement" ref={decrementRef} type="button">
                <i className='fa-solid fa-minus'></i>
                </button>
                <input value={currentValue} onChange={inputHandler} ref={inputRef}></input>
                <button onClick={incrementHandler} className="increment" ref={incrementRef} type="button">
                    <i className='fa-solid fa-plus icon'></i>
                </button>
            </div>
        </>
    )
}

export default React.memo(IncrementDecrementElement);
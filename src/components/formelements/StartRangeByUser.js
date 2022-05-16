import React, { useRef, useEffect } from 'react';
import '../../css/FormAdditionWorksheet.css';

function StartRangeByUser(props) {
    const { children, startRange, endRange, startRangeByuser, updateStartRangeByuser, selectedOperation } = props;
    const inputRangeByUserRef = useRef(null);

    // set input border to red if value is not valid in the input tag 
    const errorHandler = () => {
        if (startRangeByuser >= startRange && startRangeByuser <= endRange) {
            inputRangeByUserRef.current.style.border = "";
        }
        else {
            inputRangeByUserRef.current.style.border = "1px solid red";
        }
    }
    // set input border to red if value is not valid in the input tag 

    const enableInputRangeOnMixed = () => {
        selectedOperation == "Mixed" ? inputRangeByUserRef.current.disabled = false :
        inputRangeByUserRef.current.disabled = true;
    }

    useEffect(() => {
        errorHandler();
        enableInputRangeOnMixed();
    }, [startRangeByuser, selectedOperation])


    return (
        <>
            <label className='StartRangeByUserLable'>
                {children}
                &nbsp;
                <span className='rangeInstruction'>(between {startRange} to {endRange})</span>
            </label>
            <div className='StartRangeByUserContainer'>
                <input ref={inputRangeByUserRef} className='StartRangeByUserInput' value={startRangeByuser} placeholder={startRange} onChange={(e) => updateStartRangeByuser(Number(e.target.value))}></input>
                <span className='StartRangeByUserTo'>to</span>
                <span className='EndRange'>{endRange}</span>
            </div>
        </>
    )
}

export default React.memo(StartRangeByUser)
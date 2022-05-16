import React, { useState, useMemo } from 'react';
import WorksheetTitleElement from './formelements/WorksheetTitleElement';
import IncrementDecrementElement from './formelements/IncrementDecrementElement';
import StartRangeByUser from './formelements/StartRangeByUser';
import OperationSelectionEle from './formelements/OperationSelectionEle';
import '../css/FormAdditionWorksheet.css';

function FormAdditionWorksheet(props) {
  const { maxDigits, maxNumberOfProblems,worksheetGenerator,WorksheetTitle,setWorksheetTitle } = props;
  const [digits, setdigits] = useState(1);
  const [numberOfProblems, setnumberOfProblems] = useState(10);
  const [startRangeByuser, setStartRangeByuser] = useState(null);
  const [selectedOperation,setselectedOperation] = useState("Mixed");

  // function for finding lower range and upper range 
  const addendRangeFinder = useMemo(() => {
    let LowerRange = 1, UpperRange = 9;
    if (digits >= 1 && digits <= maxDigits) {
      LowerRange = Math.pow(10, (digits - 1));
      UpperRange = Math.pow(10, (digits)) - 1;
      setStartRangeByuser(LowerRange);
    }
    else{
      setStartRangeByuser(LowerRange);
    }
    //return set lower and upper range as a  array
    return [LowerRange,UpperRange]
  }, [digits,selectedOperation])
  // function for finding lower range and upper range 

  
  return (
    <div className='FormAdditionContainer'>
      <WorksheetTitleElement setWorksheetTitle={setWorksheetTitle} WorksheetTitle={WorksheetTitle}>
        Worksheet Title
      </WorksheetTitleElement>
      <IncrementDecrementElement maxIncrement={maxDigits} minDecrement={1} inc_dec_Handler={setdigits} currentValue={digits} >Number of digits</IncrementDecrementElement>
      <IncrementDecrementElement maxIncrement={maxNumberOfProblems} minDecrement={10} inc_dec_Handler={setnumberOfProblems} currentValue={numberOfProblems}>Number of problems</IncrementDecrementElement>
      <OperationSelectionEle setselectedOperation={setselectedOperation} >Select Addition Opetation</OperationSelectionEle>
      <StartRangeByUser selectedOperation={selectedOperation} startRange={addendRangeFinder[0]} endRange={addendRangeFinder[1]} startRangeByuser={startRangeByuser} updateStartRangeByuser={setStartRangeByuser}>Enter Addend Range</StartRangeByUser>
      <button onClick = 
      {()=>worksheetGenerator(numberOfProblems,addendRangeFinder[1],startRangeByuser,digits,selectedOperation)} 
      className='AdditionWorksheetButton'>Create
      </button>
    </div>
  )
}

export default React.memo(FormAdditionWorksheet);